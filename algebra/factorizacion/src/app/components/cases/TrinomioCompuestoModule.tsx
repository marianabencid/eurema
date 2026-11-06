import { useState } from 'react';
import { motion } from 'motion/react';
import type { FactorizationCase } from '../../App';

type TrinomioCompuestoModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

export default function TrinomioCompuestoModule({
  currentFrame,
  setCurrentFrame,
}: TrinomioCompuestoModuleProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const IntroFrame = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[#33291C] mb-6">
        Trinomio ax² + bx + c
      </h3>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
          <p className="text-center text-[#8C7F63] mb-3">Este caso es más complejo porque</p>
          <p className="text-center text-2xl font-bold text-[#33291C]">
            el coeficiente de x² NO es 1
          </p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6">
          <h4 className="font-bold text-lg mb-4">Método de descomposición</h4>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <p>Multiplica <span className="font-bold">a × c</span></p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <p>Encuentra dos números que multiplicados den <span className="font-bold">a×c</span> y sumados den <span className="font-bold">b</span></p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <p>Descompón el término medio usando esos números</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <p>Agrupa los términos y factoriza cada grupo</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <p>Extrae el factor común final</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setCurrentFrame(1)}
            className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all text-lg"
          >
            Ver ejemplo guiado →
          </button>
          <div className="text-center">
            <button
              onClick={() => setCurrentFrame(2)}
              className="text-xs text-[#8C7F63] hover:text-[#33291C]"
            >
              Saltar a práctica →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const GuidedExampleFrame = () => {
    const steps = [
      {
        title: '1. Multiplicar a × c',
        content: '2 × 3 = 6',
        visual: '2x² + 7x + 3',
        bgClass: 'bg-blue-50',
        borderClass: 'border-blue-300',
      },
      {
        title: '2. Encontrar los números',
        content: 'Necesitamos: m × n = 6 y m + n = 7',
        visual: 'Los números son: 6 y 1',
        bgClass: 'bg-purple-50',
        borderClass: 'border-purple-300',
      },
      {
        title: '3. Descomponer término medio',
        content: '7x = 6x + 1x',
        visual: '2x² + 6x + 1x + 3',
        bgClass: 'bg-green-50',
        borderClass: 'border-green-300',
      },
      {
        title: '4. Agrupar términos',
        content: 'Separar en dos grupos: los que tengan factor común',
        visual: '(2x² + 6x) + (1x + 3)',
        bgClass: 'bg-orange-50',
        borderClass: 'border-orange-300',
      },
      {
        title: '5. Factorizar cada grupo',
        content: 'Sacar factor común de cada grupo',
        visual: '2x(x + 3) + 1(x + 3)',
        bgClass: 'bg-pink-50',
        borderClass: 'border-pink-300',
      },
      {
        title: '6. Factor común final',
        content: '(x + 3) es común en ambos',
        visual: '(x + 3)(2x + 1)',
        bgClass: 'bg-emerald-50',
        borderClass: 'border-emerald-300',
      },
    ];

    return (
      <motion.div
        key="guided"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#33291C] mb-6">
          Ejemplo: 2x² + 7x + 3
        </h3>

        <div className="space-y-4 mb-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentStep >= idx ? 1 : 0.3,
                y: 0,
              }}
              className={`p-6 rounded-2xl transition-all ${
                currentStep >= idx
                  ? `${step.bgClass} border-2 ${step.borderClass}`
                  : 'bg-[#F0E2C4]'
              }`}
            >
              <h4 className="font-bold text-lg mb-3">{step.title}</h4>
              <p className="text-[#33291C] mb-2">{step.content}</p>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-2xl font-mono font-bold text-center">
                  {step.visual}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          {currentStep < steps.length - 1 && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all"
            >
              Siguiente paso →
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button
              onClick={() => setCurrentFrame(2)}
              className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all"
            >
              Ir a práctica →
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <div className="text-center">
              <button
                onClick={() => setCurrentFrame(2)}
                className="text-xs text-[#8C7F63] hover:text-[#33291C]"
              >
                Saltar a práctica →
              </button>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const PracticeFrame = () => {
    const exercises = [
      {
        expr: '6x² − xy − 12y²',
        a: 6,
        b: -1,
        c: -12,
        product: -72,
        m: 8,
        n: -9,
        decomposed: '6x² + 8xy − 9xy − 12y²',
        grouped: '(6x² + 8xy) + (−9xy − 12y²)',
        factored: '2x(3x + 4y) − 3y(3x + 4y)',
        commonFactor: '(3x + 4y)',
        answer1: '(3x + 4y)',
        answer2: '(2x − 3y)',
      },
      {
        expr: '5x² + 13xy + 6y²',
        a: 5,
        b: 13,
        c: 6,
        product: 30,
        m: 10,
        n: 3,
        decomposed: '5x² + 10xy + 3xy + 6y²',
        grouped: '(5x² + 10xy) + (3xy + 6y²)',
        factored: '5x(x + 2y) + 3y(x + 2y)',
        commonFactor: '(x + 2y)',
        answer1: '(x + 2y)',
        answer2: '(5x + 3y)',
      },
      {
        expr: '15x² − 22xy + 8y²',
        a: 15,
        b: -22,
        c: 8,
        product: 120,
        m: -12,
        n: -10,
        decomposed: '15x² − 12xy − 10xy + 8y²',
        grouped: '(15x² − 12xy) + (−10xy + 8y²)',
        factored: '3x(5x − 4y) − 2y(5x − 4y)',
        commonFactor: '(5x − 4y)',
        answer1: '(5x − 4y)',
        answer2: '(3x − 2y)',
      },
    ];

    const [currentEx, setCurrentEx] = useState(0);
    const [practiceStep, setPracticeStep] = useState(0);
    const [productInput, setProductInput] = useState('');
    const [selectedPair, setSelectedPair] = useState<number[] | null>(null);

    const current = exercises[currentEx];

    const resetPractice = () => {
      setPracticeStep(0);
      setProductInput('');
      setSelectedPair(null);
    };

    const checkProduct = () => {
      return parseInt(productInput) === current.product;
    };

    const checkPair = () => {
      if (!selectedPair) return false;
      return (
        (selectedPair[0] === current.m && selectedPair[1] === current.n) ||
        (selectedPair[0] === current.n && selectedPair[1] === current.m)
      );
    };

    // Generar pares posibles para el problema actual
    const generatePairs = () => {
      const pairs: number[][] = [];
      const absProduct = Math.abs(current.product);

      for (let i = 1; i <= Math.sqrt(absProduct); i++) {
        if (absProduct % i === 0) {
          const j = absProduct / i;
          // Considerar signos
          if (current.product > 0) {
            if (current.b > 0) {
              pairs.push([i, j]);
            } else {
              pairs.push([-i, -j]);
            }
          } else {
            pairs.push([i, -j]);
            pairs.push([-i, j]);
          }
        }
      }

      // Filtrar solo pares únicos y que sumen b
      const validPairs = pairs.filter(pair => pair[0] + pair[1] === current.b);

      // Agregar algunos pares incorrectos para hacer más interesante
      const allOptions: number[][] = [...validPairs];

      // Agregar pares que multiplican correcto pero no suman correcto
      for (let i = 1; i <= Math.sqrt(absProduct); i++) {
        if (absProduct % i === 0) {
          const j = absProduct / i;
          if (!allOptions.find(p => (p[0] === i && p[1] === j) || (p[0] === j && p[1] === i))) {
            if (current.product > 0) {
              allOptions.push([i, j]);
            } else {
              allOptions.push([i, -j]);
            }
            if (allOptions.length >= 4) break;
          }
        }
      }

      return allOptions.slice(0, 4);
    };

    const pairs = generatePairs();

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

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
          <p className="text-center text-base font-bold mb-2">
            Problema {currentEx + 1} de {exercises.length}
          </p>
          <p className="text-center text-2xl font-bold mb-6">{current.expr}</p>

          <div className="space-y-4">
            {/* Paso 1: Calcular a × c */}
            {practiceStep >= 0 && (
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
                <p className="font-semibold text-sm mb-3 text-center">Paso 1: Multiplica a × c</p>
                <p className="text-xs text-center text-[#8C7F63] mb-3">
                  a = {current.a}, c = {current.c}
                </p>
                <div className="flex flex-col items-center gap-2">
                  <input
                    type="text"
                    value={productInput}
                    onChange={(e) => setProductInput(e.target.value)}
                    className="w-24 px-3 py-2 border-2 border-[#33291C]/15 rounded-lg text-center font-bold"
                    placeholder="?"
                  />
                  {productInput && checkProduct() && (
                    <div>
                      <p className="text-green-600 font-bold text-sm">✓ Correcto</p>
                      <button
                        onClick={() => setPracticeStep(1)}
                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Siguiente paso →
                      </button>
                    </div>
                  )}
                  {productInput && !checkProduct() && (
                    <p className="text-red-600 font-bold text-sm">Intenta de nuevo</p>
                  )}
                </div>
              </div>
            )}

            {/* Paso 2: Encontrar los números */}
            {practiceStep >= 1 && (
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
                <p className="font-semibold text-sm mb-2 text-center">
                  Paso 2: Encuentra dos números
                </p>
                <p className="text-xs text-center text-[#33291C] mb-3">
                  Que multiplicados den {current.product} y sumados den {current.b}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {pairs.map((pair, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPair(pair)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedPair === pair
                          ? 'bg-blue-500 text-white border-blue-600'
                          : 'bg-white border-[#33291C]/15 hover:border-blue-400'
                      }`}
                    >
                      <p className="font-bold text-sm">{pair[0]} y {pair[1]}</p>
                    </button>
                  ))}
                </div>
                {selectedPair && checkPair() && (
                  <div className="mt-3 text-center">
                    <p className="text-green-600 font-bold text-sm mb-2">✓ Correcto</p>
                    <button
                      onClick={() => setPracticeStep(2)}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Siguiente paso →
                    </button>
                  </div>
                )}
                {selectedPair && !checkPair() && (
                  <p className="text-red-600 font-bold text-sm text-center mt-3">
                    Ese par no suma {current.b}. Intenta otro
                  </p>
                )}
              </div>
            )}

            {/* Paso 3: Descomponer término medio */}
            {practiceStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 3: Descomponer término medio</p>
                <p className="text-xs text-center text-[#8C7F63] mb-2">
                  Reescribe el término del medio usando {current.m} y {current.n}:
                </p>
                <div className="bg-white px-4 py-3 rounded-xl text-center font-bold">
                  {current.decomposed}
                </div>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => setPracticeStep(3)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Siguiente paso →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Paso 4: Agrupar términos */}
            {practiceStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-orange-50 border-2 border-orange-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 4: Agrupar términos</p>
                <p className="text-xs text-center text-[#8C7F63] mb-2">
                  Separa en dos grupos que tengan factor común:
                </p>
                <div className="bg-white px-4 py-3 rounded-xl text-center font-bold">
                  {current.grouped}
                </div>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => setPracticeStep(4)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Siguiente paso →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Paso 5: Factorizar cada grupo */}
            {practiceStep >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-pink-50 border-2 border-pink-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 5: Factorizar cada grupo</p>
                <p className="text-xs text-center text-[#8C7F63] mb-2">
                  Saca factor común de cada grupo:
                </p>
                <div className="bg-white px-4 py-3 rounded-xl text-center font-bold">
                  {current.factored}
                </div>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => setPracticeStep(5)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Siguiente paso →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Paso 6: Factor común final */}
            {practiceStep >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4"
              >
                <p className="font-semibold text-sm mb-3 text-center">Paso 6: Factor común final</p>
                <p className="text-xs text-center text-[#8C7F63] mb-2">
                  {current.commonFactor} es común en ambos términos:
                </p>
                <div className="bg-emerald-500 text-white px-4 py-3 rounded-xl text-center font-bold text-lg">
                  {current.answer1}{current.answer2}
                </div>
                <p className="text-emerald-700 font-bold text-center mt-3">¡Correcto! 🎉</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Botón de continuar cuando se completa correctamente */}
        {practiceStep >= 5 && currentEx < exercises.length - 1 && (
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

  const frames = [IntroFrame, GuidedExampleFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
