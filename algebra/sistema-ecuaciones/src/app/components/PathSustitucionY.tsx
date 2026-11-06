import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PathSustitucionYProps {
  onReset: () => void;
  onBack: () => void;
}

export function PathSustitucionY({ onReset, onBack }: PathSustitucionYProps) {
  const [step, setStep] = useState(0);
  const [selectedEquation, setSelectedEquation] = useState<1 | 2 | null>(null);
  const [replacedVariable, setReplacedVariable] = useState(false);
  const [selectedEquationForX, setSelectedEquationForX] = useState<number | null>(null);
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
      if (step === 1) {
        setSelectedEquation(null);
      }
      if (step === 2) {
        setReplacedVariable(false);
      }
      if (step === 4) {
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
            <span className="text-sm text-orange-600">Método: Sustitución con Y</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 0: Escoger ecuación para despejar */}
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

            <h2 className="text-center mb-6 text-orange-600">
              Paso 1: ¡Escoge una ecuación para despejar Y!
            </h2>

            <p className="text-center text-gray-700 mb-6">
              Puedes despejar la variable usando cualquiera de las dos ecuaciones.
            </p>

            <div className="mb-6 bg-orange-50 rounded-2xl p-4 space-y-3">
              <div className="text-sm text-gray-600 mb-2">Sistema original:</div>
              <button
                onClick={() => {
                  setSelectedEquation(1);
                  nextStep();
                }}
                className="w-full text-xl p-4 bg-white rounded-xl hover:bg-orange-100 transition-all active:scale-95 border-2 border-transparent hover:border-orange-500"
              >
                <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
              </button>
              <button
                onClick={() => {
                  setSelectedEquation(2);
                  nextStep();
                }}
                className="w-full text-xl p-4 bg-white rounded-xl hover:bg-orange-100 transition-all active:scale-95 border-2 border-transparent hover:border-orange-500"
              >
                <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 1: Despejar Y */}
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

            <h2 className="text-center mb-6 text-orange-600">
              Paso 2: Despejar Y de la ecuación {selectedEquation}
            </h2>

            <div className="mb-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-orange-100 rounded-xl p-4"
              >
                <div className="text-xs text-gray-600 mb-2">Ecuación {selectedEquation}</div>
                <div className="text-center text-2xl">
                  {selectedEquation === 1 ? (
                    <><span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4</>
                  ) : (
                    <><span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1</>
                  )}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 0.3 }}
                className="text-center text-gray-700"
              >
                Queremos dejar <span className="text-orange-500 font-bold">Y</span> sola.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : 0.6 }}
                className="text-center text-gray-700"
              >
                {selectedEquation === 1 ? (
                  <>Movemos <span className="text-blue-600">x</span> al otro lado</>
                ) : (
                  <>Movemos <span className="text-blue-600">x</span> al otro lado</>
                )}
              </motion.div>

              {selectedEquation === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: isGoingBack ? 0 : 0.9 }}
                  className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                >
                  -2<span className="text-orange-500">y</span> = 1 - <span className="text-blue-600">x</span>
                </motion.div>
              )}

              {selectedEquation === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: isGoingBack ? 0 : 1.2 }}
                  className="text-center text-gray-700"
                >
                  Dividimos ambos lados entre -2
                </motion.div>
              )}

              <motion.div
                initial={{ scale: isGoingBack ? 1 : 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : (selectedEquation === 1 ? 0.9 : 1.5) }}
                className="text-center text-2xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                {selectedEquation === 1 ? (
                  <><span className="text-orange-500">y</span> = 4 - <span className="text-blue-600">x</span></>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-orange-500">y</span> =
                    <div className="inline-flex flex-col items-center">
                      <div className="text-xl"><span className="text-blue-600">x</span> - 1</div>
                      <div className="w-full border-t-2 border-gray-800"></div>
                      <div className="text-xl">2</div>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : (selectedEquation === 1 ? 1.2 : 1.8) }}
                className="text-center text-sm text-green-700 font-bold"
              >
                ✓ Expresión encontrada para Y
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isGoingBack ? 0 : (selectedEquation === 1 ? 1.5 : 2.1) }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Sustituir en la otra ecuación */}
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
              Paso 3: Sustituir la expresión
            </h2>

            <div className="mb-4 bg-purple-50 rounded-2xl p-4 space-y-2">
              <div className="text-sm text-gray-600">Expresión encontrada:</div>
              <div className="text-center text-xl">
                {selectedEquation === 1 ? (
                  <><span className="text-orange-500">y</span> = 4 - <span className="text-blue-600">x</span></>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-orange-500">y</span> =
                    <div className="inline-flex flex-col items-center">
                      <div className="text-lg"><span className="text-blue-600">x</span> - 1</div>
                      <div className="w-full border-t-2 border-gray-800"></div>
                      <div className="text-lg">2</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-center text-gray-700 mb-6">
              Ahora reemplazaremos <span className="text-orange-500 font-bold">Y</span> en la ecuación {selectedEquation === 1 ? '2' : '1'}
            </p>

            <div className="mb-6 space-y-4">
              <p className="text-center text-gray-700">
                Haz clic en la variable para reemplazarla
              </p>

              <div className={`text-center text-2xl p-4 rounded-xl transition-all ${
                replacedVariable
                  ? 'bg-green-100 border-2 border-green-500'
                  : 'bg-gray-100'
              }`}>
                {selectedEquation === 1 ? (
                  <>
                    <span className="text-blue-600">x</span> - 2(
                    {!replacedVariable ? (
                      <button
                        onClick={() => setReplacedVariable(true)}
                        className="text-orange-500 hover:bg-orange-200 px-2 rounded transition-all cursor-pointer"
                      >
                        y
                      </button>
                    ) : (
                      <motion.span
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                      >
                        4 - <span className="text-blue-600">x</span>
                      </motion.span>
                    )}
                    ) = 1
                  </>
                ) : (
                  <>
                    <span className="text-blue-600">x</span> + (
                    {!replacedVariable ? (
                      <button
                        onClick={() => setReplacedVariable(true)}
                        className="text-orange-500 hover:bg-orange-200 px-2 rounded transition-all cursor-pointer"
                      >
                        y
                      </button>
                    ) : (
                      <motion.div
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        className="inline-flex flex-col items-center"
                      >
                        <div className="text-lg"><span className="text-blue-600">x</span> - 1</div>
                        <div className="w-full border-t-2 border-gray-800"></div>
                        <div className="text-lg">2</div>
                      </motion.div>
                    )}
                    ) = 4
                  </>
                )}
              </div>

              {replacedVariable && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-green-700"
                  >
                    ¡Excelente! Ahora resolvamos esta ecuación.
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={nextStep}
                    className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Continuar <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </>
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
                {selectedEquation === 1 ? (
                  <><span className="text-blue-600">x</span> - 2(4 - <span className="text-blue-600">x</span>) = 1</>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-blue-600">x</span> +
                    <div className="inline-flex flex-col items-center mx-1">
                      <div className="text-lg"><span className="text-blue-600">x</span> - 1</div>
                      <div className="w-full border-t-2 border-gray-800"></div>
                      <div className="text-lg">2</div>
                    </div>
                    = 4
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-700"
              >
                Multiplicamos todo por el denominador para simplificar
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                {selectedEquation === 1 ? (
                  <><span className="text-blue-600">x</span> - 8 + 2<span className="text-blue-600">x</span> = 1</>
                ) : (
                  <>2<span className="text-blue-600">x</span> + <span className="text-blue-600">x</span> - 1 = 8</>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center text-gray-700"
              >
                Agrupamos términos
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center text-xl p-4 bg-gray-100 rounded-xl"
              >
                {selectedEquation === 1 ? (
                  <>3<span className="text-blue-600">x</span> = 9</>
                ) : (
                  <>3<span className="text-blue-600">x</span> = 9</>
                )}
              </motion.div>

              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
              >
                <span className="text-blue-600">x</span> = 3
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="text-center text-green-700 font-bold flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                ¡Ya encontramos X!
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Encontrar Y */}
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
              Paso 5: ¡Encontrar Y!
            </h2>

            <p className="text-center text-gray-700 mb-4">
              Ahora reemplaza <span className="text-blue-600 font-bold">x = 3</span> en cualquiera de las ecuaciones.
            </p>

            {selectedEquationForX === null ? (
              <div className="mb-6 bg-orange-50 rounded-2xl p-4 space-y-3">
                <div className="text-sm text-gray-600 mb-2">Sistema original:</div>
                <button
                  onClick={() => setSelectedEquationForX(1)}
                  className="w-full text-xl p-4 bg-white rounded-xl hover:bg-orange-100 transition-all active:scale-95 border-2 border-transparent hover:border-orange-500"
                >
                  <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
                </button>
                <button
                  onClick={() => setSelectedEquationForX(2)}
                  className="w-full text-xl p-4 bg-white rounded-xl hover:bg-orange-100 transition-all active:scale-95 border-2 border-transparent hover:border-orange-500"
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
                  className="text-center text-xl p-4 bg-orange-100 rounded-xl"
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
                  Sustituimos <span className="text-blue-600">x = 3</span>
                </motion.div>

                {selectedEquationForX === 1 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      3 + <span className="text-orange-500">y</span> = 4
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      <span className="text-orange-500">y</span> = 4 - 3
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
                      3 - 2<span className="text-orange-500">y</span> = 1
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      -2<span className="text-orange-500">y</span> = 1 - 3
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-center text-xl p-4 bg-gray-100 rounded-xl"
                    >
                      -2<span className="text-orange-500">y</span> = -2
                    </motion.div>
                  </>
                )}

                <motion.div
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: selectedEquationForX === 1 ? 2 : 2.5 }}
                  className="text-center text-3xl p-4 bg-green-100 rounded-xl border-2 border-green-500"
                >
                  <span className="text-orange-500">y</span> = 1
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

            <h1 className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              ¡Sistema resuelto!
            </h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-8 space-y-4"
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
              ¡Excelente trabajo usando el método de sustitución!
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-y-3"
            >
              <button
                onClick={onReset}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all active:scale-95 flex items-center justify-center gap-2"
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
