import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import type { FactorizationCase } from '../App';
import { EuremaBadge, EuremaFooterMark } from './Eurema';
import FactorComunModule from './cases/FactorComunModule';
import FactorComunAgrupacionModule from './cases/FactorComunAgrupacionModule';
import DiferenciaCuadradosModule from './cases/DiferenciaCuadradosModule';
import TrinomioCuadradoPerfectoModule from './cases/TrinomioCuadradoPerfectoModule';
import TrinomioSimpleModule from './cases/TrinomioSimpleModule';
import TrinomioCompuestoModule from './cases/TrinomioCompuestoModule';
import CubosModule from './cases/CubosModule';

type CaseModuleProps = {
  caseData: FactorizationCase;
  onBack: () => void;
};

export default function CaseModule({ caseData, onBack }: CaseModuleProps) {
  const [currentFrame, setCurrentFrame] = useState(0);

  const renderCaseContent = () => {
    const props = {
      currentFrame,
      setCurrentFrame,
      caseData,
    };

    switch (caseData.id) {
      case 1:
        return <FactorComunModule {...props} />;
      case 1.1:
        return <FactorComunAgrupacionModule {...props} />;
      case 2:
        return <DiferenciaCuadradosModule {...props} />;
      case 3:
        return <TrinomioCuadradoPerfectoModule {...props} />;
      case 4:
        return <TrinomioSimpleModule {...props} />;
      case 5:
        return <TrinomioCompuestoModule {...props} />;
      case 6:
        return <CubosModule {...props} />;
      default:
        return <div>Módulo en construcción</div>;
    }
  };

  return (
    <div className="min-h-screen px-4 py-6" style={{ background: '#FDF6E8' }}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5"
        >
          <EuremaBadge />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center gap-4 mb-7"
        >
          <motion.button
            onClick={onBack}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1"
            style={{ background: 'none', border: 'none', color: '#8C7F63', fontFamily: "'Nunito Sans', sans-serif", fontSize: 14, cursor: 'pointer' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-7"
        >
          <h2
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: '#C15A1C' }}
            className="text-2xl"
          >
            {caseData.title}
          </h2>
          {caseData.formula && (
            <p className="text-base mt-1" style={{ color: '#1F8585', fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
              {caseData.formula}
            </p>
          )}
        </motion.div>

        {/* Module Content */}
        <AnimatePresence mode="wait">
          {renderCaseContent()}
        </AnimatePresence>

        <EuremaFooterMark />
      </div>
    </div>
  );
}
