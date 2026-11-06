import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { FactorizationCase } from '../../App';
import { EuremaBurst } from '../Eurema';
import { discoverCard, SPRING, correctPop } from '../../motion';

type FactorComunModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

type Part = { t: string; common: boolean };

// El término clickeable vive DENTRO del enunciado (no es un botón aparte).
// Pulsa mientras no se ha tocado; una vez tocado, queda marcado en naranja.
function EquationTerm({
  label,
  revealed,
  onReveal,
}: {
  label: string;
  revealed: boolean;
  onReveal: () => void;
}) {
  return (
    <motion.span
      onClick={revealed ? undefined : onReveal}
      className={revealed ? '' : 'eurema-pulse'}
      whileHover={revealed ? undefined : { scale: 1.15 }}
      whileTap={revealed ? undefined : { scale: 0.88 }}
      transition={SPRING.snappy}
      style={{
        cursor: revealed ? 'default' : 'pointer',
        color: revealed ? '#F2762E' : '#33291C',
        display: 'inline-block',
      }}
    >
      {label}
    </motion.span>
  );
}

// Tarjeta de descomposición — aparece debajo del enunciado, una por término tocado.
function DecompCard({ label, parts }: { label: string; parts: Part[] }) {
  return (
    <motion.div
      variants={discoverCard}
      initial="hidden"
      animate="show"
      className="px-4 py-2.5 rounded-xl w-full"
      style={{ background: '#fff', boxShadow: '0 1px 8px rgba(51,41,28,.08)' }}
    >
      <p className="text-center text-xs mb-1" style={{ fontWeight: 800, color: '#8C7F63' }}>{label}</p>
      <p className="text-center text-sm">
        ={' '}
        {parts.map((p, i) => (
          <span key={i}>
            {i > 0 && ' · '}
            <span style={{ color: p.common ? '#F2762E' : '#33291C', fontWeight: p.common ? 800 : 400 }}>
              {p.t}
            </span>
          </span>
        ))}
      </p>
    </motion.div>
  );
}

export default function FactorComunModule({
  currentFrame,
  setCurrentFrame,
}: FactorComunModuleProps) {
  const [step, setStep] = useState(0);

  // ---- Intro: ejemplo interactivo ----
  const [introRevealed, setIntroRevealed] = useState({ a: false, b: false });
  const introDone = introRevealed.a && introRevealed.b;
  const introParts = {
    a: [{ t: '3', common: true }, { t: '2', common: false }, { t: 'x', common: true }],
    b: [{ t: '3', common: true }, { t: '3', common: false }, { t: 'x', common: true }, { t: 'x', common: false }],
  };

  const IntroFrame = () => (
    <motion.div
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="rounded-3xl p-6"
      style={{ background: '#fff', boxShadow: '0 4px 24px rgba(51,41,28,.08)' }}
    >
      <div className="space-y-4">
        <p className="text-base" style={{ color: '#33291C' }}>
          Cuando todos los términos de una expresión comparten un factor, podemos "sacarlo" y simplificar.
        </p>

        <p className="text-base" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: '#C15A1C' }}>
          Empecemos por un ejemplo:
        </p>

        <div className="rounded-2xl p-4" style={{ background: '#FDF6E8', border: '1.5px solid rgba(51,41,28,.12)' }}>
          <div
            className="grid items-start gap-x-2 gap-y-3 mb-1"
            style={{ gridTemplateColumns: '1fr auto 1fr' }}
          >
            <div className="text-center" style={{ gridColumn: 1, gridRow: 1 }}>
              <p className="text-xl" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                <EquationTerm label="6x" revealed={introRevealed.a} onReveal={() => setIntroRevealed(r => ({ ...r, a: true }))} />
              </p>
            </div>
            <div className="flex items-center text-xl" style={{ gridColumn: 2, gridRow: 1, fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
              +
            </div>
            <div className="text-center" style={{ gridColumn: 3, gridRow: 1 }}>
              <p className="text-xl" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                <EquationTerm label="9x²" revealed={introRevealed.b} onReveal={() => setIntroRevealed(r => ({ ...r, b: true }))} />
              </p>
            </div>
            <div style={{ gridColumn: 1, gridRow: 2 }}>
              <AnimatePresence>{introRevealed.a && <DecompCard key="a" label="6x" parts={introParts.a} />}</AnimatePresence>
            </div>
            <div style={{ gridColumn: 3, gridRow: 2 }}>
              <AnimatePresence>{introRevealed.b && <DecompCard key="b" label="9x²" parts={introParts.b} />}</AnimatePresence>
            </div>
          </div>

          {!introDone && (
            <p className="text-center text-sm mb-1" style={{ color: '#8C7F63' }}>
              Haz click en cada término para descomponerlo
            </p>
          )}

          <AnimatePresence>
            {introDone && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-4"
              >
                <p className="text-base mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: '#C15A1C' }}>
                  Factor común:
                </p>
                <div
                  className="text-white px-6 py-3 rounded-xl text-xl inline-block relative"
                  style={{ background: '#F2762E', fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
                >
                  3x
                  <EuremaBurst />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setCurrentFrame(1)}
          className="w-full text-white py-3 px-6 rounded-2xl transition-all"
          style={{ background: '#F2762E', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
        >
          Ver paso a paso →
        </button>
      </div>
    </motion.div>
  );

  // ---- Paso a paso ----
  const [s1Revealed, setS1Revealed] = useState({ a: false, b: false });
  const step1Done = s1Revealed.a && s1Revealed.b;
  const s1Parts = {
    a: [{ t: '2', common: true }, { t: '2', common: true }, { t: '3', common: false }, { t: 'x', common: true }, { t: 'x', common: false }],
    b: [{ t: '2', common: true }, { t: '2', common: true }, { t: '2', common: false }, { t: 'x', common: true }],
  };

  const StepByStepFrame = () => {
    return (
      <motion.div
        key="steps"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="rounded-3xl p-6"
        style={{ background: '#fff', boxShadow: '0 4px 24px rgba(51,41,28,.08)' }}
      >
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: '#C15A1C' }} className="text-xl mb-6">
          Resolvamos este problema:
        </h3>

        <div className="space-y-4 mb-6">
          {/* Paso 1: Identificar el factor común */}
          <div
            className="p-4 rounded-2xl transition-colors"
            style={{
              background: step >= 0 ? '#FDF6E8' : '#F0E2C4',
              border: step >= 0 ? '2px solid #F2CA50' : '2px solid transparent',
              opacity: step >= 0 ? 1 : 0.5,
            }}
          >
            <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }} className="text-base mb-3">
              1. Identificar el factor común
            </h4>

            <div
              className="grid items-start gap-x-2 gap-y-3 mb-1"
              style={{ gridTemplateColumns: '1fr auto 1fr' }}
            >
              <div className="text-center" style={{ gridColumn: 1, gridRow: 1 }}>
                <p className="text-xl" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                  <EquationTerm label="12x²" revealed={s1Revealed.a} onReveal={() => setS1Revealed(r => ({ ...r, a: true }))} />
                </p>
              </div>
              <div className="flex items-center text-xl" style={{ gridColumn: 2, gridRow: 1, fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                +
              </div>
              <div className="text-center" style={{ gridColumn: 3, gridRow: 1 }}>
                <p className="text-xl" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                  <EquationTerm label="8x" revealed={s1Revealed.b} onReveal={() => setS1Revealed(r => ({ ...r, b: true }))} />
                </p>
              </div>
              <div style={{ gridColumn: 1, gridRow: 2 }}>
                <AnimatePresence>{s1Revealed.a && <DecompCard key="a" label="12x²" parts={s1Parts.a} />}</AnimatePresence>
              </div>
              <div style={{ gridColumn: 3, gridRow: 2 }}>
                <AnimatePresence>{s1Revealed.b && <DecompCard key="b" label="8x" parts={s1Parts.b} />}</AnimatePresence>
              </div>
            </div>

            {!step1Done && (
              <p className="text-center text-sm mb-1" style={{ color: '#8C7F63' }}>
                Haz click en cada término para descomponerlo
              </p>
            )}

            <AnimatePresence>
              {step1Done && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <p
                    className="text-sm text-center rounded-xl p-3 mb-3"
                    style={{ background: '#DFF5F5', color: '#1F8585', fontWeight: 600 }}
                  >
                    El factor común es el número más grande en el cual todos los términos se pueden dividir, acompañado de las letras que se repitan, con su menor exponente.
                  </p>
                  <div
                    className="text-sm rounded-xl p-3 mb-3 flex gap-2 items-start"
                    style={{ background: '#FBEFCB', color: '#8A6414', fontWeight: 600 }}
                  >
                    <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>💡</span>
                    <span>
                      Tip: para encontrar el número común puedes preguntarte: ¿estos números están todos en la tabla del{' '}
                      <span style={{ fontWeight: 800 }}>_</span>? El número más grande que puedas usar para llenar el espacio es tu respuesta.
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-center"
                  >
                    <p className="mb-2 text-sm" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: '#C15A1C' }}>
                      Factor común:
                    </p>
                    <div
                      className="text-white px-5 py-2 rounded-xl text-lg inline-block relative"
                      style={{ background: '#F2762E', fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
                    >
                      4x
                      <EuremaBurst />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Paso 2: Dividir cada término */}
          <motion.button
            type="button"
            onClick={() => { if (step1Done && step < 1) setStep(1); }}
            disabled={!step1Done || step >= 1}
            whileHover={step1Done && step < 1 ? { scale: 1.015 } : undefined}
            whileTap={step1Done && step < 1 ? { scale: 0.98 } : undefined}
            transition={SPRING.snappy}
            className="w-full text-left p-4 rounded-2xl"
            style={{
              background: step >= 1 ? '#DFF5F5' : '#F0E2C4',
              border: step >= 1 ? '2px solid #4BBFBF' : '2px solid transparent',
              opacity: step >= 1 ? 1 : (step1Done ? 0.85 : 0.5),
              cursor: step1Done && step < 1 ? 'pointer' : 'default',
            }}
          >
            <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }} className="text-base mb-1">
              2. Dividir cada término entre el factor común
            </h4>
            {step1Done && step < 1 && (
              <p className="text-xs mb-2" style={{ color: '#1F8585' }}>Toca para continuar →</p>
            )}
            {step >= 1 && (
              <div className="flex gap-4 items-center justify-center mb-1 mt-3">
                <div className="flex flex-col items-center">
                  <div className="bg-white px-4 py-2 rounded-t-lg w-24" style={{ borderBottom: '2px solid #33291C' }}>
                    <p className="text-base text-center" style={{ fontWeight: 800 }}>12x²</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-b-lg w-24">
                    <p className="text-base text-center" style={{ color: '#F2762E', fontWeight: 800 }}>4x</p>
                  </div>
                  <p className="mt-1 text-xs" style={{ color: '#8C7F63' }}>=</p>
                  <div className="text-white px-3 py-1 rounded-lg mt-1" style={{ background: '#4BBFBF' }}>
                    <p className="text-base" style={{ fontWeight: 800 }}>3x</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white px-4 py-2 rounded-t-lg w-24" style={{ borderBottom: '2px solid #33291C' }}>
                    <p className="text-base text-center" style={{ fontWeight: 800 }}>8x</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-b-lg w-24">
                    <p className="text-base text-center" style={{ color: '#F2762E', fontWeight: 800 }}>4x</p>
                  </div>
                  <p className="mt-1 text-xs" style={{ color: '#8C7F63' }}>=</p>
                  <div className="text-white px-3 py-1 rounded-lg mt-1" style={{ background: '#4BBFBF' }}>
                    <p className="text-base" style={{ fontWeight: 800 }}>2</p>
                  </div>
                </div>
              </div>
            )}
            {step >= 1 && (
              <p className="text-center text-sm mt-2" style={{ color: '#1F8585', fontWeight: 700 }}>
                Resultados: 3x y 2
              </p>
            )}
          </motion.button>

          {/* Paso 3: Escribir la factorización */}
          <motion.button
            type="button"
            onClick={() => { if (step >= 1 && step < 2) setStep(2); }}
            disabled={step < 1 || step >= 2}
            whileHover={step >= 1 && step < 2 ? { scale: 1.015 } : undefined}
            whileTap={step >= 1 && step < 2 ? { scale: 0.98 } : undefined}
            transition={SPRING.snappy}
            className="w-full text-left p-4 rounded-2xl"
            style={{
              background: step >= 2 ? '#E6F1E0' : '#F0E2C4',
              border: step >= 2 ? '2px solid #578A44' : '2px solid transparent',
              opacity: step >= 2 ? 1 : (step >= 1 ? 0.85 : 0.5),
              cursor: step >= 1 && step < 2 ? 'pointer' : 'default',
            }}
          >
            <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }} className="text-base mb-1">
              3. Escribir la factorización
            </h4>
            {step >= 1 && step < 2 && (
              <p className="text-xs mb-2" style={{ color: '#578A44' }}>Toca para continuar →</p>
            )}
            {step >= 2 && (
              <motion.div initial="initial" animate="animate" variants={correctPop} className="text-center mt-2 relative">
                <p className="text-2xl mb-3" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                  <span style={{ color: '#F2762E' }}>4x</span>
                  <span style={{ color: '#4BBFBF' }}>(3x + 2)</span>
                </p>
                <p className="text-lg" style={{ color: '#578A44', fontWeight: 700 }}>¡Listo!</p>
                <p className="text-xs mt-2" style={{ color: '#8C7F63' }}>
                  El <span style={{ color: '#F2762E', fontWeight: 700 }}>factor común</span> fuera, los{' '}
                  <span style={{ color: '#4BBFBF', fontWeight: 700 }}>términos restantes</span> dentro
                </p>
                <EuremaBurst />
              </motion.div>
            )}
          </motion.button>
        </div>

        {step === 2 && (
          <motion.button
            onClick={() => setCurrentFrame(2)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING.snappy}
            className="w-full text-white py-3 px-6 rounded-2xl"
            style={{ background: '#F2762E', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
          >
            Ir a práctica →
          </motion.button>
        )}
      </motion.div>
    );
  };

  // ---- Práctica ----
  const [draggedItems, setDraggedItems] = useState<Record<string, { hasCommonFactor: boolean; userChoice: boolean }>>({});

  const PracticeFrame = () => {
    const expressions = [
      { text: '5x + 10', hasCommonFactor: true },
      { text: 'x² + 2x', hasCommonFactor: true },
      { text: 'x² + y²', hasCommonFactor: false },
      { text: '6a² + 9a', hasCommonFactor: true },
      { text: '3x + 5y', hasCommonFactor: false },
      { text: '8x³ + 4x²', hasCommonFactor: true },
    ];

    const handleDrop = (expr: string, hasCommonFactor: boolean, userChoice: boolean) => {
      setDraggedItems({
        ...draggedItems,
        [expr]: { hasCommonFactor, userChoice }
      });
    };

    return (
      <motion.div
        key="practice"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="rounded-3xl p-6"
        style={{ background: '#fff', boxShadow: '0 4px 24px rgba(51,41,28,.08)' }}
      >
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: '#C15A1C' }} className="text-2xl mb-4">
          Práctica
        </h3>

        <p className="text-base mb-6" style={{ color: '#33291C' }}>
          Clasifica cada expresión según tenga o no factor común:
        </p>

        <div className="space-y-4 mb-6">
          <div className="rounded-2xl p-4" style={{ background: '#E6F1E0', border: '2px solid #578A44' }}>
            <h4 className="text-base mb-3 text-center" style={{ fontWeight: 800, color: '#578A44' }}>
              ✓ Tiene factor común
            </h4>
            <div className="space-y-2 min-h-[120px]">
              {Object.entries(draggedItems)
                .filter(([_, data]) => typeof data === 'object' && data.userChoice === true)
                .map(([expr, data]) => {
                  const isCorrect = typeof data === 'object' && data.hasCommonFactor === true;
                  return (
                    <div
                      key={expr}
                      className="p-3 rounded-xl text-center text-sm"
                      style={{
                        background: isCorrect ? '#fff' : '#FBE2E0',
                        border: isCorrect ? 'none' : '2px solid #D93A3A',
                        boxShadow: isCorrect ? '0 1px 6px rgba(51,41,28,.08)' : 'none',
                        fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                      }}
                    >
                      {expr}
                      {!isCorrect && <span style={{ color: '#D93A3A' }} className="ml-2">✗</span>}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="rounded-2xl p-4" style={{ background: '#FBE2E0', border: '2px solid #D93A3A' }}>
            <h4 className="text-base mb-3 text-center" style={{ fontWeight: 800, color: '#D93A3A' }}>
              ✗ No tiene factor común
            </h4>
            <div className="space-y-2 min-h-[120px]">
              {Object.entries(draggedItems)
                .filter(([_, data]) => typeof data === 'object' && data.userChoice === false)
                .map(([expr, data]) => {
                  const isCorrect = typeof data === 'object' && data.hasCommonFactor === false;
                  return (
                    <div
                      key={expr}
                      className="p-3 rounded-xl text-center text-sm"
                      style={{
                        background: isCorrect ? '#fff' : '#E6F1E0',
                        border: isCorrect ? 'none' : '2px solid #578A44',
                        boxShadow: isCorrect ? '0 1px 6px rgba(51,41,28,.08)' : 'none',
                        fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                      }}
                    >
                      {expr}
                      {!isCorrect && <span style={{ color: '#578A44' }} className="ml-2">✗</span>}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-sm" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: '#33291C' }}>
            Expresiones para clasificar:
          </p>
          <div className="grid grid-cols-1 gap-3">
            {expressions
              .filter((expr) => !draggedItems[expr.text])
              .map((expr) => (
                <div key={expr.text} className="flex gap-2">
                  <div
                    className="flex-1 p-3 rounded-xl text-center text-base"
                    style={{ background: '#FBEFCB', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                  >
                    {expr.text}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDrop(expr.text, expr.hasCommonFactor, true)}
                      className="px-4 py-2 rounded-lg text-white text-sm transition-colors"
                      style={{ background: '#578A44', fontWeight: 700 }}
                    >
                      Sí
                    </button>
                    <button
                      onClick={() => handleDrop(expr.text, expr.hasCommonFactor, false)}
                      className="px-4 py-2 rounded-lg text-white text-sm transition-colors"
                      style={{ background: '#D93A3A', fontWeight: 700 }}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <button
          onClick={() => setCurrentFrame(0)}
          className="w-full text-white py-3 px-6 rounded-2xl transition-all"
          style={{ background: '#C15A1C', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
        >
          ← Volver al inicio
        </button>
      </motion.div>
    );
  };

  const frames = [IntroFrame, StepByStepFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
