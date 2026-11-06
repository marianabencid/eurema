import { useState } from 'react';
import { motion } from 'motion/react';
import type { FactorizationCase } from '../../App';

type TrinomioCuadradoPerfectoModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

export default function TrinomioCuadradoPerfectoModule({
  currentFrame,
  setCurrentFrame,
}: TrinomioCuadradoPerfectoModuleProps) {
  const [verificationStep, setVerificationStep] = useState(0);
  const [clickedFirst, setClickedFirst] = useState(false);
  const [clickedLast, setClickedLast] = useState(false);
  const [userVerification, setUserVerification] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Función auxiliar para convertir números después de letras a exponentes
  const convertToExponents = (str: string) => {
    return str
      .replace(/([a-zA-Z])2/g, '$1²')
      .replace(/([a-zA-Z])3/g, '$1³')
      .replace(/([a-zA-Z])4/g, '$1⁴')
      .replace(/([a-zA-Z])5/g, '$1⁵')
      .replace(/([a-zA-Z])6/g, '$1⁶')
      .replace(/([a-zA-Z])7/g, '$1⁷')
      .replace(/([a-zA-Z])8/g, '$1⁸')
      .replace(/([a-zA-Z])9/g, '$1⁹');
  };

  const IntroFrame = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-xl p-6"
    >
      <h3 className="text-xl font-bold text-[#33291C] mb-4">
        Trinomio Cuadrado Perfecto
      </h3>

      <div className="space-y-4">
        <div className="bg-yellow-50 rounded-2xl p-4">
          <h4 className="font-bold text-base mb-4 text-center">¿Cómo reconocerlo?</h4>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <p className="text-sm pt-1">Es un <span className="font-bold text-blue-600">trinomio</span></p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <p className="text-sm pt-1">Sus extremos son <span className="font-bold text-purple-600">términos al cuadrado</span></p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <p className="text-sm pt-1">El término del medio es igual a la <span className="font-bold text-green-600">multiplicación de las raíces × 2</span></p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 mt-4">
              <p className="font-bold text-center mb-3 text-base">Ejemplo: a² + 2ab + b²</p>
              <div className="flex justify-center gap-2 mb-3">
                <div className="bg-blue-100 px-3 py-2 rounded-lg text-center">
                  <p className="text-xs text-[#8C7F63]">Raíz de a²</p>
                  <p className="font-bold text-blue-600">a</p>
                </div>
                <div className="bg-purple-100 px-3 py-2 rounded-lg text-center">
                  <p className="text-xs text-[#8C7F63]">Raíz de b²</p>
                  <p className="font-bold text-purple-600">b</p>
                </div>
              </div>
              <div className="text-center text-xs text-[#33291C] mb-2">
                Verificar: 2 · a · b = 2ab ✓
              </div>
              <div className="bg-white border-2 border-green-500 rounded-lg p-3 text-center">
                <p className="text-xs text-[#8C7F63] mb-1">Respuesta:</p>
                <p className="font-bold text-lg">
                  (<span className="text-blue-600">a</span> <span className="text-green-600">+</span> <span className="text-purple-600">b</span>)²
                </p>
                <p className="text-xs text-[#8C7F63] mt-1">Las raíces en un paréntesis al cuadrado con el signo del medio del problema</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentFrame(1)}
          className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
        >
          Ejemplo guiado →
        </button>
      </div>
    </motion.div>
  );

  const GuidedExampleFrame = () => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && userVerification && !hasSubmitted) {
        setHasSubmitted(true);
      }
    };

    return (
      <motion.div
        key="guided"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold text-[#33291C] mb-4">
          Ejemplo Guiado
        </h3>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6">
          <div className="space-y-4">
            {/* Paso 1: Raíces */}
            {verificationStep >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-2 text-center">Paso 1: Identificar las raíces de los extremos</p>
                <p className="text-xs text-center text-[#8C7F63]">Haz clic en los extremos del problema:</p>
              </motion.div>
            )}

            {/* Problema interactivo */}
            <div className="text-center">
              <div className="flex justify-center gap-2 items-center text-2xl font-bold">
                <button
                  onClick={() => setClickedFirst(true)}
                  disabled={clickedFirst}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    clickedFirst
                      ? 'bg-blue-200 cursor-default'
                      : 'bg-blue-100 hover:bg-blue-200 cursor-pointer border-2 border-blue-400'
                  } text-blue-700`}
                >
                  a²
                </button>
                <span>+</span>
                <span className="bg-white px-3 py-2 rounded-lg text-[#33291C]">4a</span>
                <span>+</span>
                <button
                  onClick={() => setClickedLast(true)}
                  disabled={clickedLast}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    clickedLast
                      ? 'bg-purple-200 cursor-default'
                      : 'bg-purple-100 hover:bg-purple-200 cursor-pointer border-2 border-purple-400'
                  } text-purple-700`}
                >
                  4
                </button>
              </div>

              {/* Mostrar raíces debajo */}
              <div className="flex justify-center items-start gap-2 mt-3 h-16">
                <div className="w-16">
                  {clickedFirst && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      <p className="text-lg font-bold text-blue-600">↓</p>
                      <p className="font-bold text-blue-600">a</p>
                    </motion.div>
                  )}
                </div>
                <div className="w-16"></div>
                <div className="w-16"></div>
                <div className="w-16">
                  {clickedLast && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      <p className="text-lg font-bold text-purple-600">↓</p>
                      <p className="font-bold text-purple-600">2</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Paso 2: Multiplicar y verificar */}
            {verificationStep >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 2: Verificar el término del medio</p>
                <div className="text-center space-y-3">
                  <p className="text-sm">
                    2 · <span className="text-blue-600 font-bold">a</span> · <span className="text-purple-600 font-bold">2</span> = ?
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <input
                      type="text"
                      value={userVerification}
                      onChange={(e) => {
                        setUserVerification(convertToExponents(e.target.value));
                        setHasSubmitted(false);
                      }}
                      onKeyDown={handleKeyDown}
                      className="w-20 px-3 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                      placeholder="?"
                    />
                    <p className="text-xs text-[#8C7F63]">Presiona Enter para verificar</p>
                  </div>
                  {hasSubmitted && userVerification && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      {userVerification === '4a' ? (
                        <div>
                          <p className="text-green-600 font-bold">4a = 4a ✓</p>
                          <p className="text-xs text-[#8C7F63]">¡Sí coincide! Es un TCP</p>
                        </div>
                      ) : (
                        <p className="text-red-600 font-bold text-sm">Intenta de nuevo</p>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Paso 3: Escribir respuesta */}
            {verificationStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 3: Escribir la factorización</p>
                <div className="text-center">
                  <p className="text-xs text-[#8C7F63] mb-2">Paréntesis con las raíces y el signo del medio, elevado al cuadrado:</p>
                  <div className="bg-green-500 text-white px-6 py-3 rounded-xl inline-block text-xl font-bold">
                    (<span className="text-blue-200">a</span> + <span className="text-purple-200">2</span>)²
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          {verificationStep === 0 && clickedFirst && clickedLast && (
            <button
              onClick={() => setVerificationStep(1)}
              className="flex-1 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Siguiente paso →
            </button>
          )}
          {verificationStep === 1 && hasSubmitted && userVerification === '4a' && (
            <button
              onClick={() => setVerificationStep(2)}
              className="flex-1 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Siguiente paso →
            </button>
          )}
          {verificationStep === 2 && (
            <button
              onClick={() => setCurrentFrame(2)}
              className="flex-1 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Ir a práctica →
            </button>
          )}
          <button
            onClick={() => setCurrentFrame(0)}
            className="bg-[#F0E2C4] hover:bg-[#F0E2C4] text-[#33291C] font-bold py-3 px-6 rounded-2xl transition-colors"
          >
            ← Volver
          </button>
        </div>
      </motion.div>
    );
  };

  const PracticeFrame = () => {
    const [practicePhase, setPracticePhase] = useState<'identify' | 'solve'>('identify');
    const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
    const [currentSolvingIndex, setCurrentSolvingIndex] = useState(0);
    const [solveSteps, setSolveSteps] = useState<Record<number, {
      root1: string;
      root2: string;
      verification: string;
      finalTerm1: string;
      finalSign: string;
      finalTerm2: string;
      finalExponent: string;
      step: number;
    }>>({});

    const exercises = [
      {
        expr: '100x² + 260xy + 169y²',
        isTCP: true,
        root1: '10x',
        root2: '13y',
        middle: '260xy',
        sign: '+',
        answer: '(10x + 13y)²'
      },
      {
        expr: '64a² − 80ab² + 25b⁴',
        isTCP: true,
        root1: '8a',
        root2: '5b²',
        middle: '80ab²',
        sign: '−',
        answer: '(8a − 5b²)²'
      },
      {
        expr: 'a² + 6a + 9',
        isTCP: true,
        root1: 'a',
        root2: '3',
        middle: '6a',
        sign: '+',
        answer: '(a + 3)²'
      },
      {
        expr: '144x² − 264xy + 121y²',
        isTCP: true,
        root1: '12x',
        root2: '11y',
        middle: '264xy',
        sign: '−',
        answer: '(12x − 11y)²'
      },
      { expr: 'x² + 5x + 7', isTCP: false },
      { expr: '9a² + 10a + 4', isTCP: false },
    ];

    const handleAnswer = (expr: string, isTCP: boolean, userAnswer: boolean) => {
      setAnswers({ ...answers, [expr]: isTCP === userAnswer });
    };

    const allIdentified = exercises.every(ex => answers[ex.expr] !== undefined && answers[ex.expr] !== null);
    const allCorrect = allIdentified && exercises.every(ex => answers[ex.expr] === true);

    const tcpExercises = exercises.filter(ex => ex.isTCP);
    const currentExercise = tcpExercises[currentSolvingIndex];
    const currentSolveState = solveSteps[currentSolvingIndex] || { root1: '', root2: '', verification: '', finalTerm1: '', finalSign: '', finalTerm2: '', finalExponent: '', step: 0 };

    const normalizeAnswer = (str: string) => str.replace(/\s/g, '').toLowerCase();

    // Convierte números después de letras en exponentes (ej: b2 -> b², a4 -> a⁴)
    const normalizeExponents = (str: string) => {
      return str
        .replace(/([a-zA-Z])2/g, '$1²')
        .replace(/([a-zA-Z])3/g, '$1³')
        .replace(/([a-zA-Z])4/g, '$1⁴')
        .replace(/([a-zA-Z])5/g, '$1⁵')
        .replace(/([a-zA-Z])6/g, '$1⁶')
        .replace(/([a-zA-Z])7/g, '$1⁷')
        .replace(/([a-zA-Z])8/g, '$1⁸')
        .replace(/([a-zA-Z])9/g, '$1⁹');
    };

    // Handler para convertir automáticamente los números a exponentes mientras se escribe
    const handleExponentInput = (value: string) => {
      return normalizeExponents(value);
    };

    const checkRoot = (userInput: string, correct: string) => {
      // Normaliza exponentes antes de comparar
      const normalizedUser = normalizeAnswer(normalizeExponents(userInput));
      const normalizedCorrect = normalizeAnswer(correct);
      return normalizedUser === normalizedCorrect;
    };

    const checkVerification = (userInput: string, correct: string) => {
      // Normaliza exponentes primero, luego compara
      const normalized = normalizeAnswer(normalizeExponents(userInput));
      const correctNorm = normalizeAnswer(correct);
      // Also accept with "2·" or "2*" prefix
      return normalized === correctNorm || normalized === `2·${correctNorm}` || normalized === `2*${correctNorm}` || normalized === `2${correctNorm}`;
    };

    const checkFinalAnswer = () => {
      const term1Match = checkRoot(currentSolveState.finalTerm1, currentExercise.root1);
      const term2Match = checkRoot(currentSolveState.finalTerm2, currentExercise.root2);

      // Normalizar signos - aceptar tanto - como − para resta, y + para suma
      const normalizeSign = (sign: string) => {
        const s = sign.trim().toLowerCase();
        if (s === '-' || s === '−' || s === 'menos') return 'minus';
        if (s === '+' || s === 'mas' || s === 'más') return 'plus';
        return s;
      };

      const signMatch = normalizeSign(currentSolveState.finalSign) === normalizeSign(currentExercise.sign);
      const exponentMatch = currentSolveState.finalExponent === '2';

      return term1Match && term2Match && signMatch && exponentMatch;
    };

    if (practicePhase === 'identify') {
      return (
        <motion.div
          key="practice-identify"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <h3 className="text-xl font-bold text-[#33291C] mb-4">
            Práctica: Identificar TCP
          </h3>

          <p className="text-sm text-[#8C7F63] mb-4 text-center">
            Identifica cuáles son Trinomios Cuadrados Perfectos
          </p>

          <div className="space-y-3 mb-6">
            {exercises.map((exercise) => (
              <div
                key={exercise.expr}
                className={`p-3 rounded-2xl border-2 ${
                  answers[exercise.expr] === null || answers[exercise.expr] === undefined
                    ? 'border-[#33291C]/15 bg-[#FDF6E8]'
                    : answers[exercise.expr]
                    ? 'border-green-300 bg-green-50'
                    : 'border-red-300 bg-red-50'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-mono font-bold flex-1">{exercise.expr}</p>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleAnswer(exercise.expr, exercise.isTCP, true)}
                      className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center text-xl"
                    >
                      ✓
                    </button>
                    <button
                      onClick={() => handleAnswer(exercise.expr, exercise.isTCP, false)}
                      className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center text-xl"
                    >
                      ✗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {allCorrect && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <button
                onClick={() => setPracticePhase('solve')}
                className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
              >
                Resolver los TCP →
              </button>
            </motion.div>
          )}

          <button
            onClick={() => setCurrentFrame(0)}
            className="w-full bg-[#F0E2C4] hover:bg-[#F0E2C4] text-[#33291C] font-bold py-3 px-6 rounded-2xl transition-colors"
          >
            ← Volver al inicio
          </button>
        </motion.div>
      );
    }

    // Solving phase
    return (
      <motion.div
        key="practice-solve"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold text-[#33291C] mb-4">
          Resolver TCP ({currentSolvingIndex + 1}/{tcpExercises.length})
        </h3>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6">
          <p className="text-center text-xl font-mono font-bold mb-6">{currentExercise.expr}</p>

          <div className="space-y-4">
            {/* Paso 1: Raíces */}
            {currentSolveState.step >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 1: Raíces de los extremos</p>
                <div className="flex gap-3 items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-[#8C7F63]">Primera raíz:</p>
                    <input
                      type="text"
                      value={currentSolveState.root1}
                      onChange={(e) => setSolveSteps({
                        ...solveSteps,
                        [currentSolvingIndex]: { ...currentSolveState, root1: handleExponentInput(e.target.value) }
                      })}
                      className="w-20 px-3 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                      placeholder="?"
                    />
                    {currentSolveState.root1 && checkRoot(currentSolveState.root1, currentExercise.root1) && (
                      <p className="text-green-600 text-xs">✓</p>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-[#8C7F63]">Segunda raíz:</p>
                    <input
                      type="text"
                      value={currentSolveState.root2}
                      onChange={(e) => setSolveSteps({
                        ...solveSteps,
                        [currentSolvingIndex]: { ...currentSolveState, root2: handleExponentInput(e.target.value) }
                      })}
                      className="w-20 px-3 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                      placeholder="?"
                    />
                    {currentSolveState.root2 && checkRoot(currentSolveState.root2, currentExercise.root2) && (
                      <p className="text-green-600 text-xs">✓</p>
                    )}
                  </div>
                </div>
                {checkRoot(currentSolveState.root1, currentExercise.root1) &&
                 checkRoot(currentSolveState.root2, currentExercise.root2) && (
                  <button
                    onClick={() => setSolveSteps({
                      ...solveSteps,
                      [currentSolvingIndex]: { ...currentSolveState, step: 1 }
                    })}
                    className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Siguiente paso →
                  </button>
                )}
              </motion.div>
            )}

            {/* Paso 2: Verificación */}
            {currentSolveState.step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 2: Verificar término del medio</p>
                <p className="text-sm text-center mb-3">
                  2 · {currentExercise.root1} · {currentExercise.root2} = ?
                </p>
                <div className="flex flex-col items-center gap-2">
                  <input
                    type="text"
                    value={currentSolveState.verification}
                    onChange={(e) => setSolveSteps({
                      ...solveSteps,
                      [currentSolvingIndex]: { ...currentSolveState, verification: handleExponentInput(e.target.value) }
                    })}
                    className="w-32 px-3 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                    placeholder="?"
                  />
                  {currentSolveState.verification && checkVerification(currentSolveState.verification, currentExercise.middle) && (
                    <div>
                      <p className="text-green-600 font-bold text-sm">✓ Correcto</p>
                      <button
                        onClick={() => setSolveSteps({
                          ...solveSteps,
                          [currentSolvingIndex]: { ...currentSolveState, step: 2 }
                        })}
                        className="mt-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Siguiente paso →
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Paso 3: Respuesta final */}
            {currentSolveState.step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-4 text-center">Paso 3: Escribir la factorización</p>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <span className="text-[#33291C]">(</span>
                    <input
                      type="text"
                      value={currentSolveState.finalTerm1}
                      onChange={(e) => setSolveSteps({
                        ...solveSteps,
                        [currentSolvingIndex]: { ...currentSolveState, finalTerm1: handleExponentInput(e.target.value) }
                      })}
                      className="w-16 px-2 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                      placeholder="?"
                    />
                    <input
                      type="text"
                      value={currentSolveState.finalSign}
                      onChange={(e) => setSolveSteps({
                        ...solveSteps,
                        [currentSolvingIndex]: { ...currentSolveState, finalSign: e.target.value }
                      })}
                      className="w-12 px-2 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                      placeholder="+"
                    />
                    <input
                      type="text"
                      value={currentSolveState.finalTerm2}
                      onChange={(e) => setSolveSteps({
                        ...solveSteps,
                        [currentSolvingIndex]: { ...currentSolveState, finalTerm2: handleExponentInput(e.target.value) }
                      })}
                      className="w-16 px-2 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                      placeholder="?"
                    />
                    <span className="text-[#33291C]">)</span>
                    <sup>
                      <input
                        type="text"
                        value={currentSolveState.finalExponent}
                        onChange={(e) => setSolveSteps({
                          ...solveSteps,
                          [currentSolvingIndex]: { ...currentSolveState, finalExponent: e.target.value }
                        })}
                        className="w-10 px-2 py-1 border-2 border-[#33291C]/15 rounded-lg text-center font-bold text-base"
                        placeholder="2"
                      />
                    </sup>
                  </div>

                  {checkFinalAnswer() && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <p className="text-green-600 font-bold text-lg mb-3">¡Correcto! 🎉</p>
                      {currentSolvingIndex < tcpExercises.length - 1 ? (
                        <button
                          onClick={() => setCurrentSolvingIndex(currentSolvingIndex + 1)}
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
                        >
                          Siguiente ejercicio →
                        </button>
                      ) : (
                        <button
                          onClick={() => setCurrentFrame(0)}
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
                        >
                          ¡Completado! Volver al inicio
                        </button>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <button
          onClick={() => setPracticePhase('identify')}
          className="w-full bg-[#F0E2C4] hover:bg-[#F0E2C4] text-[#33291C] font-bold py-3 px-6 rounded-2xl transition-colors"
        >
          ← Volver a identificación
        </button>
      </motion.div>
    );
  };

  const frames = [IntroFrame, GuidedExampleFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
