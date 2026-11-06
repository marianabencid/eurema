import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HomeScreen from './components/HomeScreen';
import CaseModule from './components/CaseModule';
import GlobalPracticeGame from './components/GlobalPracticeGame';

export type FactorizationCase = {
  id: number;
  title: string;
  shortTip: string;
  formula?: string;
};

export const factorizationCases: FactorizationCase[] = [
  {
    id: 1,
    title: 'Factor común',
    shortTip: 'Busca el factor que se repite en todos los términos.',
  },
  {
    id: 1.1,
    title: 'Factor común por agrupación',
    shortTip: 'Cuando tienes 4 o 6 términos, agrupa los que tienen factor común.',
  },
  {
    id: 2,
    title: 'Diferencia de cuadrados',
    shortTip: 'Sólo tiene dos términos y ambos están al cuadrado. Siempre tiene un signo negativo en el medio.',
    formula: 'a² - b² = (a+b)(a-b)',
  },
  {
    id: 3,
    title: 'Trinomio cuadrado perfecto',
    shortTip: 'Es un trinomio. Cuando multiplicas x2 las raíces de los extremos, te da igual al término del medio.',
    formula: 'a² + 2ab + b² = (a+b)²',
  },
  {
    id: 4,
    title: 'Trinomio de la forma x² + bx + c',
    shortTip: 'Es un trinomio que no es cuadrado perfecto. Se distingue del caso 5 porque empieza con letra y no con número.',
  },
  {
    id: 5,
    title: 'Trinomio de la forma ax² + bx + c',
    shortTip: 'Es un trinomio que no es cuadrado perfecto. Se distingue del caso 4 porque empieza con número y no con letra.',
  },
  {
    id: 6,
    title: 'Suma y diferencia de cubos',
    shortTip: 'Sólo tiene dos términos y ambos están al cubo.',
    formula: 'a³ ± b³',
  },
];

export default function App() {
  const [currentCase, setCurrentCase] = useState<number | null>(null);
  const [showGlobalGame, setShowGlobalGame] = useState(false);

  const getCaseData = (caseId: number) => {
    return factorizationCases.find(c => c.id === caseId);
  };

  return (
    <div className="min-h-screen bg-[#FDF6E8] max-w-[560px] mx-auto">
      <AnimatePresence mode="wait">
        {showGlobalGame ? (
          <motion.div
            key="global-game"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <GlobalPracticeGame onBack={() => setShowGlobalGame(false)} />
          </motion.div>
        ) : currentCase === null ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HomeScreen
              cases={factorizationCases}
              onSelectCase={setCurrentCase}
              onOpenGlobalGame={() => setShowGlobalGame(true)}
            />
          </motion.div>
        ) : (
          <motion.div
            key={`case-${currentCase}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CaseModule
              caseData={getCaseData(currentCase)!}
              onBack={() => setCurrentCase(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
