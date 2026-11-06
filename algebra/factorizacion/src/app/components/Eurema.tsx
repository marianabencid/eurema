// Isotipo, insignia de marca y marca de agua EUREMA — reutilizados en toda la app
// para que Factorización se sienta parte del mismo producto que el resto de herramientas.

import { motion } from 'motion/react';

export function EuremaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <line x1="14.5" y1="50.14" x2="50.14" y2="14.5" stroke="#4BBFBF" strokeWidth="2.75" strokeLinecap="round" opacity="0.25" />
      <rect x="12" y="44" width="9.9" height="9.9" fill="#4BBFBF" opacity="0.35" transform="rotate(45 17 49)" />
      <rect x="26.5" y="29.5" width="13.9" height="13.9" fill="#4BBFBF" opacity="0.65" transform="rotate(45 33.5 36.5)" />
      <rect x="39.5" y="16.5" width="17.9" height="17.9" fill="#F2CA50" transform="rotate(45 48.5 25.5)" />
    </svg>
  );
}

export function EuremaBadge() {
  return (
    <div className="flex items-center gap-2">
      <EuremaIcon size={19} />
      <span
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 11, letterSpacing: '.2em', color: '#33291C' }}
      >
        EUREMA
      </span>
    </div>
  );
}

export function EuremaFooterMark() {
  return (
    <div className="flex flex-col items-center gap-2 mt-10 pt-6" style={{ borderTop: '1px solid rgba(51,41,28,.12)' }}>
      <EuremaIcon size={26} />
      <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 12.5, letterSpacing: '.24em', color: '#33291C' }}>
        EUREMA
      </div>
      <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 8.5, letterSpacing: '.15em', textTransform: 'uppercase', color: '#1F8585' }}>
        Where every concept clicks
      </div>
    </div>
  );
}

// Recompensa visual para momentos de logro real (resolver un problema, desbloquear
// un factor común, terminar un caso) — NUNCA decorativa/constante. 8 rombos pequeños,
// mismo lenguaje geométrico del isotipo, que explotan hacia afuera y se desvanecen.
const BURST_COLORS = ['#F2762E', '#4BBFBF', '#F2CA50', '#578A44'];

export function EuremaBurst() {
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const distance = 34 + (i % 2) * 10;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      color: BURST_COLORS[i % BURST_COLORS.length],
      delay: i * 0.02,
    };
  });

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 1, rotate: 45 }}
          transition={{ duration: 0.6, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 7, height: 7, marginLeft: -3.5, marginTop: -3.5,
            background: p.color, borderRadius: 1.5,
          }}
        />
      ))}
    </div>
  );
}
