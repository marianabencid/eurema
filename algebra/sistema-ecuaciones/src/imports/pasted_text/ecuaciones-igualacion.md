Create a mobile-first interactive educational math experience in Spanish for 8th grade students in Panama. The topic is “Sistema de ecuaciones por igualación”. The experience should feel like a guided game/tutorial with smooth transitions, friendly colors, large buttons, visual clarity, and step-by-step interaction. The goal is to help students deeply understand the logic of the equalization method, not just memorize steps.

STYLE:
- Modern educational app UI
- Soft gradients and rounded corners
- Friendly but academic
- Minimal clutter
- Mobile app layout
- Consistent color coding:
  - X variables = blue
  - Y variables = orange
  - Final answers/results = green
  - Errors/warnings = red
- Use subtle animations and transitions
- Keep the original system visible near the top during the entire method explanation
- Add progress indicators like “Paso 1 de 7”

IMPORTANT PEDAGOGICAL GOALS:
- Reinforce patterns visually
- Make students actively click and interact
- Encourage strategic thinking
- Teach that students can begin with either variable
- Break algebra into very small visual steps
- Use immediate feedback
- Keep one clear objective per screen

SYSTEM TO USE THROUGHOUT:
Equation 1: x + y = 4
Equation 2: x - 2y = 1

MAIN INTRO SCREEN:
Title: “Sistema de ecuaciones”

Short explanation:
“Un sistema de ecuaciones son dos ecuaciones que trabajan juntas. Nuestro objetivo es encontrar los valores de las variables que hacen que ambas ecuaciones sean correctas.”

Below that:
“Un sistema de ecuaciones se ve así:”

Display the system large and bold:
x + y = 4
x - 2y = 1

At the bottom create 3 horizontal buttons:
- Igualación
- Sustitución
- Reducción

Only Igualación should be fully functional for now. The other buttons can show “Próximamente”.

WHEN USER PRESSES “IGUALACIÓN”:
Show a new screen with:
Title: “Método de igualación”

Keep the system visible at the top.

Text:
“En este método despejamos la misma variable en ambas ecuaciones y luego igualamos los resultados.”

Then:
“Escoge una variable para comenzar”

Create two large buttons:
- Empezar con X
- Empezar con Y

BOTH PATHS MUST EXIST.
The student should feel that either variable is a valid strategy.

========================
PATH 1 — STARTING WITH X
========================

SCREEN:
Title:
“Paso 1: Despejar X de la ecuación 1”

Always keep visible:
Ecuación 1: x + y = 4
Ecuación 2: x - 2y = 1

Add a “Comenzar” button.

After clicking:
Show the algebra step-by-step visually.

First show:
x + y = 4

Then guide the student:
“Queremos dejar X sola.”

Animate moving +y to the other side.
Highlight the sign change visually in orange/red.

Then show:
x = 4 - y

Label it:
“Ecuación de X1”

Add a green continue button.

NEXT SCREEN:
Title:
“Paso 2: Despejar X de la ecuación 2”

Keep the original system visible at the top again.

Show:
x - 2y = 1

Guide the student similarly.

Explain:
“Queremos dejar X sola.”

Animate moving -2y to the other side.
Visually emphasize sign changes.

Final result:
x = 1 + 2y

Label:
“Ecuación de X2”

The visual structure should strongly resemble the previous step to reinforce patterns.

NEXT SCREEN:
Title:
“Paso 3: Igualar expresiones”

Show:
X1 = X2

Instruction:
“Haz clic en cada expresión para reemplazarla.”

Interactive behavior:
When clicking X1:
Replace with:
4 - y

When clicking X2:
Replace with:
1 + 2y

Final equation:
4 - y = 1 + 2y

Add encouraging feedback:
“¡Excelente! Ahora resolvamos esta ecuación.”

NEXT SCREEN:
Title:
“Paso 4: Resolver la ecuación”

Guide step-by-step:
4 - y = 1 + 2y

Break into very small transformations with animations.

Possible sequence:
4 - 1 = 2y + y
3 = 3y
y = 1

Highlight the final result in green.

Add:
“¡Ya encontramos Y!”

NEXT SCREEN:
Title:
“Paso 5: Encontrar X”

Keep the original system visible at the top.

Instruction:
“Ahora reemplaza el valor de Y en cualquiera de las ecuaciones.”

Show both equations as clickable cards:
- x + y = 4
- x - 2y = 1

The student may click either equation.

If the student clicks:
x + y = 4

Then guide visually:
x + 1 = 4
x = 4 - 1
x = 3

If the student clicks:
x - 2y = 1

Then guide visually:
x - 2(1) = 1
x - 2 = 1
x = 3

In both cases:
Highlight:
x = 3
in green.

Add:
“¡Ya encontramos ambas variables!”

NEXT SCREEN:
Title:
“Paso 6: Verificación”

Instruction:
“Comprobemos que nuestra respuesta funciona en ambas ecuaciones.”

Show substitutions step-by-step.

Equation 1:
3 + 1 = 4
4 = 4 ✅

Equation 2:
3 - 2(1) = 1
3 - 2 = 1
1 = 1 ✅

Use green checkmarks and celebration visuals.

FINAL SCREEN:
Large celebration emoji.

Title:
“¡Sistema resuelto!”

Display final answer beautifully:
x = 3
y = 1

Add:
“¡Excelente trabajo usando el método de igualación!”

Include:
- Reiniciar
- Volver al menú principal

========================
PATH 2 — STARTING WITH Y
========================

Create a second complete path that mirrors the previous experience but now the student starts by despejando Y instead of X.

The flow should feel highly similar visually and structurally to reinforce learning patterns.

Use these resulting equations:

From equation 1:
y = 4 - x

From equation 2:
y = (x - 1)/2

Then equal them:
4 - x = (x - 1)/2

Solve step-by-step until:
x = 3

Then find:
y = 1

Again include:
- verification
- celebrations
- interactive clicks
- visual sign changes
- smooth transitions
- friendly educational tone

INTERACTION REQUIREMENTS:
- Large mobile-friendly buttons
- Immediate visual feedback
- Wrong choices briefly flash red
- Correct actions animate smoothly
- Keep each screen focused on one cognitive task
- Use progressive disclosure (do not show too much at once)

IMPORTANT:
This should feel like an interactive educational app, not a slideshow.
The experience must prioritize engagement, clarity, and step-by-step mathematical reasoning.