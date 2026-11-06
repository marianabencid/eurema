import { useState } from 'react';
import { motion } from 'motion/react';
import type { FactorizationCase } from '../../App';

type DiferenciaCuadradosModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

export default function DiferenciaCuadradosModule({
  currentFrame,
  setCurrentFrame,
}: DiferenciaCuadradosModuleProps) {
  const [step, setStep] = useState(0);
  const [draggedToPlus, setDraggedToPlus] = useState<{ first: string | null; second: string | null }>({ first: null, second: null });
  const [draggedToMinus, setDraggedToMinus] = useState<{ first: string | null; second: string | null }>({ first: null, second: null });

  const IntroFrame = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-xl p-6"
    >
      <h3 className="text-xl font-bold text-[#33291C] mb-4">
        Diferencia de Cuadrados
      </h3>

      <div className="space-y-4">
        <div className="bg-yellow-50 rounded-2xl p-4">
          <h4 className="font-bold text-base mb-4 text-center">Ejemplo: a² − b²</h4>

          <div className="space-y-4">
            {/* Paso 1: Sacar las raíces */}
            {step >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <p className="text-sm font-semibold text-center">Paso 1: Sacar las raíces de cada término</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="bg-blue-200 w-20 h-20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold">a²</span>
                    </div>
                    {step >= 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2"
                      >
                        <div className="text-2xl text-blue-600">↓</div>
                        <div className="text-lg font-bold text-blue-600 mt-1">a</div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex items-center pb-12">
                    <span className="text-3xl font-bold text-red-500">−</span>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-200 w-20 h-20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold">b²</span>
                    </div>
                    {step >= 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2"
                      >
                        <div className="text-2xl text-purple-600">↓</div>
                        <div className="text-lg font-bold text-purple-600 mt-1">b</div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Paso 2: Colocar en paréntesis */}
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <p className="text-sm font-semibold text-center">Paso 2: Colocar las raíces en un paréntesis con suma y uno con resta</p>
                <div className="flex justify-center gap-2 items-center flex-wrap">
                  <div className="bg-white border-2 border-green-400 px-3 py-2 rounded-xl">
                    <span className="text-lg font-bold">
                      (<span className="text-blue-600">a</span> + <span className="text-purple-600">b</span>)
                    </span>
                  </div>
                  <div className="bg-white border-2 border-green-400 px-3 py-2 rounded-xl">
                    <span className="text-lg font-bold">
                      (<span className="text-blue-600">a</span> − <span className="text-purple-600">b</span>)
                    </span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center pt-2"
                >
                  <p className="text-green-600 font-bold text-base">¡Listo! Ya tienes tu respuesta</p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {step < 1 && (
            <button
              onClick={() => setStep(step + 1)}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Siguiente paso →
            </button>
          )}
          {step === 1 && (
            <button
              onClick={() => setCurrentFrame(1)}
              className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Practicar →
            </button>
          )}
          {step < 1 && (
            <div className="text-center">
              <button
                onClick={() => setCurrentFrame(1)}
                className="text-xs text-[#8C7F63] hover:text-[#33291C]"
              >
                Saltar a práctica →
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  const PracticeFrame = () => {
    const exercises = [
      {
        expr: '16a² − 49b²',
        root1: '4a',
        root2: '7b',
      },
      {
        expr: '169x² − 121y²',
        root1: '13x',
        root2: '11y',
      },
      {
        expr: 'x² − y²',
        root1: 'x',
        root2: 'y',
      },
      {
        expr: '144a² − 1',
        root1: '12a',
        root2: '1',
      },
    ];

    const [currentEx, setCurrentEx] = useState(0);
    const [root1Input, setRoot1Input] = useState('');
    const [root2Input, setRoot2Input] = useState('');

    const current = exercises[currentEx];

    const normalizeInput = (str: string) => str.replace(/\s/g, '').toLowerCase();

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

    const checkRoots = () => {
      const normalizedInput1 = normalizeInput(normalizeExponents(root1Input));
      const normalizedInput2 = normalizeInput(normalizeExponents(root2Input));
      const normalizedCorrect1 = normalizeInput(current.root1);
      const normalizedCorrect2 = normalizeInput(current.root2);

      return normalizedInput1 === normalizedCorrect1 && normalizedInput2 === normalizedCorrect2;
    };

    const resetPractice = () => {
      setRoot1Input('');
      setRoot2Input('');
    };

    const isComplete = root1Input && root2Input;
    const isCorrect = isComplete && checkRoots();

    return (
      <motion.div
        key="practice"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-xl p-6"
      >
        {/* Navegación superior entre problemas */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => {
              if (currentEx > 0) {
                setCurrentEx(currentEx - 1);
                resetPractice();
              }
            }}
            disabled={currentEx === 0}
            className={`text-xs ${
              currentEx === 0
                ? 'text-[#C9BBA0] cursor-not-allowed'
                : 'text-[#8C7F63] hover:text-[#33291C]'
            }`}
          >
            ← Anterior
          </button>
          <button
            onClick={() => {
              if (currentEx < exercises.length - 1) {
                setCurrentEx(currentEx + 1);
                resetPractice();
              }
            }}
            disabled={currentEx === exercises.length - 1}
            className={`text-xs ${
              currentEx === exercises.length - 1
                ? 'text-[#C9BBA0] cursor-not-allowed'
                : 'text-[#8C7F63] hover:text-[#33291C]'
            }`}
          >
            Siguiente →
          </button>
        </div>

        <h3 className="text-xl font-bold text-[#33291C] mb-4">
          Práctica Interactiva
        </h3>

        <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 mb-6">
          <p className="text-center text-base font-bold mb-2">
            Problema {currentEx + 1} de {exercises.length}
          </p>
          <p className="text-center text-2xl font-bold mb-6">{current.expr}</p>

          <div className="space-y-6">
            {/* Paso 1: Escribir raíces */}
            <div>
              <p className="font-semibold mb-3 text-sm text-center">Escribe las raíces cuadradas de cada término:</p>
              <div className="flex gap-3 justify-center">
                <div className="text-center">
                  <p className="text-xs text-[#8C7F63] mb-2">Primera raíz:</p>
                  <input
                    type="text"
                    value={root1Input}
                    onChange={(e) => setRoot1Input(normalizeExponents(e.target.value))}
                    className="w-20 h-12 border-2 border-[#33291C]/15 rounded-lg text-center font-bold text-blue-600"
                    placeholder="?"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#8C7F63] mb-2">Segunda raíz:</p>
                  <input
                    type="text"
                    value={root2Input}
                    onChange={(e) => setRoot2Input(normalizeExponents(e.target.value))}
                    className="w-20 h-12 border-2 border-[#33291C]/15 rounded-lg text-center font-bold text-purple-600"
                    placeholder="?"
                  />
                </div>
              </div>
            </div>

            {/* Resultado */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                {isCorrect ? (
                  <div>
                    <p className="text-green-600 font-bold text-lg mb-3">¡Correcto! 🎉</p>
                    <p className="text-sm text-[#8C7F63] mb-2">La factorización es:</p>
                    <div className="bg-green-500 text-white px-4 py-3 rounded-xl inline-block font-bold text-lg">
                      ({current.root1} + {current.root2})({current.root1} − {current.root2})
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-red-600 font-bold mb-2">Revisa las raíces</p>
                    <button
                      onClick={resetPractice}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Botón de continuar cuando se completa correctamente */}
        {isCorrect && currentEx < exercises.length - 1 && (
          <div className="mb-4">
            <button
              onClick={() => {
                setCurrentEx(currentEx + 1);
                resetPractice();
              }}
              className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Continuar →
            </button>
          </div>
        )}

        {/* Volver al inicio */}
        <button
          onClick={() => setCurrentFrame(0)}
          className="w-full bg-[#F0E2C4] hover:bg-[#F0E2C4] text-[#33291C] font-bold py-3 px-6 rounded-2xl transition-colors"
        >
          ← Volver al inicio
        </button>
      </motion.div>
    );
  };

  const frames = [IntroFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
