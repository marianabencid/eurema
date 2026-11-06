import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import type { FactorizationCase } from '../../App';

type TrinomioSimpleModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

export default function TrinomioSimpleModule({
  currentFrame,
  setCurrentFrame,
}: TrinomioSimpleModuleProps) {
  const [step, setStep] = useState(0);

  const IntroFrame = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-xl p-6"
    >
      <h3 className="text-xl font-bold text-[#33291C] mb-4">
        Trinomio x² + bx + c
      </h3>

      <div className="space-y-4">
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-4">
          <p className="text-center text-sm text-[#33291C] leading-relaxed">
            Hay que encontrar dos números que <span className="font-bold text-blue-600">multiplicados</span> den el último y <span className="font-bold text-purple-600">sumados (o restados)</span> el del medio.
          </p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-4">
          <h4 className="font-bold text-base mb-4 text-center">Ejemplo: x² + 5x + 6</h4>

          <div className="space-y-3">
            {/* Paso 1 */}
            {step >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-300 rounded-xl p-3"
              >
                <p className="font-semibold text-sm mb-2">Paso 1: Abrir paréntesis y distribuir x</p>
                <div className="text-center text-2xl font-bold">
                  (x &nbsp;&nbsp;)(x &nbsp;&nbsp;)
                </div>
              </motion.div>
            )}

            {/* Paso 2 */}
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-purple-50 border-2 border-purple-300 rounded-xl p-3"
              >
                <p className="font-semibold text-sm mb-3">Paso 2: Colocar los signos</p>
                <div className="grid grid-cols-2 gap-3">
                  {/* Columna izquierda - 1er paréntesis */}
                  <div className="space-y-2">
                    <div className="bg-white px-3 py-2 rounded-lg border-2 border-green-300">
                      <p className="text-xs font-bold text-[#33291C]">1er paréntesis:</p>
                      <p className="text-xs text-[#8C7F63]">Signo del medio</p>
                      <p className="text-xl font-bold text-green-600 text-center">(+)</p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowDown className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="bg-green-100 border-2 border-green-400 px-3 py-2 rounded-lg">
                      <p className="text-xs text-[#8C7F63] text-center mb-1">Resultado:</p>
                      <p className="text-lg font-bold text-center">(x <span className="text-green-600">+</span> )</p>
                    </div>
                  </div>

                  {/* Columna derecha - 2do paréntesis */}
                  <div className="space-y-2">
                    <div className="bg-white px-3 py-2 rounded-lg border-2 border-blue-300">
                      <p className="text-xs font-bold text-[#33291C]">2do paréntesis:</p>
                      <p className="text-xs text-[#8C7F63]">Multiplicación de signos</p>
                      <p className="text-base font-bold text-blue-600 text-center">(+)(+) = +</p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowDown className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-blue-100 border-2 border-blue-400 px-3 py-2 rounded-lg">
                      <p className="text-xs text-[#8C7F63] text-center mb-1">Resultado:</p>
                      <p className="text-lg font-bold text-center">(x <span className="text-blue-600">+</span> )</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Paso 3 */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-orange-50 border-2 border-orange-300 rounded-xl p-3"
              >
                <p className="font-semibold text-sm mb-2">Paso 3: ¿Suma o resta?</p>
                <p className="text-xs text-center">Ambos signos son <span className="font-bold text-green-600">iguales (+)</span> → Buscamos <span className="font-bold text-purple-600">SUMA</span></p>
              </motion.div>
            )}

            {/* Paso 4 */}
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-pink-50 border-2 border-pink-300 rounded-xl p-3"
              >
                <p className="font-semibold text-sm mb-2">Paso 4: Hacer una lista con todos los números que multiplicados dan 6</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2 rounded-lg text-center text-xs">
                    <p className="font-bold">1 y 6</p>
                    <p className="text-blue-600">1 × 6 = 6 ✓</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-center text-xs">
                    <p className="font-bold">2 y 3</p>
                    <p className="text-blue-600">2 × 3 = 6 ✓</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Paso 5 */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-300 rounded-xl p-3"
              >
                <p className="font-semibold text-sm mb-2">Paso 5: Escoger los que sumados dan 5</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-white p-2 rounded-lg text-center text-xs">
                    <p className="font-bold">1 y 6</p>
                    <p className="text-red-600">1 + 6 = 7 ✗</p>
                  </div>
                  <div className="bg-green-100 border-2 border-green-500 p-2 rounded-lg text-center text-xs">
                    <p className="font-bold">2 y 3</p>
                    <p className="text-green-600">2 + 3 = 5 ✓</p>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <p className="text-xs mb-1">Respuesta:</p>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl text-lg font-bold inline-block">
                    (x + 2)(x + 3)
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {step < 4 && (
            <button
              onClick={() => setStep(step + 1)}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Siguiente paso →
            </button>
          )}
          {step === 4 && (
            <button
              onClick={() => setCurrentFrame(1)}
              className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
            >
              Practicar →
            </button>
          )}
          {step < 4 && (
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
        expr: 'x² + 7x + 12',
        middleSign: '+',
        lastTerm: 12,
        middleTerm: 7,
        sign1: '+',
        sign2: '+',
        pairs: [[1, 12], [2, 6], [3, 4]],
        correctPair: [3, 4],
        num1: 3,
        num2: 4,
      },
      {
        expr: 'x² − 7x + 12',
        middleSign: '-',
        lastTerm: 12,
        middleTerm: 7,
        sign1: '-',
        sign2: '-',
        pairs: [[1, 12], [2, 6], [3, 4]],
        correctPair: [3, 4],
        num1: 3,
        num2: 4,
      },
      {
        expr: 'x² + x − 12',
        middleSign: '+',
        lastTerm: 12,
        middleTerm: 1,
        sign1: '+',
        sign2: '-',
        pairs: [[1, 12], [2, 6], [3, 4]],
        correctPair: [4, 3],
        num1: 4,
        num2: 3,
      },
      {
        expr: 'a² − 11ab + 30b²',
        middleSign: '-',
        lastTerm: 30,
        middleTerm: 11,
        sign1: '-',
        sign2: '-',
        pairs: [[1, 30], [2, 15], [3, 10], [5, 6]],
        correctPair: [5, 6],
        num1: 5,
        num2: 6,
      },
      {
        expr: 'a² + 13ab + 30b²',
        middleSign: '+',
        lastTerm: 30,
        middleTerm: 13,
        sign1: '+',
        sign2: '+',
        pairs: [[1, 30], [2, 15], [3, 10], [5, 6]],
        correctPair: [3, 10],
        num1: 3,
        num2: 10,
      },
      {
        expr: 'x² − 4x + 3',
        middleSign: '-',
        lastTerm: 3,
        middleTerm: 4,
        sign1: '-',
        sign2: '-',
        pairs: [[1, 3]],
        correctPair: [1, 3],
        num1: 1,
        num2: 3,
      },
    ];

    const [currentEx, setCurrentEx] = useState(0);
    const [practiceStep, setPracticeStep] = useState(0);
    const [selectedSign1, setSelectedSign1] = useState('');
    const [selectedSign2, setSelectedSign2] = useState('');
    const [selectedPair, setSelectedPair] = useState<number[] | null>(null);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const current = exercises[currentEx];

    const resetPractice = () => {
      setPracticeStep(0);
      setSelectedSign1('');
      setSelectedSign2('');
      setSelectedPair(null);
      setInput1('');
      setInput2('');
    };

    const checkSigns = () => {
      return selectedSign1 === current.sign1 && selectedSign2 === current.sign2;
    };

    const checkPair = () => {
      if (!selectedPair) return false;

      // Verificar que la pareja seleccionada contenga los números correctos
      // en cualquier orden (ya que pairs puede tener [3, 4] pero correctPair puede ser [4, 3])
      const hasNum1 = selectedPair.includes(current.num1);
      const hasNum2 = selectedPair.includes(current.num2);

      return hasNum1 && hasNum2;
    };

    const checkFinalAnswer = () => {
      // Si ambos signos son iguales, permitir cualquier orden
      if (current.sign1 === current.sign2) {
        return (
          (input1 === current.num1.toString() && input2 === current.num2.toString()) ||
          (input1 === current.num2.toString() && input2 === current.num1.toString())
        );
      }
      // Si los signos son diferentes (resta), el orden debe ser estricto: número mayor primero
      return input1 === current.num1.toString() && input2 === current.num2.toString();
    };

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

          <div className="space-y-4">
            {/* Paso 1: Escoger signos */}
            {practiceStep >= 0 && (
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
                <p className="font-semibold text-sm mb-3 text-center">Paso 1: ¿Qué signo va en cada paréntesis?</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold mb-2 text-center">1er paréntesis:</p>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setSelectedSign1('+')}
                        className={`w-12 h-12 rounded-lg font-bold text-xl transition-all ${
                          selectedSign1 === '+'
                            ? (current.sign1 === '+' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                            : 'bg-white border-2 border-[#33291C]/15'
                        }`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => setSelectedSign1('-')}
                        className={`w-12 h-12 rounded-lg font-bold text-xl transition-all ${
                          selectedSign1 === '-'
                            ? (current.sign1 === '-' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                            : 'bg-white border-2 border-[#33291C]/15'
                        }`}
                      >
                        −
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-2 text-center">2do paréntesis:</p>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setSelectedSign2('+')}
                        className={`w-12 h-12 rounded-lg font-bold text-xl transition-all ${
                          selectedSign2 === '+'
                            ? (current.sign2 === '+' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                            : 'bg-white border-2 border-[#33291C]/15'
                        }`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => setSelectedSign2('-')}
                        className={`w-12 h-12 rounded-lg font-bold text-xl transition-all ${
                          selectedSign2 === '-'
                            ? (current.sign2 === '-' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                            : 'bg-white border-2 border-[#33291C]/15'
                        }`}
                      >
                        −
                      </button>
                    </div>
                  </div>
                </div>
                {selectedSign1 && selectedSign2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 text-center"
                  >
                    {checkSigns() ? (
                      <div>
                        <p className="text-green-600 font-bold text-sm">¡Correcto! ✓</p>
                        <p className="text-xs text-[#33291C] mt-1">
                          Como ambos signos son {current.sign1 === current.sign2 ? 'iguales' : 'diferentes'}, buscamos una <span className="font-bold">{current.sign1 === current.sign2 ? 'suma' : 'resta'}</span>
                        </p>
                        <button
                          onClick={() => setPracticeStep(1)}
                          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Siguiente paso →
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-red-600 font-bold text-sm">Intenta de nuevo</p>
                        <button
                          onClick={() => {
                            setSelectedSign1('');
                            setSelectedSign2('');
                          }}
                          className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                        >
                          Reintentar
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            )}

            {/* Paso 2: Lista de parejas */}
            {practiceStep >= 1 && (
              <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-4">
                <p className="font-semibold text-sm mb-1 text-center">
                  Paso 2: Números que multiplicados dan {current.lastTerm}
                </p>
                <p className="text-xs text-[#33291C] mb-3 text-center">
                  Escoge los números que {current.sign1 === current.sign2 ? 'sumados' : 'restados'} dan {current.middleTerm}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {current.pairs.map((pair, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPair(pair)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedPair === pair
                          ? 'bg-blue-500 text-white border-blue-600'
                          : 'bg-white border-[#33291C]/15 hover:border-blue-400'
                      }`}
                    >
                      <p className="font-bold text-base">{pair[0]} y {pair[1]}</p>
                    </button>
                  ))}
                </div>
                {selectedPair && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 text-center"
                  >
                    <button
                      onClick={() => setPracticeStep(2)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Verificar →
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {/* Paso 3: Verificar suma/resta */}
            {practiceStep >= 2 && (
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                <p className="font-semibold text-sm mb-3 text-center">
                  Paso 3: Verificar que {selectedPair && selectedPair[0] + ' y ' + selectedPair[1]} {selectedSign1 === selectedSign2 ? 'sumados' : 'restados'} den {current.middleTerm}
                </p>
                {selectedPair && (
                  <div className="text-center">
                    {checkPair() ? (
                      <div>
                        <p className="text-green-600 font-bold">
                          {selectedPair[0]} {selectedSign1 === selectedSign2 ? '+' : '-'} {selectedPair[1]} = {current.middleTerm} ✓
                        </p>
                        <button
                          onClick={() => setPracticeStep(3)}
                          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Siguiente paso →
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-red-600 font-bold text-sm">
                          {selectedPair[0]} {selectedSign1 === selectedSign2 ? '+' : '-'} {selectedPair[1]} = {selectedSign1 === selectedSign2 ? selectedPair[0] + selectedPair[1] : Math.abs(selectedPair[0] - selectedPair[1])} ✗
                        </p>
                        <button
                          onClick={() => {
                            setPracticeStep(1);
                            setSelectedPair(null);
                          }}
                          className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                        >
                          Volver a escoger
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Paso 4: Escribir respuesta */}
            {practiceStep >= 3 && (
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
                <p className="font-semibold text-sm mb-3 text-center">Paso 4: Completa los paréntesis</p>
                <div className="flex justify-center gap-2 items-center text-xl font-bold">
                  <span>(x {selectedSign1} </span>
                  <input
                    type="text"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    className="w-12 h-12 border-2 border-[#33291C]/15 rounded-lg text-center"
                    maxLength={2}
                  />
                  <span>)(x {selectedSign2} </span>
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    className="w-12 h-12 border-2 border-[#33291C]/15 rounded-lg text-center"
                    maxLength={2}
                  />
                  <span>)</span>
                </div>
                {input1 && input2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 text-center"
                  >
                    {checkFinalAnswer() ? (
                      <div>
                        <p className="text-green-600 font-bold text-lg mb-2">¡Correcto! 🎉</p>
                        <div className="bg-green-500 text-white px-4 py-2 rounded-xl inline-block font-bold">
                          (x {selectedSign1} {current.num1})(x {selectedSign2} {current.num2})
                        </div>
                      </div>
                    ) : (
                      <p className="text-red-600 font-bold">Revisa los números</p>
                    )}
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Botón de continuar cuando se completa correctamente */}
        {checkFinalAnswer() && currentEx < exercises.length - 1 && (
          <div className="mt-4">
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
        <div className="mt-4">
          <button
            onClick={() => setCurrentFrame(0)}
            className="w-full bg-[#F0E2C4] hover:bg-[#F0E2C4] text-[#33291C] font-bold py-3 px-6 rounded-2xl transition-colors"
          >
            ← Volver al inicio
          </button>
        </div>
      </motion.div>
    );
  };

  const frames = [IntroFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
