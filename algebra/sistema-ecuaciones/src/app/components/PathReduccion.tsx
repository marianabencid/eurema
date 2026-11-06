import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, ArrowLeft, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PathReduccionProps {
  onReset: () => void;
  onBack: () => void;
}

export function PathReduccion({ onReset, onBack }: PathReduccionProps) {
  const [step, setStep] = useState(0);
  const [selectedEquationToMultiply, setSelectedEquationToMultiply] = useState<1 | 2 | null>(null);
  const [selectedEquationForX, setSelectedEquationForX] = useState<number | null>(null);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [verifyEq1X, setVerifyEq1X] = useState(false);
  const [verifyEq1Y, setVerifyEq1Y] = useState(false);
  const [verifyEq2X, setVerifyEq2X] = useState(false);
  const [verifyEq2Y, setVerifyEq2Y] = useState(false);

  const totalSteps = 7;

  const handleCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const nextStep = () => {
    if (step === totalSteps) {
      handleCelebration();
    }
    setIsGoingBack(false);
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 0) {
      onBack();
    } else {
      if (step === 1) {
        setSelectedEquationToMultiply(null);
      }
      if (step === 5) {
        setSelectedEquationForX(null);
      }
      setIsGoingBack(true);
      setStep(step - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full bg-white rounded-3xl shadow-2xl p-6"
    >
      {/* Progress indicator */}
      {step < totalSteps && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Paso {step + 1} de {totalSteps}</span>
            <span className="text-sm text-green-600">Método: Reducción</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 0: Elegir variable a eliminar */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-green-600">
              Paso 1: Escoger la variable más fácil de eliminar
            </h2>

            <div className="mb-6 bg-green-50 rounded-2xl p-4 space-y-2">
              <div className="text-sm text-gray-600">Sistema original:</div>
              <div className="text-center text-xl">
                <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
              </div>
              <div className="text-center text-xl">
                <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
              </div>
            </div>

            <p className="text-center text-gray-700 mb-6">
              Observa los coeficientes y piensa cuál variable es más fácil cancelar.
            </p>

            <div className="mb-6 space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-center text-sm text-gray-700 mb-2">Coeficientes de X:</p>
                <p className="text-center text-lg">
                  <span className="text-blue-600 font-bold">1</span> y <span className="text-blue-600 font-bold">1</span>
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-xl">
                <p className="text-center text-sm text-gray-700 mb-2">Coeficientes de Y:</p>
                <p className="text-center text-lg">
                  <span className="text-orange-500 font-bold">1</span> y <span className="text-orange-500 font-bold">-2</span>
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 p-4 bg-green-100 rounded-xl border-2 border-green-500"
            >
              <p className="text-center text-gray-800">
                La <span className="text-blue-600 font-bold">X</span> es más fácil de eliminar porque ambas ecuaciones tienen el mismo coeficiente.
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                Si multiplicamos una ecuación por -1, podremos cancelar la X.
              </p>
            </motion.div>

            <button
              onClick={nextStep}
              className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Continuar <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Step 1: Elegir ecuación a multiplicar */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-green-600">
              Paso 2: Multiplicar una ecuación por -1
            </h2>

            <div className="mb-6 bg-green-50 rounded-2xl p-4 space-y-2">
              <div className="text-sm text-gray-600">Sistema original:</div>
              <div className="text-center text-xl">
                <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
              </div>
              <div className="text-center text-xl">
                <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
              </div>
            </div>

            <p className="text-center text-gray-700 mb-6">
              Debemos cambiar los signos de una ecuación para cancelar la X.
            </p>

            {selectedEquationToMultiply === null ? (
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedEquationToMultiply(1)}
                  className="w-full text-xl p-4 bg-green-100 rounded-xl hover:bg-green-200 transition-all active:scale-95 border-2 border-transparent hover:border-green-500"
                >
                  <div className="text-xs text-gray-600 mb-1">Ecuación 1</div>
                  <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                </button>
                <button
                  onClick={() => setSelectedEquationToMultiply(2)}
                  className="w-full text-xl p-4 bg-green-100 rounded-xl hover:bg-green-200 transition-all active:scale-95 border-2 border-transparent hover:border-green-500"
                >
                  <div className="text-xs text-gray-600 mb-1">Ecuación 2</div>
                  <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="text-xl p-4 bg-green-100 rounded-xl border-2 border-green-500">
                  <div className="text-xs text-gray-600 mb-1">Ecuación {selectedEquationToMultiply}</div>
                  {selectedEquationToMultiply === 1 ? (
                    <div className="text-center">
                      <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                    </div>
                  ) : (
                    <div className="text-center">
                      <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
                    </div>
                  )}
                </div>
                {selectedEquationToMultiply === 2 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-green-700"
                  >
                    ¡Excelente elección!
                  </motion.p>
                )}
                <button
                  onClick={nextStep}
                  className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Continuar <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 2: Multiplicar por -1 (Visual) */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-green-600">
              Paso 3: Cambiar signos
            </h2>

            <p className="text-center text-gray-700 mb-6">
              Multiplicamos la ecuación {selectedEquationToMultiply} por -1
            </p>

            <div className="mb-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                (-1)(
                {selectedEquationToMultiply === 1 ? (
                  <><span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4</>
                ) : (
                  <><span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1</>
                )}
                )
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-700"
              >
                Cada término cambia de signo:
              </motion.div>

              {selectedEquationToMultiply === 1 ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center p-2 bg-red-50 rounded"
                  >
                    <span className="text-blue-600">x</span> → <span className="text-blue-600">-x</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-center p-2 bg-red-50 rounded"
                  >
                    +<span className="text-orange-500">y</span> → <span className="text-orange-500">-y</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-center p-2 bg-red-50 rounded"
                  >
                    4 → -4
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center p-2 bg-red-50 rounded"
                  >
                    <span className="text-blue-600">x</span> → <span className="text-blue-600">-x</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-center p-2 bg-red-50 rounded"
                  >
                    -2<span className="text-orange-500">y</span> → +2<span className="text-orange-500">y</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-center p-2 bg-red-50 rounded"
                  >
                    1 → -1
                  </motion.div>
                </>
              )}

              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center text-2xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                {selectedEquationToMultiply === 1 ? (
                  <>-<span className="text-blue-600">x</span> - <span className="text-orange-500">y</span> = -4</>
                ) : (
                  <>-<span className="text-blue-600">x</span> + 2<span className="text-orange-500">y</span> = -1</>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 }}
                className="text-center text-sm text-green-700 font-bold"
              >
                ✓ Ecuación transformada
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="p-4 bg-gray-50 rounded-xl space-y-2"
              >
                <p className="text-center text-sm text-gray-600">Ahora el sistema queda:</p>
                {selectedEquationToMultiply === 1 ? (
                  <>
                    <div className="text-center text-lg">
                      -<span className="text-blue-600">x</span> - <span className="text-orange-500">y</span> = -4
                    </div>
                    <div className="text-center text-lg">
                      <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center text-lg">
                      <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                    </div>
                    <div className="text-center text-lg">
                      -<span className="text-blue-600">x</span> + 2<span className="text-orange-500">y</span> = -1
                    </div>
                  </>
                )}
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Reducir términos <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Reducir términos (VERY VISUAL) */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-green-600">
              Paso 4: Reducir términos
            </h2>

            <div className="mb-6 space-y-2">
              <div className="text-center text-xl p-3 bg-gray-50 rounded-t-xl">
                {selectedEquationToMultiply === 1 ? (
                  <>-<span className="text-blue-600">x</span> - <span className="text-orange-500">y</span> = -4</>
                ) : (
                  <><span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4</>
                )}
              </div>
              <div className="text-center text-xl p-3 bg-gray-50 border-b-2 border-gray-300">
                {selectedEquationToMultiply === 1 ? (
                  <><span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1</>
                ) : (
                  <>-<span className="text-blue-600">x</span> + 2<span className="text-orange-500">y</span> = -1</>
                )}
              </div>

              {/* X terms cancellation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-blue-50 rounded-xl"
              >
                <p className="text-center text-sm text-gray-600 mb-2">Términos de X:</p>
                <div className="text-center text-xl">
                  {selectedEquationToMultiply === 1 ? (
                    <>
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.3, textDecoration: 'line-through' }}
                        transition={{ delay: 1 }}
                        className="text-blue-600"
                      >
                        -x
                      </motion.span>
                      {' + '}
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.3, textDecoration: 'line-through' }}
                        transition={{ delay: 1 }}
                        className="text-blue-600"
                      >
                        x
                      </motion.span>
                    </>
                  ) : (
                    <>
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.3, textDecoration: 'line-through' }}
                        transition={{ delay: 1 }}
                        className="text-blue-600"
                      >
                        x
                      </motion.span>
                      {' + '}
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.3, textDecoration: 'line-through' }}
                        transition={{ delay: 1 }}
                        className="text-blue-600"
                      >
                        -x
                      </motion.span>
                    </>
                  )}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 }}
                    className="ml-3 text-gray-700"
                  >
                    = 0
                  </motion.span>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="text-center text-sm text-green-700 mt-2"
                >
                  ✓ La X se cancela
                </motion.p>
              </motion.div>

              {/* Y terms */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="p-4 bg-orange-50 rounded-xl"
              >
                <p className="text-center text-sm text-gray-600 mb-2">Términos de Y:</p>
                <div className="text-center text-xl">
                  {selectedEquationToMultiply === 1 ? (
                    <>-<span className="text-orange-500">y</span> + (-2<span className="text-orange-500">y</span>)</>
                  ) : (
                    <><span className="text-orange-500">y</span> + 2<span className="text-orange-500">y</span></>
                  )}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 }}
                    className="ml-3 text-gray-700"
                  >
                    = {selectedEquationToMultiply === 1 ? '-3' : '3'}
                    <span className="text-orange-500">y</span>
                  </motion.span>
                </div>
              </motion.div>

              {/* Constant terms */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="p-4 bg-gray-100 rounded-xl"
              >
                <p className="text-center text-sm text-gray-600 mb-2">Términos constantes:</p>
                <div className="text-center text-xl">
                  {selectedEquationToMultiply === 1 ? '-4 + 1' : '4 + (-1)'}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5 }}
                    className="ml-3 text-gray-700"
                  >
                    = {selectedEquationToMultiply === 1 ? '-3' : '3'}
                  </motion.span>
                </div>
              </motion.div>

              {/* Final result */}
              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 4 }}
                className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500 mt-4"
              >
                {selectedEquationToMultiply === 1 ? (
                  <>-3<span className="text-orange-500">y</span> = -3</>
                ) : (
                  <>3<span className="text-orange-500">y</span> = 3</>
                )}
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Resolver ecuación */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-orange-600">
              Paso 5: Resolver para Y
            </h2>

            <div className="mb-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-2xl p-4 bg-gray-100 rounded-xl"
              >
                {selectedEquationToMultiply === 1 ? (
                  <>-3<span className="text-orange-500">y</span> = -3</>
                ) : (
                  <>3<span className="text-orange-500">y</span> = 3</>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-700"
              >
                Dividimos ambos lados entre {selectedEquationToMultiply === 1 ? '-3' : '3'}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                <span className="text-orange-500">y</span> = {selectedEquationToMultiply === 1 ? '-3 ÷ (-3)' : '3 ÷ 3'}
              </motion.div>

              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                <span className="text-orange-500">y</span> = 1
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center text-green-700 font-bold flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                ¡Ya encontramos el valor de Y!
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 5: Encontrar X */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-blue-600">
              Paso 6: Encontrar X
            </h2>

            <div className="mb-6 bg-blue-50 rounded-2xl p-4 space-y-2">
              <div className="text-sm text-gray-600">Sistema original:</div>
              <div className="text-center text-xl">
                <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
              </div>
              <div className="text-center text-xl">
                <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
              </div>
            </div>

            <p className="text-center text-gray-700 mb-4">
              Ahora reemplaza <span className="text-orange-500 font-bold">y = 1</span> en cualquiera de las ecuaciones
            </p>

            {selectedEquationForX === null ? (
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedEquationForX(1)}
                  className="w-full text-xl p-4 bg-blue-100 rounded-xl hover:bg-blue-200 transition-all active:scale-95"
                >
                  <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                </button>
                <button
                  onClick={() => setSelectedEquationForX(2)}
                  className="w-full text-xl p-4 bg-blue-100 rounded-xl hover:bg-blue-200 transition-all active:scale-95"
                >
                  <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-xl p-4 bg-blue-100 rounded-xl"
                >
                  {selectedEquationForX === 1 ? (
                    <><span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4</>
                  ) : (
                    <><span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1</>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-gray-700"
                >
                  Sustituimos <span className="text-orange-500">y = 1</span>
                </motion.div>

                {selectedEquationForX === 1 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      <span className="text-blue-600">x</span> + 1 = 4
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      <span className="text-blue-600">x</span> = 4 - 1
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      <span className="text-blue-600">x</span> - 2(1) = 1
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      <span className="text-blue-600">x</span> - 2 = 1
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      <span className="text-blue-600">x</span> = 1 + 2
                    </motion.div>
                  </>
                )}

                <motion.div
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: selectedEquationForX === 1 ? 2 : 2.5 }}
                  className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
                >
                  <span className="text-blue-600">x</span> = 3
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: selectedEquationForX === 1 ? 2.5 : 3 }}
                  className="text-center text-green-700 font-bold flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  ¡Ya encontramos ambas variables!
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: selectedEquationForX === 1 ? 3 : 3.5 }}
                  onClick={nextStep}
                  className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Continuar <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 6: Verificación */}
        {step === 6 && (
          <motion.div
            key="step6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button
              onClick={prevStep}
              className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <h2 className="text-center mb-6 text-green-600">
              Paso 7: Verificación
            </h2>

            <p className="text-center text-gray-700 mb-6">
              Comprobemos que nuestra solución funciona
            </p>

            <div className="mb-6 space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <div className="text-gray-700 font-bold">Ecuación 1:</div>
                <div className="text-xl p-4 bg-gray-100 rounded-xl">
                  <button
                    onClick={() => setVerifyEq1X(true)}
                    className={`${verifyEq1X ? '' : 'hover:bg-blue-200 px-2 rounded'} text-blue-600 transition-all`}
                  >
                    {verifyEq1X ? '3' : 'x'}
                  </button>
                  {' + '}
                  <button
                    onClick={() => setVerifyEq1Y(true)}
                    className={`${verifyEq1Y ? '' : 'hover:bg-orange-200 px-2 rounded'} text-orange-500 transition-all`}
                  >
                    {verifyEq1Y ? '1' : 'y'}
                  </button>
                  {' = 4'}
                </div>
                {verifyEq1X && verifyEq1Y && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      3 + 1 = 4
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-xl p-4 bg-green-100 rounded-xl flex items-center justify-center gap-2"
                    >
                      4 = 4 <Check className="w-6 h-6 text-green-600" />
                    </motion.div>
                  </>
                )}
              </motion.div>

              {verifyEq1X && verifyEq1Y && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <div className="text-gray-700 font-bold">Ecuación 2:</div>
                  <div className="text-xl p-4 bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setVerifyEq2X(true)}
                      className={`${verifyEq2X ? '' : 'hover:bg-blue-200 px-2 rounded'} text-blue-600 transition-all`}
                    >
                      {verifyEq2X ? '3' : 'x'}
                    </button>
                    {' - 2('}
                    <button
                      onClick={() => setVerifyEq2Y(true)}
                      className={`${verifyEq2Y ? '' : 'hover:bg-orange-200 px-2 rounded'} text-orange-500 transition-all`}
                    >
                      {verifyEq2Y ? '1' : 'y'}
                    </button>
                    {') = 1'}
                  </div>
                  {verifyEq2X && verifyEq2Y && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl p-4 bg-gray-100 rounded-xl"
                      >
                        3 - 2(1) = 1
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl p-4 bg-gray-100 rounded-xl"
                      >
                        3 - 2 = 1
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-xl p-4 bg-green-100 rounded-xl flex items-center justify-center gap-2"
                      >
                        1 = 1 <Check className="w-6 h-6 text-green-600" />
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={nextStep}
              className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Continuar <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Step 7: Final celebration */}
        {step === 7 && (
          <motion.div
            key="step7"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="text-6xl"
            >
              🎉
            </motion.div>

            <h1 className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              ¡Sistema resuelto!
            </h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 space-y-4"
            >
              <div className="text-3xl">
                <span className="text-blue-600">x</span> = 3
              </div>
              <div className="text-3xl">
                <span className="text-orange-500">y</span> = 1
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-700"
            >
              ¡Excelente trabajo usando el método de reducción!
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-y-3"
            >
              <button
                onClick={onReset}
                className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Volver al menú principal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
