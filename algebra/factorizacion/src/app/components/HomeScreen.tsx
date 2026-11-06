import { motion } from 'motion/react';
import { Info, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { FactorizationCase } from '../App';
import { EuremaBadge, EuremaFooterMark } from './Eurema';
import { staggerItem, hoverLift, tapAnticipation, SPRING } from '../motion';

type HomeScreenProps = {
  cases: FactorizationCase[];
  onSelectCase: (caseId: number) => void;
  onOpenGlobalGame: () => void;
};

export default function HomeScreen({ cases, onSelectCase, onOpenGlobalGame }: HomeScreenProps) {
  const [hoveredTip, setHoveredTip] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: '#FDF6E8' }}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <EuremaBadge />
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#1F8585' }}
            className="mb-2"
          >
            Módulo · Álgebra
          </div>
          <h1
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: '#C15A1C' }}
            className="text-3xl mb-3"
          >
            Los Casos de Factorización
          </h1>
          <p style={{ color: '#8C7F63' }} className="text-base">
            Aprende a reconocer y resolver cada caso, paso a paso
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid gap-3.5">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              variants={staggerItem(index)}
              initial="hidden"
              animate="show"
              {...hoverLift}
              className="relative"
            >
              <div
                className="rounded-2xl p-5 flex items-center gap-4 relative group transition-shadow"
                style={{ background: '#fff', boxShadow: '0 2px 18px rgba(51,41,28,0.08)' }}
              >
                {/* Case Number — rombo, como el isotipo de marca */}
                <div className="relative z-10 flex-shrink-0 w-11 h-11 flex items-center justify-center">
                  <div
                    className="absolute inset-[7px]"
                    style={{ background: '#F2762E', transform: 'rotate(45deg)' }}
                  ></div>
                  <span
                    className="relative text-white text-base"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                  >
                    {caseItem.id}
                  </span>
                </div>

                {/* Case Title */}
                <div className="relative z-10 flex-1">
                  <h3
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: '#33291C' }}
                    className="text-base"
                  >
                    {caseItem.title}
                  </h3>
                </div>

                {/* Info Button */}
                <div className="relative flex-shrink-0">
                  <button
                    onMouseEnter={() => setHoveredTip(caseItem.id)}
                    onMouseLeave={() => setHoveredTip(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHoveredTip(hoveredTip === caseItem.id ? null : caseItem.id);
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors relative z-10"
                    style={{ background: '#DFF5F5' }}
                  >
                    <Info className="w-4.5 h-4.5" style={{ color: '#1F8585' }} />
                  </button>

                  {hoveredTip === caseItem.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-0 top-12 w-72 p-4 rounded-2xl z-[9999]"
                      style={{ position: 'absolute', background: '#33291C', boxShadow: '0 8px 30px rgba(51,41,28,0.25)' }}
                    >
                      <div className="absolute -top-2 right-4 w-4 h-4 rotate-45 z-[9999]" style={{ background: '#33291C' }}></div>
                      <p className="text-sm leading-relaxed relative z-[9999]" style={{ color: '#FDF6E8' }}>
                        {caseItem.shortTip}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Arrow Button */}
                <motion.button
                  onClick={() => onSelectCase(caseItem.id)}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.88 }}
                  transition={SPRING.snappy}
                  className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: '#C15A1C' }}
                >
                  <ChevronRight className="w-5.5 h-5.5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice Game Button */}
        <motion.div
          variants={staggerItem(cases.length)}
          initial="hidden"
          animate="show"
          className="mt-7"
        >
          <motion.button
            onClick={onOpenGlobalGame}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING.snappy}
            className="w-full text-white py-3.5 px-6 rounded-2xl text-base"
            style={{
              background: 'linear-gradient(90deg,#F2762E,#F2CA50)',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              boxShadow: '0 4px 20px rgba(242,118,46,0.25)',
            }}
          >
            🎮 Juego de Práctica Global
          </motion.button>
        </motion.div>

        <EuremaFooterMark />
      </div>
    </div>
  );
}
