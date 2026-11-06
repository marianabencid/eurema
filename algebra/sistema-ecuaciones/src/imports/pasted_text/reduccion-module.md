Add functionality to the existing “Reducción” button inside the educational systems of equations app.

IMPORTANT:
This prompt is ONLY to functionalize and create the interactive flow for the “Método de reducción” section inside the already existing app.

Keep:
- the same visual style
- typography
- colors
- animations
- mobile-first layout
- interaction patterns
- educational structure
already used in the Igualación and Sustitución modules.

DO NOT redesign the app.
DO NOT modify the other methods.
ONLY add the complete Reducción interactive module.

GENERAL STYLE:
- Modern educational app
- Friendly and clean
- Large touch-friendly buttons
- Rounded cards
- Soft gradients
- Progressive disclosure
- One cognitive task per screen
- Immediate visual feedback
- Smooth transitions and animations

COLOR SYSTEM:
- X variable = blue
- Y variable = orange
- Results = green
- Warnings/errors = red

PEDAGOGICAL GOALS:
- Help students visually understand elimination/reduction
- Reinforce WHY variables cancel
- Make sign changes visually obvious
- Keep the process extremely step-by-step
- Encourage strategic thinking

SYSTEM USED THROUGHOUT:
Equation 1:
x + y = 4

Equation 2:
x - 2y = 1

====================================
INTRO SCREEN — MÉTODO DE REDUCCIÓN
====================================

Title:
“Método de reducción”

Short explanation:
“En este método eliminamos una variable sumando o restando ecuaciones para obtener una ecuación con una sola variable.”

Keep the system visible in large bold text:
x + y = 4
x - 2y = 1

Button:
“Comenzar”

====================================
STEP 1 — ELEGIR VARIABLE A ELIMINAR
====================================

Title:
“Paso 1: Escoger la variable más fácil de eliminar”

Keep the original system visible.

Instruction:
“Observa los coeficientes y piensa cuál variable es más fácil cancelar.”

Visually highlight:
- x has coefficients 1 and 1
- y has coefficients 1 and -2

Then explain:
“La X es más fácil de eliminar porque ambas ecuaciones tienen el mismo coeficiente.”

Add a visual note with arrow:
“Si multiplicamos una ecuación por -1, podremos cancelar la X.”

Highlight the X terms in blue.

Button:
“Continuar”

====================================
STEP 2 — ELEGIR ECUACIÓN A MULTIPLICAR
====================================

Title:
“Paso 2: Multiplicar una ecuación por -1”

Keep the system visible.

Instruction:
“Debemos cambiar los signos de una ecuación para cancelar la X.”

Show both equations as clickable cards.

Allow the student to choose which equation to multiply by -1.

IMPORTANT:
Both options should work correctly.

However:
If the student chooses equation 2,
show positive feedback like:
“¡Excelente elección!”

If the student chooses equation 1,
still allow it and continue correctly.

====================================
STEP 3 — MULTIPLICAR POR -1 (VISUAL)
====================================

Title:
“Paso 3: Cambiar signos”

This step must be EXTREMELY visual.

Show:
(-1)(x - 2y = 1)

Animate the multiplication step-by-step.

VERY IMPORTANT:
Show every term changing sign individually.

Visual sequence:
x becomes -x
-2y becomes +2y
1 becomes -1

Use animations/colors to emphasize sign changes.

Final transformed equation:
-x + 2y = -1

Label:
“Ecuación transformada”

Then show the full system:

x + y = 4
-x + 2y = -1

Button:
“Reducir términos”

====================================
STEP 4 — REDUCIR TÉRMINOS (VERY VISUAL)
====================================

Title:
“Paso 4: Reducir términos”

This is the MOST visual step of the module.

Add a horizontal line beneath the system like traditional handwritten reduction.

Show:
x + y = 4
-x + 2y = -1
____________

Animate reduction column by column.

IMPORTANT VISUAL REQUIREMENTS:

1. X TERMS
Show:
x + (-x)

Then animate:
- crossing/slashing out both X terms
- show they cancel

Display:
0

Add small helper text:
“La X se cancela.”

2. Y TERMS
Show:
y + 2y

Then animate:
3y

3. CONSTANT TERMS
Show:
4 + (-1)

Then animate:
3

Final resulting equation:
3y = 3

Highlight it in green.

This step should feel satisfying and visually clear.

====================================
STEP 5 — RESOLVER ECUACIÓN
====================================

Title:
“Paso 5: Resolver para Y”

Show step-by-step:

3y = 3
y = 3 ÷ 3
y = 1

Use smooth transitions.

Highlight:
y = 1
in green.

Add encouraging feedback:
“¡Ya encontramos el valor de Y!”

====================================
STEP 6 — ENCONTRAR X
====================================

Keep this step visually consistent with Igualación and Sustitución.

Title:
“Paso 6: Encontrar X”

Instruction:
“Ahora reemplaza Y en cualquiera de las ecuaciones.”

Show both equations as clickable cards.

Allow student to choose either equation.

Guide substitution visually step-by-step.

Final result:
x = 3

Highlight in green.

====================================
STEP 7 — VERIFICACIÓN
====================================

Title:
“Paso 7: Verificación”

Instruction:
“Comprobemos que nuestra solución funciona.”

Show substitutions step-by-step in both equations.

Equation 1:
3 + 1 = 4
4 = 4 ✅

Equation 2:
3 - 2(1) = 1
3 - 2 = 1
1 = 1 ✅

Use:
- green checkmarks
- success animations
- celebratory visuals

====================================
FINAL SCREEN
====================================

Large celebration emoji.

Title:
“¡Sistema resuelto!”

Display beautifully:
x = 3
y = 1

Add:
“¡Excelente trabajo usando el método de reducción!”

Buttons:
- Reiniciar
- Volver al menú principal

IMPORTANT INTERACTION RULES:
- Immediate visual feedback
- Wrong choices briefly flash red
- Correct actions animate smoothly
- Maintain visual consistency with other methods
- Keep each screen focused on one concept
- Prioritize understanding over speed

IMPORTANT:
This must feel like a real educational interactive app, not slides.
The reduction/cancellation visuals are the highest priority of this module.