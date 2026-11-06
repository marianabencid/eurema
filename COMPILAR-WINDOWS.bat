@echo off
setlocal EnableExtensions
cd /d "%~dp0"
echo ==========================================
echo EUREMA - Preparar sitio para Netlify
echo ==========================================
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: No se encontro Node.js.
  echo Instala la version LTS desde https://nodejs.org/ y vuelve a ejecutar este archivo.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: No se encontro npm. Reinstala Node.js LTS.
  pause
  exit /b 1
)
set SITE=%~dp0_site
if exist "%SITE%" rmdir /s /q "%SITE%"
mkdir "%SITE%"
copy /y "%~dp0index.html" "%SITE%\index.html" >nul
copy /y "%~dp0favicon.svg" "%SITE%\favicon.svg" >nul
mkdir "%SITE%\algebra" 2>nul
mkdir "%SITE%\geometria" 2>nul
xcopy "%~dp0algebra\index.html" "%SITE%\algebra\" /y >nul
xcopy "%~dp0geometria\*" "%SITE%\geometria\" /e /i /y >nul
call :buildtool "algebra\valor-numerico"
if errorlevel 1 goto :error
call :buildtool "algebra\sistema-ecuaciones"
if errorlevel 1 goto :error
call :buildtool "algebra\factorizacion"
if errorlevel 1 goto :error
echo.
echo ==========================================
echo LISTO. La carpeta _site ya esta preparada.
echo En Netlify Drop, arrastra la carpeta _site.
echo ==========================================
pause
exit /b 0

:buildtool
set TOOL=%~1
echo.
echo ---- Instalando y compilando %TOOL% ----
cd /d "%~dp0%TOOL%"
call npm install --no-audit --no-fund
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1
if not exist "%SITE%\%TOOL%" mkdir "%SITE%\%TOOL%"
xcopy "%~dp0%TOOL%\dist\*" "%SITE%\%TOOL%\" /e /i /y >nul
if errorlevel 1 exit /b 1
cd /d "%~dp0"
exit /b 0

:error
echo.
echo ERROR: Fallo la instalacion o compilacion de una herramienta.
echo Revisa el mensaje anterior y comparte una captura para corregirlo.
pause
exit /b 1
