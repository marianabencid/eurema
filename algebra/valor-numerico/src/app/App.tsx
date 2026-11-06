import { useState } from "react";

export default function App() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [aReplaced, setAReplaced] = useState(false);
  const [bReplaced, setBReplaced] = useState(false);
  const [powersAnswered, setPowersAnswered] = useState(false);

  const nextFrame = () => setCurrentFrame(currentFrame + 1);
  const prevFrame = () => {
    if (currentFrame > 1) {
      setCurrentFrame(currentFrame - 1);
      // Reset states when going back
      if (currentFrame === 6) setPowersAnswered(false);
      if (currentFrame === 5) {
        setAReplaced(false);
        setBReplaced(false);
      }
    }
  };

  const resetApp = () => {
    setCurrentFrame(1);
    setAReplaced(false);
    setBReplaced(false);
    setPowersAnswered(false);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setTimeout(() => nextFrame(), 600);
    }
  };

  const handlePowersAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPowersAnswered(true);
    }
  };

  // Navigation Header Component
  const NavigationHeader = ({ showBack }: { showBack: boolean }) => (
    <div className="navigation-header absolute top-8 left-8 right-8 flex justify-between items-center z-10">
      <button
        onClick={prevFrame}
        disabled={!showBack}
        className={`nav-button-back px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
          showBack
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
            : "opacity-0 cursor-not-allowed"
        }`}
      >
        ← Atrás
      </button>
      <button
        onClick={resetApp}
        className="nav-button-exit px-6 py-3 bg-red-100 text-red-700 rounded-lg text-lg font-medium hover:bg-red-200 transition-colors"
      >
        ✕ Salir
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="w-[1440px] h-[900px] bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-xl overflow-hidden flex flex-col relative">

        {/* Frame 1: Introducción */}
        {currentFrame === 1 && (
          <div className="frame frame-1 w-full h-full flex flex-col">
            <NavigationHeader showBack={false} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <h1 className="frame-title text-5xl font-bold text-gray-900 mb-4">
                Misión: Encontrar el valor oculto de la expresión 🔐
              </h1>
              <p className="frame-subtitle text-2xl text-gray-600 mb-12">
                ¡Aprendamos a evaluar expresiones algebraicas paso a paso!
              </p>

              <div className="values-container space-y-4 text-3xl mb-12">
                <div className="value-a">
                  <span className="text-gray-600">a =</span>{" "}
                  <span className="font-bold">3</span>
                </div>
                <div className="value-b">
                  <span className="text-gray-600">b =</span>{" "}
                  <span className="font-bold">4</span>
                </div>
              </div>

              <div className="expression text-7xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                a² - 2ab + b²
              </div>
            </div>

            <div className="frame-footer pb-16 flex justify-center">
              <button
                onClick={nextFrame}
                className="action-button primary-button px-16 py-4 bg-blue-600 text-white text-2xl rounded-xl hover:bg-blue-700 transition-colors"
              >
                Comenzar
              </button>
            </div>
          </div>
        )}

        {/* Frame 2: Identificar Variables */}
        {currentFrame === 2 && (
          <div className="frame frame-2 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <p className="step-indicator text-2xl text-blue-600 font-bold mb-4">
                ¡Primer paso!
              </p>
              <h2 className="frame-title text-4xl font-bold text-gray-900 mb-6">
                Identifica las variables
              </h2>
              <p className="frame-subtitle text-2xl text-gray-600 mb-16">
                Las variables son letras que representan números desconocidos.
              </p>

              <div className="expression text-7xl font-bold tracking-wide mb-8 whitespace-nowrap">
                <span className="text-blue-600">a</span>² - 2
                <span className="text-blue-600">a</span>
                <span className="text-blue-600">b</span> +{" "}
                <span className="text-blue-600">b</span>²
              </div>
              <p className="helper-text text-xl text-gray-500 italic">
                Estas son las variables que vamos a reemplazar
              </p>
            </div>

            <div className="frame-footer pb-16 flex justify-center">
              <button
                onClick={nextFrame}
                className="action-button primary-button px-12 py-3 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Frame 3: Ver los Valores */}
        {currentFrame === 3 && (
          <div className="frame frame-3 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <p className="step-indicator text-2xl text-blue-600 font-bold mb-4">
                ¡Segundo paso!
              </p>
              <h2 className="frame-title text-4xl font-bold text-gray-900 mb-6">
                Observa sus valores
              </h2>
              <p className="frame-subtitle text-2xl text-gray-600 mb-16">
                Cada variable tiene asignado un número específico.
              </p>

              <div className="expression text-7xl font-bold tracking-wide mb-12 whitespace-nowrap">
                <span className="text-blue-600">a</span>² - 2
                <span className="text-blue-600">a</span>
                <span className="text-blue-600">b</span> +{" "}
                <span className="text-blue-600">b</span>²
              </div>

              <div className="values-highlighted flex gap-8 text-4xl mb-8">
                <div className="value-box value-a-box bg-yellow-100 px-8 py-4 rounded-xl">
                  <span className="text-blue-600 font-bold">a</span> = <span className="font-bold">3</span>
                </div>
                <div className="value-box value-b-box bg-yellow-100 px-8 py-4 rounded-xl">
                  <span className="text-blue-600 font-bold">b</span> = <span className="font-bold">4</span>
                </div>
              </div>
              <p className="helper-text text-xl text-gray-500 italic">
                Estos son sus valores
              </p>
            </div>

            <div className="frame-footer pb-16 flex justify-center">
              <button
                onClick={nextFrame}
                className="action-button primary-button px-12 py-3 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Frame 4: Preparar Sustitución */}
        {currentFrame === 4 && (
          <div className="frame frame-4 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <p className="step-indicator text-2xl text-blue-600 font-bold mb-4">
                ¡Tercer paso!
              </p>
              <h2 className="frame-title text-4xl font-bold text-gray-900 mb-6">
                Prepara la sustitución
              </h2>
              <p className="frame-subtitle text-2xl text-gray-600 mb-16">
                Encerramos las variables entre paréntesis antes de reemplazarlas con valores.
              </p>

              <div className="expression text-6xl font-bold tracking-wide mb-8 whitespace-nowrap">
                (<span className="text-blue-600">a</span>)² - 2(
                <span className="text-blue-600">a</span>)(
                <span className="text-blue-600">b</span>) + (
                <span className="text-blue-600">b</span>)²
              </div>
              <p className="helper-text text-xl text-gray-500 italic">
                Encierra las variables antes de reemplazar
              </p>
            </div>

            <div className="frame-footer pb-16 flex justify-center">
              <button
                onClick={nextFrame}
                className="action-button primary-button px-12 py-3 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Frame 5: Reemplazar Variables */}
        {currentFrame === 5 && (
          <div className="frame frame-5 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <p className="step-indicator text-2xl text-blue-600 font-bold mb-4">
                ¡Cuarto paso!
              </p>
              <h2 className="frame-title text-4xl font-bold text-gray-900 mb-6">
                Reemplaza cada variable
              </h2>
              <p className="frame-subtitle text-2xl text-gray-600 mb-16">
                Haz clic en los botones para sustituir los valores.
              </p>

              <div className="expression text-6xl font-bold tracking-wide mb-12 whitespace-nowrap">
                (
                {aReplaced ? (
                  <span className="replaced-value text-yellow-600">3</span>
                ) : (
                  <span className="variable text-blue-600">a</span>
                )}
                )² - 2(
                {aReplaced ? (
                  <span className="replaced-value text-yellow-600">3</span>
                ) : (
                  <span className="variable text-blue-600">a</span>
                )}
                )(
                {bReplaced ? (
                  <span className="replaced-value text-yellow-600">4</span>
                ) : (
                  <span className="variable text-blue-600">b</span>
                )}
                ) + (
                {bReplaced ? (
                  <span className="replaced-value text-yellow-600">4</span>
                ) : (
                  <span className="variable text-blue-600">b</span>
                )}
                )²
              </div>
            </div>

            <div className="frame-footer pb-16 flex justify-center gap-4">
              <button
                onClick={() => setAReplaced(true)}
                disabled={aReplaced}
                className={`action-button replace-button replace-a-button px-8 py-4 text-xl rounded-lg transition-colors ${
                  aReplaced
                    ? "bg-green-100 text-green-700 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {aReplaced ? "✓ a reemplazada con 3" : "Reemplazar a"}
              </button>
              <button
                onClick={() => setBReplaced(true)}
                disabled={bReplaced}
                className={`action-button replace-button replace-b-button px-8 py-4 text-xl rounded-lg transition-colors ${
                  bReplaced
                    ? "bg-green-100 text-green-700 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {bReplaced ? "✓ b reemplazada con 4" : "Reemplazar b"}
              </button>
              {aReplaced && bReplaced && (
                <button
                  onClick={nextFrame}
                  className="action-button continue-button px-8 py-4 bg-green-600 text-white text-xl rounded-lg hover:bg-green-700 transition-colors"
                >
                  Continuar →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Frame 6: Orden de Operaciones */}
        {currentFrame === 6 && (
          <div className="frame frame-6 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <p className="step-indicator text-2xl text-blue-600 font-bold mb-4">
                ¡Quinto paso!
              </p>
              <h2 className="frame-title text-4xl font-bold text-gray-900 mb-6">
                ¿Qué resolvemos primero?
              </h2>
              <p className="frame-subtitle text-2xl text-gray-600 mb-16">
                ¡Recuerda el orden de las operaciones!
              </p>

              <div className="expression text-6xl font-bold tracking-wide mb-12 whitespace-nowrap">
                (3)² - 2(3)(4) + (4)²
              </div>

              {powersAnswered && (
                <div className="feedback-container space-y-6">
                  <p className="feedback-message text-3xl font-bold text-green-600">
                    ¡Excelente!
                  </p>
                  <div className="calculation-steps text-2xl text-gray-600 space-y-2">
                    <p>3² = 9</p>
                    <p>4² = 16</p>
                  </div>
                  <div className="expression-solved text-6xl font-bold tracking-wide whitespace-nowrap mt-8">
                    <span className="text-green-600">9</span> - 2(3)(4) +{" "}
                    <span className="text-green-600">16</span>
                  </div>
                </div>
              )}
            </div>

            <div className="frame-footer pb-16 flex justify-center gap-4">
              {!powersAnswered ? (
                <>
                  <button
                    onClick={() => handlePowersAnswer(true)}
                    className="action-button choice-button correct-choice px-8 py-4 border-2 border-gray-300 rounded-lg text-xl hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    Potencias (exponentes)
                  </button>
                  <button
                    onClick={() => handlePowersAnswer(false)}
                    className="action-button choice-button incorrect-choice px-8 py-4 border-2 border-gray-300 rounded-lg text-xl hover:border-red-500 hover:bg-red-50 transition-all"
                  >
                    Multiplicación
                  </button>
                  <button
                    onClick={() => handlePowersAnswer(false)}
                    className="action-button choice-button incorrect-choice px-8 py-4 border-2 border-gray-300 rounded-lg text-xl hover:border-red-500 hover:bg-red-50 transition-all"
                  >
                    Suma
                  </button>
                </>
              ) : (
                <button
                  onClick={nextFrame}
                  className="action-button primary-button px-12 py-3 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>
        )}

        {/* Frame 7: Respuesta Final */}
        {currentFrame === 7 && (
          <div className="frame frame-7 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <p className="step-indicator text-2xl text-blue-600 font-bold mb-4">
                ¡Sexto paso!
              </p>
              <h2 className="frame-title text-4xl font-bold text-gray-900 mb-6">
                ¿Respuesta final?
              </h2>
              <div className="calculation-hint text-2xl text-gray-600 mb-12 space-y-2">
                <p>2(3)(4) = 24</p>
                <p>Ahora resuelve: 9 - 24 + 16</p>
              </div>

              <div className="expression text-6xl font-bold tracking-wide mb-12 whitespace-nowrap">
                9 - 24 + 16
              </div>
            </div>

            <div className="frame-footer pb-16 flex justify-center gap-4">
              <button
                onClick={() => {
                  setTimeout(() => setCurrentFrame(8), 600);
                }}
                className="action-button choice-button correct-choice px-12 py-4 border-2 border-gray-300 rounded-lg text-2xl hover:border-green-500 hover:bg-green-50 transition-all"
              >
                1
              </button>
              <button className="action-button choice-button incorrect-choice px-12 py-4 border-2 border-gray-300 rounded-lg text-2xl hover:border-red-500 hover:bg-red-50 transition-all">
                -1
              </button>
              <button className="action-button choice-button incorrect-choice px-12 py-4 border-2 border-gray-300 rounded-lg text-2xl hover:border-red-500 hover:bg-red-50 transition-all">
                9
              </button>
            </div>
          </div>
        )}

        {/* Frame 8: Éxito */}
        {currentFrame === 8 && (
          <div className="frame frame-8 w-full h-full flex flex-col">
            <NavigationHeader showBack={true} />

            <div className="frame-content flex-1 p-16 flex flex-col justify-center items-center text-center">
              <div className="celebration-emoji text-6xl mb-6">🎉</div>
              <h1 className="success-title text-5xl font-bold text-gray-900 mb-6">
                ¡Perfecto!
              </h1>
              <p className="success-message text-2xl text-gray-600 mb-12">
                ¡Has evaluado la expresión exitosamente!
              </p>

              <div className="final-answer-container mb-12">
                <div className="answer-label text-3xl text-gray-600 mb-4">
                  Respuesta Final
                </div>
                <div className="answer-value text-9xl font-bold text-green-600">
                  1
                </div>
              </div>

              <div className="solution-steps text-2xl text-gray-500 space-y-2">
                <div className="step">9 - 24 + 16</div>
                <div className="step">= -15 + 16</div>
                <div className="final-step text-3xl font-bold text-green-600">
                  = 1
                </div>
              </div>
            </div>

            <div className="frame-footer pb-16 flex justify-center">
              <button
                onClick={resetApp}
                className="action-button restart-button px-12 py-3 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition-colors"
              >
                Empezar de nuevo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}