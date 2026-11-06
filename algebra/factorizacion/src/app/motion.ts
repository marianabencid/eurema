// ============================================================
// EUREMA · Motion System
// Un solo lugar que define cómo se mueve la interfaz. Todo componente
// que anime algo debería importar de aquí en vez de inventar su propio
// timing — así toda la app se siente parte del mismo universo.
//
// Principio: anticipación → movimiento → impacto → reposo.
// Prioridad: claridad > interacción > fluidez > personalidad.
// ============================================================

// ---------- Duraciones (ms → s para Motion) ----------
export const DUR = {
  micro: 0.18,   // hover, tap — interacciones simples
  base: 0.32,    // transiciones y cambios de estado
  narrative: 0.55, // transformaciones más grandes (morphing, celebración)
};

// ---------- Easings orgánicos (nunca linear) ----------
export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,        // ease-out expo — salidas de reposo
  inOut: [0.65, 0, 0.35, 1] as const,     // ease-in-out — transiciones entre estados
  overshoot: [0.34, 1.56, 0.64, 1] as const, // pequeño rebote — impacto
};

export const SPRING = {
  snappy: { type: 'spring' as const, stiffness: 420, damping: 28 },
  bouncy: { type: 'spring' as const, stiffness: 340, damping: 16 },
  gentle: { type: 'spring' as const, stiffness: 260, damping: 30 },
};

// ---------- Variants reutilizables ----------

// Entrada estándar de una tarjeta/paso: anticipación sutil + llegada con overshoot leve.
export const revealCard = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { ...SPRING.gentle } },
};

// Entrada en cascada para listas (HomeScreen, pools de términos).
export function staggerItem(index: number) {
  return {
    hidden: { opacity: 0, y: 12, scale: 0.96 },
    show: {
      opacity: 1, y: 0, scale: 1,
      transition: { ...SPRING.gentle, delay: index * 0.06 },
    },
  };
}

// Microinteracción de click: anticipación (se encoge un poco) → impacto (rebote).
export const tapAnticipation = {
  whileTap: { scale: 0.94 },
  whileHover: { scale: 1.035 },
  transition: SPRING.snappy,
};

// Hover sutil para tarjetas grandes (no botones pequeños).
export const hoverLift = {
  whileHover: { y: -3, transition: { duration: DUR.micro, ease: EASE.out } },
  whileTap: { scale: 0.98 },
};

// Feedback correcto: pequeño "pop" con overshoot — sensación de logro, no ruido.
export const correctPop = {
  initial: { scale: 0.7, opacity: 0 },
  animate: {
    scale: 1, opacity: 1,
    transition: { duration: DUR.base, ease: EASE.overshoot },
  },
};

// Feedback incorrecto: sacudida breve y suave — nunca "castiga" visualmente.
export const incorrectShake = {
  animate: { x: [0, -6, 6, -4, 4, 0] },
  transition: { duration: DUR.base, ease: EASE.inOut },
};

// Revelado de una tarjeta que "se descubre" (no un plano opacity 0→1).
export const discoverCard = {
  hidden: { opacity: 0, y: -8, scale: 0.9 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { ...SPRING.bouncy },
  },
};

// Transición entre pantallas/frames completos.
export const framePresence = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: DUR.narrative, ease: EASE.out } },
  exit: { opacity: 0, x: -40, transition: { duration: DUR.base, ease: EASE.inOut } },
};
