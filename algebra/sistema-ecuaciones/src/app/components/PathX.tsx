import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PathXProps {
  onReset: () => void;
  onBack: () => void;
}

export function PathX({ onReset, onBack }: PathXProps) {
  const [step, setStep] = useState(0);
  const [replacedX1, setReplacedX1] = useState(false);
  const [replacedX2, setReplacedX2] = useState(false);
  const [selectedEquation, setSelectedEquation] = useState<number | null>(null);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [verifyEq1X, setVerifyEq1X] = useState(false);
  const [verifyEq1Y, setVerifyEq1Y] = useState(false);
  const [verifyEq2X, setVerifyEq2X] = useState(false);
  const [verifyEq2Y, setVerifyEq2Y] = useState(false);

  const totalSteps = 6;

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
      if (step === 4) {
        // Reset equation selection when going back from step 5
        setSelectedEquation(null);
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
            <span className="text-sm text-blue-600">Método: Igualación con X</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 0: Despejar X de ecuación 1 */}
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

            <h2 className="text-center mb-6 text-blue-600">
              Paso 1: Despejar X de la ecuación 1
            </h2>

            <div className="mb-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-blue-100 rounded-xl p-4"
              >
                <div className="text-xs text-gray-600 mb-2">Ecuación 1</div>
                <div className="text-center text-2xl">
                  <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center text-gray-700"
              >
                Queremos dejar <span className="text-blue-600 font-bold">X</span> sola.
              </motion.p>

              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-gray-700"
              >
                Movemos <span className="text-orange-500">+y</span> al otro lado
              </motion.div>

              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center text-2xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                <span className="text-blue-600">x</span> = 4 - <span className="text-orange-500">y</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center text-sm text-green-700 font-bold"
              >
                ✓ Ecuación de X₁
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 1: Despejar X de ecuación 2 */}
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

            <h2 className="text-center mb-6 text-blue-600">
              Paso 2: Despejar X de la ecuación 2
            </h2>

            <div className="mb-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-blue-100 rounded-xl p-4"
              >
                <div className="text-xs text-gray-600 mb-2">Ecuación 2</div>
                <div className="text-center text-2xl">
                  <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 0.3 }}
                className="text-center text-gray-700"
              >
                Queremos dejar <span className="text-blue-600 font-bold">X</span> sola.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 0.6 }}
                className="text-center text-gray-700"
              >
                Movemos <span className="text-orange-500">-2y</span> al otro lado
              </motion.div>

              <motion.div
                initial={{ scale: isGoingBack ? 1 : 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 0.9 }}
                className="text-center text-2xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                <span className="text-blue-600">x</span> = 1 + 2<span className="text-orange-500">y</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 1.2 }}
                className="text-center text-sm text-green-700 font-bold"
              >
                ✓ Ecuación de X₂
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 1.5 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Igualar expresiones */}
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

            <h2 className="text-center mb-6 text-purple-600">
              Paso 3: Igualar expresiones
            </h2>

            <p className="text-center text-gray-700 mb-4">
              Como ambas X deben ser iguales, podemos igualar las expresiones.
            </p>

            <p className="text-center text-gray-700 mb-6">
              Haz clic en cada expresión para reemplazarla:
            </p>

            <div className="mb-6 space-y-4">
              <div className="text-center text-2xl p-4 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setReplacedX1(true)}
                  disabled={replacedX1}
                  className={`${
                    replacedX1 ? 'cursor-default' : 'cursor-pointer hover:bg-blue-200'
                  } px-4 py-2 rounded-lg transition-all`}
                >
                  {replacedX1 ? (
                    <span>4 - <span className="text-orange-500">y</span></span>
                  ) : (
                    <span className="text-blue-600">X₁</span>
                  )}
                </button>
                <span className="mx-3">=</span>
                <button
                  onClick={() => setReplacedX2(true)}
                  disabled={replacedX2}
                  className={`${
                    replacedX2 ? 'cursor-default' : 'cursor-pointer hover:bg-blue-200'
                  } px-4 py-2 rounded-lg transition-all`}
                >
                  {replacedX2 ? (
                    <span>1 + 2<span className="text-orange-500">y</span></span>
                  ) : (
                    <span className="text-blue-600">X₂</span>
                  )}
                </button>
              </div>

              {replacedX1 && replacedX2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center text-green-700">
                    ¡Excelente! Ahora resolvamos esta ecuación.
                  </div>
                  <button
                    onClick={nextStep}
                    className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Continuar <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 3: Resolver la ecuación */}
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

            <h2 className="text-center mb-6 text-purple-600">
              Paso 4: Resolver la ecuación
            </h2>

            <div className="mb-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                4 - <span className="text-orange-500">y</span> = 1 + 2<span className="text-orange-500">y</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-700"
              >
                Agrupamos las <span className="text-orange-500">y</span> en un lado y los números en el otro
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                4 - 1 = 2<span className="text-orange-500">y</span> + <span className="text-orange-500">y</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                3 = 3<span className="text-orange-500">y</span>
              </motion.div>

              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                <span className="text-orange-500">y</span> = 1
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-center text-green-700 font-bold flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                ¡Ya encontramos Y!
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Encontrar X */}
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

            <h2 className="text-center mb-6 text-blue-600">
              Paso 5: Encontrar X
            </h2>

            <p className="text-center text-gray-700 mb-4">
              Ahora reemplaza <span className="text-orange-500 font-bold">y = 1</span> en cualquiera de las ecuaciones
            </p>

            {selectedEquation === null ? (
              <div className="mb-6 bg-blue-50 rounded-2xl p-4 space-y-3">
                <div className="text-sm text-gray-600 mb-2">Sistema original:</div>
                <button
                  onClick={() => setSelectedEquation(1)}
                  className="w-full text-xl p-4 bg-white rounded-xl hover:bg-blue-100 transition-all active:scale-95 border-2 border-transparent hover:border-blue-500"
                >
                  <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                </button>
                <button
                  onClick={() => setSelectedEquation(2)}
                  className="w-full text-xl p-4 bg-white rounded-xl hover:bg-blue-100 transition-all active:scale-95 border-2 border-transparent hover:border-blue-500"
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
                  {selectedEquation === 1 ? (
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

                {selectedEquation === 1 ? (
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
                  transition={{ delay: selectedEquation === 1 ? 2 : 2.5 }}
                  className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
                >
                  <span className="text-blue-600">x</span> = 3
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: selectedEquation === 1 ? 2.5 : 3 }}
                  className="text-center text-green-700 font-bold flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  ¡Ya encontramos ambas variables!
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: selectedEquation === 1 ? 3 : 3.5 }}
                  onClick={nextStep}
                  className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Continuar <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 5: Verificación */}
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

            <h2 className="text-center mb-6 text-purple-600">
              Paso 6: Verificación
            </h2>

            <p className="text-center text-gray-700 mb-6">
              Comprobemos que nuestra respuesta funciona en ambas ecuaciones
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

        {/* Step 6: Final celebration */}
        {step === 6 && (
          <motion.div
            key="step6"
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

            <h1 className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ¡Sistema resuelto!
            </h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 space-y-4"
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
              ¡Excelente trabajo usando el método de igualación!
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-y-3"
            >
              <button
                onClick={onReset}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all active:scale-95 flex items-center justify-center gap-2"
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
