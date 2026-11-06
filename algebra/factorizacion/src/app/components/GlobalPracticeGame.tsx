import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

type Expression = {
  id: string;
  expr: string;
  correctCase: number;
  solution: string;
  steps: string[];
};

type GlobalPracticeGameProps = {
  onBack: () => void;
};

const expressions: Expression[] = [
  {
    id: '1',
    expr: '5x + 15',
    correctCase: 1,
    solution: '5(x + 3)',
    steps: ['Factor común: 5', 'Dividir: 5x÷5 = x, 15÷5 = 3', 'Resultado: 5(x + 3)'],
  },
  {
    id: '2',
    expr: 'x² - 36',
    correctCase: 2,
    solution: '(x+6)(x-6)',
    steps: ['Dos cuadrados perfectos: x² y 36', 'Raíces: x y 6', 'a²-b² = (a+b)(a-b)'],
  },
  {
    id: '3',
    expr: 'x² + 8x + 16',
    correctCase: 3,
    solution: '(x+4)²',
    steps: ['Raíces: x y 4', 'Verificar: 2(x)(4) = 8x ✓', 'Es TCP: (x+4)²'],
  },
  {
    id: '4',
    expr: 'x² + 7x + 10',
    correctCase: 4,
    solution: '(x+2)(x+5)',
    steps: ['Buscar: m×n=10, m+n=7', 'Números: 2 y 5', '(x+2)(x+5)'],
  },
  {
    id: '5',
    expr: '2x² + 5x + 3',
    correctCase: 5,
    solution: '(x+1)(2x+3)',
    steps: ['a×c = 2×3 = 6', 'Números: 2 y 3 (2×3=6, 2+3=5)', 'Agrupar y factorizar'],
  },
  {
    id: '6',
    expr: 'x³ + 27',
    correctCase: 6,
    solution: '(x+3)(x²-3x+9)',
    steps: ['Raíces cúbicas: x y 3', 'Suma de cubos', 'Patrón: (+)(- + +)'],
  },
  {
    id: '7',
    expr: '3a² + 6a',
    correctCase: 1,
    solution: '3a(a + 2)',
    steps: ['Factor común: 3a', 'Dividir cada término', 'Resultado: 3a(a+2)'],
  },
  {
    id: '8',
    expr: '4x² - 25',
    correctCase: 2,
    solution: '(2x+5)(2x-5)',
    steps: ['Cuadrados: (2x)² y 5²', 'Diferencia de cuadrados', '(2x+5)(2x-5)'],
  },
  {
    id: '9',
    expr: '9x² - 12x + 4',
    correctCase: 3,
    solution: '(3x-2)²',
    steps: ['Raíces: 3x y 2', 'Verificar: 2(3x)(2) = 12x ✓', 'TCP: (3x-2)²'],
  },
  {
    id: '10',
    expr: 'x² - 3x - 10',
    correctCase: 4,
    solution: '(x-5)(x+2)',
    steps: ['Buscar: m×n=-10, m+n=-3', 'Números: -5 y 2', '(x-5)(x+2)'],
  },
  {
    id: '11',
    expr: '3x² + 10x + 8',
    correctCase: 5,
    solution: '(x+2)(3x+4)',
    steps: ['a×c = 24', 'Números: 6 y 4', 'Factorizar por agrupación'],
  },
  {
    id: '12',
    expr: 'a³ - 8',
    correctCase: 6,
    solution: '(a-2)(a²+2a+4)',
    steps: ['Raíces cúbicas: a y 2', 'Diferencia de cubos', 'Patrón: (-)(+ + +)'],
  },
];

const caseNames = [
  '',
  'Factor común',
  'Diferencia de cuadrados',
  'Trinomio cuadrado perfecto',
  'Trinomio x²+bx+c',
  'Trinomio ax²+bx+c',
  'Suma/Diferencia de cubos',
];

export default function GlobalPracticeGame({ onBack }: GlobalPracticeGameProps) {
  const [placements, setPlacements] = useState<Record<string, number>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedExpr, setSelectedExpr] = useState<Expression | null>(null);
  const [showAnswersTimer, setShowAnswersTimer] = useState<number | null>(null);

  const handleDrop = (exprId: string, caseNum: number) => {
    setPlacements({ ...placements, [exprId]: caseNum });
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    const timer = setTimeout(() => {
      setShowAnswers(false);
    }, 3000);
    setShowAnswersTimer(timer as unknown as number);
  };

  const getExprById = (id: string) => expressions.find(e => e.id === id);

  const unplacedExpressions = expressions.filter(expr => !placements[expr.id]);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105"
          >
            <ArrowLeft className="w-6 h-6 text-[#33291C]" />
          </button>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#33291C]">
              Juego de Práctica Global
            </h2>
            <p className="text-lg text-[#8C7F63] mt-1">
              Arrastra cada problema a su caso correspondiente
            </p>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map((caseNum) => {
            const placedInCase = Object.entries(placements)
              .filter(([_, num]) => num === caseNum)
              .map(([id]) => id);

            return (
              <motion.div
                key={caseNum}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: caseNum * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-4 min-h-[200px]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white font-bold">
                    {caseNum}
                  </div>
                  <h3 className="font-bold text-[#33291C]">{caseNames[caseNum]}</h3>
                </div>

                <div className="space-y-2">
                  {placedInCase.map((exprId) => {
                    const expr = getExprById(exprId);
                    if (!expr) return null;

                    const isCorrect = expr.correctCase === caseNum;

                    return (
                      <motion.div
                        key={exprId}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-3 rounded-xl cursor-pointer transition-all ${
                          showAnswers
                            ? isCorrect
                              ? 'bg-green-100 border-2 border-green-500'
                              : 'bg-red-100 border-2 border-red-500'
                            : 'bg-yellow-100 hover:bg-yellow-200'
                        }`}
                        onClick={() => setSelectedExpr(expr)}
                      >
                        <p className="font-mono font-bold text-center">{expr.expr}</p>
                        {showAnswers && !isCorrect && (
                          <p className="text-xs text-red-600 text-center mt-1">
                            → Caso {expr.correctCase}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}

                  {placedInCase.length === 0 && (
                    <p className="text-[#C9BBA0] text-center py-6 text-sm">
                      Arrastra aquí las expresiones
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unplaced Expressions */}
        {unplacedExpressions.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Expresiones para clasificar:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {unplacedExpressions.map((expr) => (
                <div key={expr.id} className="space-y-2">
                  <div className="bg-yellow-200 p-3 rounded-xl text-center font-mono font-bold cursor-pointer hover:bg-yellow-300 transition-colors">
                    {expr.expr}
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[1, 2, 3].map(num => (
                      <button
                        key={num}
                        onClick={() => handleDrop(expr.id, num)}
                        className="text-xs bg-blue-500 hover:bg-blue-600 text-white rounded py-1 transition-colors"
                      >
                        {num}
                      </button>
                    ))}
                    {[4, 5, 6].map(num => (
                      <button
                        key={num}
                        onClick={() => handleDrop(expr.id, num)}
                        className="text-xs bg-purple-500 hover:bg-purple-600 text-white rounded py-1 transition-colors"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show Answers Button */}
        <div className="flex gap-4">
          <button
            onClick={handleShowAnswers}
            disabled={showAnswers}
            className={`flex-1 flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-2xl shadow-lg transition-all ${
              showAnswers
                ? 'bg-[#C9BBA0] cursor-not-allowed'
                : 'bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white'
            }`}
          >
            {showAnswers ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            {showAnswers ? 'Las respuestas se ocultarán pronto...' : 'Mostrar respuestas (3s)'}
          </button>

          {Object.keys(placements).length > 0 && (
            <button
              onClick={() => setPlacements({})}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all"
            >
              Reiniciar
            </button>
          )}
        </div>

        {/* Solution Modal */}
        <Dialog.Root open={!!selectedExpr} onOpenChange={(open) => !open && setSelectedExpr(null)}>
          <AnimatePresence>
            {selectedExpr && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50"
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full mx-4 z-50"
                  >
                    <Dialog.Title className="text-2xl font-bold text-[#33291C] mb-4">
                      Solución paso a paso
                    </Dialog.Title>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                        <p className="text-center text-3xl font-bold mb-4">{selectedExpr.expr}</p>
                        <p className="text-center text-sm text-[#8C7F63] mb-2">
                          Caso {selectedExpr.correctCase}: {caseNames[selectedExpr.correctCase]}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {selectedExpr.steps.map((step, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl"
                          >
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                              {idx + 1}
                            </div>
                            <p className="pt-1">{step}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                        <p className="text-center text-sm text-[#8C7F63] mb-2">Resultado final:</p>
                        <p className="text-center text-2xl font-bold text-green-700">
                          {selectedExpr.solution}
                        </p>
                      </div>

                      <Dialog.Close asChild>
                        <button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
                          Cerrar
                        </button>
                      </Dialog.Close>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </div>
  );
}
