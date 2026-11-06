import { useState } from 'react';
import { motion } from 'motion/react';
import type { FactorizationCase } from '../../App';

type CubosModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

export default function CubosModule({
  currentFrame,
  setCurrentFrame,
}: CubosModuleProps) {
  const [selectedSigns, setSelectedSigns] = useState<{ first: string; signs: string[] }>({
    first: '',
    signs: [],
  });

  const IntroFrame = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[#33291C] mb-6">
        Suma y Diferencia de Cubos
      </h3>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 space-y-4">
          <div className="bg-white rounded-xl p-4">
            <p className="text-center font-bold text-[#8C7F63] mb-2">Suma de cubos:</p>
            <p className="text-center text-2xl font-bold text-indigo-600">
              a³ + b³ = (a + b)(a² - ab + b²)
            </p>
          </div>

          <div className="bg-white rounded-xl p-4">
            <p className="text-center font-bold text-[#8C7F63] mb-2">Diferencia de cubos:</p>
            <p className="text-center text-2xl font-bold text-purple-600">
              a³ - b³ = (a - b)(a² + ab + b²)
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6">
          <h4 className="font-bold text-lg mb-4 text-center">Patrón de signos</h4>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-100 border-2 border-indigo-300 rounded-xl p-4">
              <p className="font-bold text-center mb-3 text-indigo-700">Suma (+)</p>
              <div className="space-y-2 text-center">
                <p>Primer paréntesis: <span className="text-green-600 font-bold text-xl">+</span></p>
                <p>Segundo paréntesis:</p>
                <p className="font-mono font-bold text-lg">
                  <span className="text-red-600">−</span>
                  <span className="text-green-600">+</span>
                  <span className="text-green-600">+</span>
                </p>
              </div>
            </div>

            <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-4">
              <p className="font-bold text-center mb-3 text-purple-700">Resta (−)</p>
              <div className="space-y-2 text-center">
                <p>Primer paréntesis: <span className="text-red-600 font-bold text-xl">−</span></p>
                <p>Segundo paréntesis:</p>
                <p className="font-mono font-bold text-lg">
                  <span className="text-green-600">+</span>
                  <span className="text-green-600">+</span>
                  <span className="text-green-600">+</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
          <h4 className="font-bold text-center mb-3">Ejemplo: x³ + 8</h4>
          <div className="space-y-2">
            <p className="text-center">Raíz cúbica de x³ = <span className="font-bold text-blue-600">x</span></p>
            <p className="text-center">Raíz cúbica de 8 = <span className="font-bold text-blue-600">2</span></p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-center"
            >
              <p className="mb-2 text-[#8C7F63]">Factorización:</p>
              <div className="bg-green-500 text-white px-6 py-3 rounded-xl inline-block text-xl font-bold">
                (x + 2)(x² - 2x + 4)
              </div>
            </motion.div>
          </div>
        </div>

        <button
          onClick={() => setCurrentFrame(1)}
          className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all text-lg"
        >
          Práctica interactiva →
        </button>
      </div>
    </motion.div>
  );

  const PracticeFrame = () => {
    const exercises = [
      {
        expr: 'x³ + 27',
        type: 'suma',
        roots: { a: 'x', b: '3' },
        answer: {
          first: '+',
          signs: ['-', '+', '+'],
        },
        result: '(x+3)(x²-3x+9)',
      },
      {
        expr: 'a³ - 64',
        type: 'resta',
        roots: { a: 'a', b: '4' },
        answer: {
          first: '-',
          signs: ['+', '+', '+'],
        },
        result: '(a-4)(a²+4a+16)',
      },
      {
        expr: '8x³ + 1',
        type: 'suma',
        roots: { a: '2x', b: '1' },
        answer: {
          first: '+',
          signs: ['-', '+', '+'],
        },
        result: '(2x+1)(4x²-2x+1)',
      },
    ];

    const [currentEx, setCurrentEx] = useState(0);
    const current = exercises[currentEx];

    const checkAnswer = () => {
      return (
        selectedSigns.first === current.answer.first &&
        selectedSigns.signs.length === 3 &&
        selectedSigns.signs.every((sign, idx) => sign === current.answer.signs[idx])
      );
    };

    return (
      <motion.div
        key="practice"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#33291C] mb-6">
          Práctica de Signos
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
          <p className="text-center text-3xl font-bold mb-6">{current.expr}</p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <p className="font-semibold mb-3">Raíces cúbicas:</p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-[#8C7F63] text-sm">Primera raíz:</p>
                  <p className="text-2xl font-bold text-blue-600">{current.roots.a}</p>
                </div>
                <div className="text-center">
                  <p className="text-[#8C7F63] text-sm">Segunda raíz:</p>
                  <p className="text-2xl font-bold text-purple-600">{current.roots.b}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="font-semibold mb-4">Selecciona el signo del primer paréntesis:</p>
              <div className="flex gap-4 justify-center mb-6">
                <button
                  onClick={() => setSelectedSigns({ ...selectedSigns, first: '+' })}
                  className={`w-16 h-16 rounded-xl text-3xl font-bold transition-all ${
                    selectedSigns.first === '+'
                      ? 'bg-green-500 text-white shadow-lg scale-110'
                      : 'bg-[#F0E2C4] hover:bg-[#F0E2C4]'
                  }`}
                >
                  +
                </button>
                <button
                  onClick={() => setSelectedSigns({ ...selectedSigns, first: '-' })}
                  className={`w-16 h-16 rounded-xl text-3xl font-bold transition-all ${
                    selectedSigns.first === '-'
                      ? 'bg-red-500 text-white shadow-lg scale-110'
                      : 'bg-[#F0E2C4] hover:bg-[#F0E2C4]'
                  }`}
                >
                  −
                </button>
              </div>

              <p className="font-semibold mb-4">Selecciona los signos del segundo paréntesis:</p>
              <div className="flex gap-3 justify-center">
                {[0, 1, 2].map((idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs text-[#8C7F63] mb-2">
                      {idx === 0 ? 'a²' : idx === 1 ? 'ab' : 'b²'}
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          const newSigns = [...selectedSigns.signs];
                          newSigns[idx] = '+';
                          setSelectedSigns({ ...selectedSigns, signs: newSigns });
                        }}
                        className={`w-12 h-12 rounded-lg text-xl font-bold transition-all ${
                          selectedSigns.signs[idx] === '+'
                            ? 'bg-green-500 text-white shadow-lg'
                            : 'bg-[#F0E2C4] hover:bg-[#F0E2C4]'
                        }`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          const newSigns = [...selectedSigns.signs];
                          newSigns[idx] = '-';
                          setSelectedSigns({ ...selectedSigns, signs: newSigns });
                        }}
                        className={`w-12 h-12 rounded-lg text-xl font-bold transition-all ${
                          selectedSigns.signs[idx] === '-'
                            ? 'bg-red-500 text-white shadow-lg'
                            : 'bg-[#F0E2C4] hover:bg-[#F0E2C4]'
                        }`}
                      >
                        −
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedSigns.first && selectedSigns.signs.length === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-center p-6 rounded-xl ${
                  checkAnswer() ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                {checkAnswer() ? (
                  <div>
                    <p className="text-green-700 font-bold text-xl mb-3">¡Correcto! 🎉</p>
                    <div className="bg-green-500 text-white px-6 py-3 rounded-xl inline-block text-xl font-bold">
                      {current.result}
                    </div>
                  </div>
                ) : (
                  <p className="text-red-700 font-bold text-xl">
                    Los signos no son correctos. Revisa el patrón.
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          {currentEx < exercises.length - 1 && checkAnswer() && (
            <button
              onClick={() => {
                setCurrentEx(currentEx + 1);
                setSelectedSigns({ first: '', signs: [] });
              }}
              className="flex-1 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold py-3 px-6 rounded-xl"
            >
              Siguiente ejercicio →
            </button>
          )}
          <button
            onClick={() => setCurrentFrame(0)}
            className="flex-1 bg-[#F0E2C4] hover:bg-[#F0E2C4] text-[#33291C] font-bold py-3 px-6 rounded-xl transition-colors"
          >
            ← Volver
          </button>
        </div>
      </motion.div>
    );
  };

  const frames = [IntroFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
