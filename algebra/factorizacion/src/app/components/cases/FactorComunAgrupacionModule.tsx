import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { FactorizationCase } from '../../App';
import { EuremaBurst } from '../Eurema';
import { SPRING, incorrectShake, correctPop, discoverCard } from '../../motion';

type FactorComunAgrupacionModuleProps = {
  currentFrame: number;
  setCurrentFrame: (frame: number) => void;
  caseData: FactorizationCase;
};

const NARANJA = '#F2762E';
const TURQUESA = '#4BBFBF';

export default function FactorComunAgrupacionModule({
  currentFrame,
  setCurrentFrame,
}: FactorComunAgrupacionModuleProps) {
  const [introStarted, setIntroStarted] = useState(false);
  const [step, setStep] = useState(0);

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
        <p className="text-sm text-center" style={{ color: '#33291C' }}>
          Cuando tienes 4 o 6 términos, agrupa los que tienen factor común, saca el factor común de cada grupo y luego un factor común polinomio.
        </p>

        <div className="rounded-2xl p-4" style={{ background: '#FDF6E8', border: '1.5px solid rgba(51,41,28,.12)' }}>
          <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }} className="text-base mb-4 text-center">
            Ejemplo: ax + bx + ay + by
          </h4>

          {!introStarted ? (
            <motion.button
              onClick={() => setIntroStarted(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={SPRING.snappy}
              className="w-full text-white py-3 px-6 rounded-2xl"
              style={{ background: NARANJA, fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
            >
              ¡Empecemos!
            </motion.button>
          ) : (
            <div className="space-y-3">
              {step >= 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-3"
                  style={{ background: '#DFF5F5', border: '2px solid #4BBFBF' }}
                >
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }} className="text-sm mb-2">
                    Paso 1: Agrupar términos con factor común
                  </p>
                  <div className="text-center">
                    <p className="text-lg" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                      <span style={{ color: '#33291C' }}>(a</span>
                      <span style={{ color: NARANJA }}>x</span>
                      <span style={{ color: '#33291C' }}> + b</span>
                      <span style={{ color: NARANJA }}>x</span>
                      <span style={{ color: '#33291C' }}>) + (a</span>
                      <span style={{ color: TURQUESA }}>y</span>
                      <span style={{ color: '#33291C' }}> + b</span>
                      <span style={{ color: TURQUESA }}>y</span>
                      <span style={{ color: '#33291C' }}>)</span>
                    </p>
                  </div>
                </motion.div>
              )}

              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-3"
                  style={{ background: '#E6F1E0', border: '2px solid #578A44' }}
                >
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }} className="text-sm mb-2">
                    Paso 2: Sacar factor común de cada grupo
                  </p>
                  <div className="text-center">
                    <p className="text-base" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}>
                      <span style={{ color: NARANJA }}>x</span>
                      <span style={{ color: '#33291C' }}>(a + b) + </span>
                      <span style={{ color: TURQUESA }}>y</span>
                      <span style={{ color: '#33291C' }}>(a + b)</span>
                    </p>
                  </div>
                </motion.div>
              )}

              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-3"
                  style={{ background: '#FBEFCB', border: '2px solid #F2CA50' }}
                >
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }} className="text-sm mb-2">
                    Paso 3: Sacar el factor común polinomio
                  </p>
                  <div className="text-center">
                    <p className="text-sm mb-2" style={{ color: '#8C7F63' }}>El paréntesis (a + b) se repite, y se unen los términos que quedaron afuera:</p>
                    <div
                      className="text-white px-4 py-2 rounded-xl inline-block text-lg"
                      style={{ background: '#578A44', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                    >
                      (a + b)(x + y)
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-3 pt-1">
                {step < 2 && (
                  <motion.button
                    onClick={() => setStep(step + 1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    transition={SPRING.snappy}
                    className="flex-1 text-white py-3 px-6 rounded-2xl"
                    style={{ background: NARANJA, fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                  >
                    Siguiente paso →
                  </motion.button>
                )}
                {step === 2 && (
                  <motion.button
                    onClick={() => setCurrentFrame(1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    transition={SPRING.snappy}
                    className="flex-1 text-white py-3 px-6 rounded-2xl"
                    style={{ background: '#578A44', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                  >
                    Practicar →
                  </motion.button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  // ============================================================
  // Práctica interactiva — 5 problemas. Cada uno tiene dos agrupaciones
  // válidas posibles (verificadas a mano + con script antes de codificar).
  // "tap": el estudiante toca el paréntesis y el factor aparece solo.
  // "type": el estudiante debe ESCRIBIR el factor común de cada paréntesis.
  // ============================================================
  type TermId = 't1' | 't2' | 't3' | 't4';
  type PairInfo = { shared: string; rem: [string, string] };
  type PracticeProblem = {
    terms: { id: TermId; label: string }[];
    pairInfo: Record<string, PairInfo>;
    mode: 'tap' | 'type';
  };

  const PRACTICE_PROBLEMS: PracticeProblem[] = [
    {
      mode: 'tap',
      terms: [{ id: 't1', label: 'ax' }, { id: 't2', label: '2x' }, { id: 't3', label: '3a' }, { id: 't4', label: '6' }],
      pairInfo: {
        't1,t2': { shared: 'x', rem: ['a', '2'] },
        't3,t4': { shared: '3', rem: ['a', '2'] },
        't1,t3': { shared: 'a', rem: ['x', '3'] },
        't2,t4': { shared: '2', rem: ['x', '3'] },
      },
    },
    {
      mode: 'type',
      terms: [{ id: 't1', label: 'xy' }, { id: 't2', label: '3x' }, { id: 't3', label: '5y' }, { id: 't4', label: '15' }],
      pairInfo: {
        't1,t2': { shared: 'x', rem: ['y', '3'] },
        't3,t4': { shared: '5', rem: ['y', '3'] },
        't1,t3': { shared: 'y', rem: ['x', '5'] },
        't2,t4': { shared: '3', rem: ['x', '5'] },
      },
    },
    {
      mode: 'type',
      terms: [{ id: 't1', label: 'ab' }, { id: 't2', label: '7a' }, { id: 't3', label: '4b' }, { id: 't4', label: '28' }],
      pairInfo: {
        't1,t2': { shared: 'a', rem: ['b', '7'] },
        't3,t4': { shared: '4', rem: ['b', '7'] },
        't1,t3': { shared: 'b', rem: ['a', '4'] },
        't2,t4': { shared: '7', rem: ['a', '4'] },
      },
    },
    {
      mode: 'type',
      terms: [{ id: 't1', label: 'mn' }, { id: 't2', label: '6m' }, { id: 't3', label: '3n' }, { id: 't4', label: '18' }],
      pairInfo: {
        't1,t2': { shared: 'm', rem: ['n', '6'] },
        't3,t4': { shared: '3', rem: ['n', '6'] },
        't1,t3': { shared: 'n', rem: ['m', '3'] },
        't2,t4': { shared: '6', rem: ['m', '3'] },
      },
    },
    {
      mode: 'type',
      terms: [{ id: 't1', label: 'cd' }, { id: 't2', label: '2c' }, { id: 't3', label: '5d' }, { id: 't4', label: '10' }],
      pairInfo: {
        't1,t2': { shared: 'c', rem: ['d', '2'] },
        't3,t4': { shared: '5', rem: ['d', '2'] },
        't1,t3': { shared: 'd', rem: ['c', '5'] },
        't2,t4': { shared: '2', rem: ['c', '5'] },
      },
    },
  ];

  const pairKey = (ids: TermId[]) => [...ids].sort().join(',');
  const normalize = (s: string) => s.replace(/\s/g, '').toLowerCase();

  function PracticeProblemView({
    problem,
    onSolved,
    isLast,
  }: {
    problem: PracticeProblem;
    onSolved: () => void;
    isLast: boolean;
  }) {
    const { terms: TERMS, pairInfo: PAIR_INFO, mode } = problem;
    const labelOf = (id: TermId) => TERMS.find(t => t.id === id)!.label;

    const [placement, setPlacement] = useState<Record<TermId, 'left' | 'right' | null>>({
      t1: null, t2: null, t3: null, t4: null,
    });
    const [leftError, setLeftError] = useState(false);
    const [rightError, setRightError] = useState(false);

    // Modo "tap"
    const [extracted1, setExtracted1] = useState(false);
    const [extracted2, setExtracted2] = useState(false);

    // Modo "type"
    const [factorInput1, setFactorInput1] = useState('');
    const [factorInput2, setFactorInput2] = useState('');
    const [factorChecked, setFactorChecked] = useState(false);
    const [factorsDone, setFactorsDone] = useState(false);

    const [userAnswer, setUserAnswer] = useState('');
    const [answerChecked, setAnswerChecked] = useState(false);
    const [solved, setSolved] = useState(false);

    const leftIds = TERMS.map(t => t.id).filter(id => placement[id] === 'left');
    const rightIds = TERMS.map(t => t.id).filter(id => placement[id] === 'right');

    const handleClick = (id: TermId) => {
      if (placement[id] || leftError || rightError) return;
      let target: 'left' | 'right' | null = null;
      if (leftIds.length < 2) target = 'left';
      else if (rightIds.length < 2) target = 'right';
      else return;

      setPlacement(p => ({ ...p, [id]: target }));

      const groupIds = (target === 'left' ? leftIds : rightIds).concat([id]);
      if (groupIds.length === 2) {
        const key = pairKey(groupIds);
        if (!PAIR_INFO[key]) {
          if (target === 'left') setLeftError(true); else setRightError(true);
          setTimeout(() => {
            setPlacement(p => {
              const np = { ...p };
              groupIds.forEach(gid => { np[gid] = null; });
              return np;
            });
            if (target === 'left') setLeftError(false); else setRightError(false);
          }, 1400);
        }
      }
    };

    const leftComplete = leftIds.length === 2 && !leftError;
    const rightComplete = rightIds.length === 2 && !rightError;
    const bothGrouped = leftComplete && rightComplete;

    const info1 = leftComplete ? PAIR_INFO[pairKey(leftIds)] : null;
    const info2 = rightComplete ? PAIR_INFO[pairKey(rightIds)] : null;

    const bothExtracted = mode === 'tap' ? (extracted1 && extracted2) : factorsDone;

    const verifyFactors = () => {
      setFactorChecked(true);
      const ok1 = normalize(factorInput1) === normalize(info1!.shared);
      const ok2 = normalize(factorInput2) === normalize(info2!.shared);
      if (ok1 && ok2) setFactorsDone(true);
    };

    const correctAnswer = info1 && info2 ? `(${info1.rem.join('+')})(${info1.shared}+${info2.shared})` : '';
    const reversedAnswer = info1 && info2 ? `(${info1.shared}+${info2.shared})(${info1.rem.join('+')})` : '';
    const isCorrect = answerChecked && (normalize(userAnswer) === normalize(correctAnswer) || normalize(userAnswer) === normalize(reversedAnswer));

    const slotLabel = (ids: TermId[], idx: number) => (ids[idx] ? labelOf(ids[idx]) : '__');

    const verifyAnswer = () => {
      setAnswerChecked(true);
      const ok = normalize(userAnswer) === normalize(correctAnswer) || normalize(userAnswer) === normalize(reversedAnswer);
      if (ok) setSolved(true);
    };

    return (
      <div className="rounded-2xl p-5 mb-4" style={{ background: '#FDF6E8', border: '1.5px solid rgba(51,41,28,.12)' }}>
        {/* Enunciado clickeable */}
        <p className="text-center text-lg mb-3 flex items-center justify-center gap-2 flex-nowrap" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, whiteSpace: 'nowrap' }}>
          {TERMS.map((t, i) => (
            <span key={t.id}>
              {i > 0 && <span style={{ color: '#33291C' }}> + </span>}
              <motion.span
                onClick={() => handleClick(t.id)}
                className={placement[t.id] ? '' : 'eurema-pulse'}
                whileHover={placement[t.id] ? undefined : { scale: 1.15 }}
                whileTap={placement[t.id] ? undefined : { scale: 0.88 }}
                transition={SPRING.snappy}
                style={{
                  cursor: placement[t.id] ? 'default' : 'pointer',
                  color: placement[t.id] ? '#C9BBA0' : '#33291C',
                  display: 'inline-block',
                }}
              >
                {t.label}
              </motion.span>
            </span>
          ))}
        </p>

        {!bothGrouped && (
          <p className="text-center text-sm mb-4" style={{ color: '#8C7F63' }}>
            Toca 2 términos del enunciado que compartan un factor común
          </p>
        )}

        {/* Paréntesis en blanco, se llenan de izquierda a derecha */}
        <div className="flex gap-1.5 justify-center flex-nowrap mb-2" style={{ whiteSpace: 'nowrap' }}>
          <motion.div
            key={leftComplete ? 'left-done' : 'left-pending'}
            animate={leftError ? incorrectShake.animate : undefined}
            transition={leftError ? incorrectShake.transition : undefined}
            initial={leftComplete ? { scale: 0.85 } : false}
            {...(leftComplete ? { animate: { scale: 1 }, transition: { duration: 0.32, ease: [0.34, 1.56, 0.64, 1] } } : {})}
            className="px-2.5 py-2 rounded-xl text-base"
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              background: leftError ? '#FBE2E0' : '#fff',
              border: leftError ? '2px solid #D93A3A' : (leftComplete ? '2px solid #F2CA50' : '2px dashed rgba(51,41,28,.2)'),
              color: '#33291C',
              minWidth: 72, textAlign: 'center',
            }}
          >
            ({slotLabel(leftIds, 0)} + {slotLabel(leftIds, 1)})
          </motion.div>
          <span className="text-base self-center" style={{ fontWeight: 800 }}>+</span>
          <motion.div
            key={rightComplete ? 'right-done' : 'right-pending'}
            initial={rightComplete ? { scale: 0.85 } : false}
            {...(rightComplete
              ? { animate: { scale: 1 }, transition: { duration: 0.32, ease: [0.34, 1.56, 0.64, 1] } }
              : { animate: rightError ? incorrectShake.animate : undefined, transition: rightError ? incorrectShake.transition : undefined })}
            className="px-2.5 py-2 rounded-xl text-base"
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              background: rightError ? '#FBE2E0' : '#fff',
              border: rightError ? '2px solid #D93A3A' : (rightComplete ? '2px solid #F2CA50' : '2px dashed rgba(51,41,28,.2)'),
              color: '#33291C',
              minWidth: 72, textAlign: 'center',
            }}
          >
            ({slotLabel(rightIds, 0)} + {slotLabel(rightIds, 1)})
          </motion.div>
        </div>

        {(leftError || rightError) && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm mb-2" style={{ color: '#D93A3A', fontWeight: 700 }}>
            Estos términos no comparten un factor común, intenta con otro par
          </motion.p>
        )}

        {bothGrouped && (
          <div className="space-y-3 mt-4">
            <p className="text-center text-sm mb-1" style={{ color: '#8C7F63' }}>
              {bothExtracted
                ? '¡Bien! Ahora escribe la factorización final'
                : mode === 'tap'
                  ? 'Toca cada paréntesis para sacar su factor común'
                  : 'Escribe el factor común de cada paréntesis'}
            </p>

            {mode === 'tap' ? (
              <div className="flex gap-1.5 justify-center flex-nowrap" style={{ whiteSpace: 'nowrap' }}>
                <motion.button
                  onClick={() => setExtracted1(true)}
                  disabled={extracted1}
                  whileHover={extracted1 ? undefined : { scale: 1.05 }}
                  whileTap={extracted1 ? undefined : { scale: 0.92 }}
                  transition={SPRING.snappy}
                  className={extracted1 ? '' : 'eurema-pulse'}
                  style={{
                    fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                    background: '#fff', boxShadow: '0 1px 8px rgba(51,41,28,.08)',
                    cursor: extracted1 ? 'default' : 'pointer', color: '#33291C',
                    padding: '0.5rem 0.625rem', borderRadius: 12, fontSize: '1rem', border: 'none',
                  }}
                >
                  {extracted1
                    ? <span><span style={{ color: NARANJA }}>{info1!.shared}</span>({info1!.rem[0]} + {info1!.rem[1]})</span>
                    : <span>({labelOf(leftIds[0])} + {labelOf(leftIds[1])})</span>}
                </motion.button>
                <span className="text-base self-center" style={{ fontWeight: 800 }}>+</span>
                <motion.button
                  onClick={() => setExtracted2(true)}
                  disabled={extracted2}
                  whileHover={extracted2 ? undefined : { scale: 1.05 }}
                  whileTap={extracted2 ? undefined : { scale: 0.92 }}
                  transition={SPRING.snappy}
                  className={extracted2 ? '' : 'eurema-pulse'}
                  style={{
                    fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                    background: '#fff', boxShadow: '0 1px 8px rgba(51,41,28,.08)',
                    cursor: extracted2 ? 'default' : 'pointer', color: '#33291C',
                    padding: '0.5rem 0.625rem', borderRadius: 12, fontSize: '1rem', border: 'none',
                  }}
                >
                  {extracted2
                    ? <span><span style={{ color: TURQUESA }}>{info2!.shared}</span>({info2!.rem[0]} + {info2!.rem[1]})</span>
                    : <span>({labelOf(rightIds[0])} + {labelOf(rightIds[1])})</span>}
                </motion.button>
              </div>
            ) : factorsDone ? (
              <div className="flex gap-1.5 justify-center flex-nowrap" style={{ whiteSpace: 'nowrap' }}>
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
                  className="px-2.5 py-2 rounded-xl text-base"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, background: '#fff', boxShadow: '0 1px 8px rgba(51,41,28,.08)', color: '#33291C' }}
                >
                  <span style={{ color: NARANJA }}>{info1!.shared}</span>({info1!.rem[0]} + {info1!.rem[1]})
                </motion.div>
                <span className="text-base self-center" style={{ fontWeight: 800 }}>+</span>
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.32, ease: [0.34, 1.56, 0.64, 1], delay: 0.06 }}
                  className="px-2.5 py-2 rounded-xl text-base"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, background: '#fff', boxShadow: '0 1px 8px rgba(51,41,28,.08)', color: '#33291C' }}
                >
                  <span style={{ color: TURQUESA }}>{info2!.shared}</span>({info2!.rem[0]} + {info2!.rem[1]})
                </motion.div>
              </div>
            ) : (
              <div>
                <div className="flex gap-1.5 justify-center items-center flex-nowrap mb-2" style={{ whiteSpace: 'nowrap' }}>
                  <input
                    type="text"
                    value={factorInput1}
                    onChange={(e) => { setFactorInput1(e.target.value); setFactorChecked(false); }}
                    className="px-2 py-2 rounded-lg text-center text-base"
                    style={{
                      width: 46, fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                      border: factorChecked ? (normalize(factorInput1) === normalize(info1!.shared) ? '2px solid #578A44' : '2px solid #D93A3A') : '2px solid #DFF5F5',
                    }}
                  />
                  <span className="text-base" style={{ fontWeight: 800 }}>
                    ({labelOf(leftIds[0])} + {labelOf(leftIds[1])})
                  </span>
                  <span className="text-base" style={{ fontWeight: 800 }}>+</span>
                  <input
                    type="text"
                    value={factorInput2}
                    onChange={(e) => { setFactorInput2(e.target.value); setFactorChecked(false); }}
                    className="px-2 py-2 rounded-lg text-center text-base"
                    style={{
                      width: 46, fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                      border: factorChecked ? (normalize(factorInput2) === normalize(info2!.shared) ? '2px solid #578A44' : '2px solid #D93A3A') : '2px solid #DFF5F5',
                    }}
                  />
                  <span className="text-base" style={{ fontWeight: 800 }}>
                    ({labelOf(rightIds[0])} + {labelOf(rightIds[1])})
                  </span>
                </div>
                <motion.button
                  onClick={verifyFactors}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={SPRING.snappy}
                  className="w-full text-white py-2 rounded-xl text-sm"
                  style={{ background: NARANJA, fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                >
                  Verificar
                </motion.button>
                {factorChecked && !factorsDone && (
                  <motion.p
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, ...incorrectShake.animate }}
                    transition={incorrectShake.transition}
                    className="text-center text-sm mt-2" style={{ color: '#D93A3A', fontWeight: 700 }}
                  >
                    Todavía no — revisa los factores en rojo
                  </motion.p>
                )}
              </div>
            )}

            <AnimatePresence>
              {bothExtracted && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-2">
                  <p className="text-center text-sm rounded-xl p-3" style={{ background: '#DFF5F5', color: '#1F8585', fontWeight: 600 }}>
                    El paréntesis ({info1!.rem[0]} + {info1!.rem[1]}) se repite, y se unen los términos que quedaron afuera.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-center mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                      Escribe la factorización final:
                    </p>
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => { setUserAnswer(e.target.value); setAnswerChecked(false); }}
                      disabled={solved}
                      className="w-full px-4 py-3 rounded-xl text-center text-lg"
                      style={{
                        border: answerChecked ? (isCorrect ? '2px solid #578A44' : '2px solid #D93A3A') : '2px solid #DFF5F5',
                        fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                      }}
                      placeholder="(? + ?)(? + ?)"
                    />
                    <p className="text-xs text-center mt-1" style={{ color: '#8C7F63' }}>Ejemplo de formato: (x+3)(a+2)</p>

                    {!solved && (
                      <motion.button
                        onClick={verifyAnswer}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        transition={SPRING.snappy}
                        className="w-full text-white py-3 rounded-2xl mt-3"
                        style={{ background: NARANJA, fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                      >
                        Verificar
                      </motion.button>
                    )}

                    {answerChecked && !isCorrect && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, ...incorrectShake.animate }}
                        transition={incorrectShake.transition}
                        className="text-center mt-3" style={{ color: '#D93A3A', fontWeight: 700 }}
                      >
                        Todavía no — intenta de nuevo
                      </motion.p>
                    )}

                    {solved && (
                      <motion.div variants={correctPop} initial="initial" animate="animate" className="text-center mt-3 relative">
                        <p className="text-lg mb-3" style={{ color: '#578A44', fontWeight: 800 }}>🎉 ¡Correcto!</p>
                        <EuremaBurst />
                        {!isLast ? (
                          <motion.button
                            onClick={onSolved}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            transition={SPRING.snappy}
                            className="w-full text-white py-3 rounded-2xl"
                            style={{ background: '#578A44', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                          >
                            Siguiente problema →
                          </motion.button>
                        ) : (
                          <p className="text-sm" style={{ color: '#8C7F63' }}>¡Completaste los 5 problemas de práctica! 🎉</p>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    );
  }

  const PracticeFrame = () => {
    const [problemIndex, setProblemIndex] = useState(0);
    const [practiceStarted, setPracticeStarted] = useState(false);
    const problem = PRACTICE_PROBLEMS[problemIndex];

    return (
      <motion.div
        key="practice"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="rounded-3xl p-6"
        style={{ background: '#fff', boxShadow: '0 4px 24px rgba(51,41,28,.08)' }}
      >
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: '#C15A1C' }} className="text-xl mb-4">
          Práctica
        </h3>

        {!practiceStarted ? (
          <div className="rounded-2xl p-6 text-center" style={{ background: '#FDF6E8', border: '1.5px solid rgba(51,41,28,.12)' }}>
            <p className="text-base mb-4" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: '#33291C' }}>
              ¡Vamos a resolver juntos este problema!
            </p>
            <button
              onClick={() => setPracticeStarted(true)}
              className="w-full text-white py-3 px-6 rounded-2xl transition-all"
              style={{ background: NARANJA, fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
            >
              Empezar
            </button>
          </div>
        ) : (
          <>
            <p className="text-center text-xs mb-2" style={{ color: '#8C7F63', fontFamily: "'Manrope', sans-serif", fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
              Problema {problemIndex + 1} de {PRACTICE_PROBLEMS.length}
            </p>
            <PracticeProblemView
              key={problemIndex}
              problem={problem}
              isLast={problemIndex === PRACTICE_PROBLEMS.length - 1}
              onSolved={() => setProblemIndex(i => i + 1)}
            />
          </>
        )}

        <button
          onClick={() => setCurrentFrame(0)}
          className="w-full py-3 px-6 rounded-2xl transition-colors"
          style={{ background: '#F0E2C4', color: '#33291C', fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
        >
          ← Volver
        </button>
      </motion.div>
    );
  };

  const frames = [IntroFrame, PracticeFrame];
  const CurrentFrameComponent = frames[currentFrame];

  return <CurrentFrameComponent />;
}
