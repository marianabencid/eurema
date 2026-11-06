#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
SITE="$ROOT/_site"
rm -rf "$SITE"
mkdir -p "$SITE/algebra" "$SITE/geometria"
cp "$ROOT/index.html" "$ROOT/favicon.svg" "$SITE/"
cp "$ROOT/algebra/index.html" "$SITE/algebra/index.html"
cp -R "$ROOT/geometria/." "$SITE/geometria/"

build_tool() {
  local rel="$1"
  local dir="$ROOT/$rel"
  echo "
==> Instalando y compilando $rel"
  cd "$dir"
  npm install --legacy-peer-deps --no-audit --no-fund
  npm run build
  mkdir -p "$SITE/$rel"
  cp -R "$dir/dist/." "$SITE/$rel/"
}

build_tool "algebra/valor-numerico"
build_tool "algebra/sistema-ecuaciones"
build_tool "algebra/factorizacion"
echo "
EUREMA compilado en $SITE"
