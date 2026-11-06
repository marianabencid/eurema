Add a new fully interactive module called “Método de sustitución” to the existing educational algebra app. Keep the exact same visual style, color palette, interaction logic, animations, mobile-first layout, typography, button style, and pedagogical structure used in the Igualación module.

IMPORTANT:
This should feel like part of the same app experience.

GENERAL STYLE:
- Modern educational app
- Mobile-first
- Friendly but academic
- Rounded cards and buttons
- Soft gradients
- Smooth transitions
- Minimal clutter
- One cognitive task per screen
- Large touch-friendly buttons
- Progressive disclosure
- Immediate visual feedback

COLOR SYSTEM:
- X variable = blue
- Y variable = orange
- Correct/final results = green
- Errors = red

PEDAGOGICAL GOALS:
- Reinforce algebraic patterns
- Encourage strategic thinking
- Teach that either variable works
- Teach that either equation can be chosen
- Break algebra into tiny visual steps
- Keep the original system visible at the top throughout the lesson
- Encourage active participation with clicks and interactions

SYSTEM USED THROUGHOUT:
Equation 1:
x + y = 4

Equation 2:
x - 2y = 1

====================================
INTRO SCREEN — MÉTODO DE SUSTITUCIÓN
====================================

Title:
“Método de sustitución”

Short explanation:
“En este método despejamos una variable y reemplazamos esa expresión dentro de la otra ecuación.”

Keep the original system visible in large bold text:
x + y = 4
x - 2y = 1

Text:
“Escoge una variable para comenzar”

Create two large buttons:
- Empezar con X
- Empezar con Y

Both paths must exist and be fully functional.

The student should feel that either variable is valid.

====================================
STEP 1 — CHOOSE EQUATION TO DESPEJAR
====================================

After choosing the variable:

Title:
“Paso 1: Escoge una ecuación para despejar”

Keep the original system visible at the top.

Instruction:
“Puedes despejar la variable usando cualquiera de las dos ecuaciones.”

Create two interactive equation cards:
- Ecuación 1
- Ecuación 2

Both buttons must be functional.

When the student selects one:
animate a soft highlight around the chosen equation.

====================================
STEP 2 — DESPEJAR VARIABLE
====================================

Title:
“Paso 2: Despejar la variable”

Keep the original system visible.

Show clearly:
- which variable was selected
- which equation was selected

For example:
“Vamos a despejar X de la ecuación 1”

Then show the algebra step-by-step visually.

IMPORTANT:
Break transformations into very small animated steps.

Example if student chose:
Despejar X de ecuación 1

Start:
x + y = 4

Guide:
“Queremos dejar X sola.”

Animate moving +y to the other side.

Visually emphasize sign changes with temporary orange/red highlights.

Final:
x = 4 - y

Highlight the result in green.

Label:
“Expresión encontrada para X”

IMPORTANT:
If the student chooses:
- X from equation 2
- Y from equation 1
- Y from equation 2

all paths must work correctly and display the proper despeje.

====================================
STEP 3 — SUSTITUIR EN LA OTRA ECUACIÓN
====================================

Title:
“Paso 3: Sustituir la expresión”

Keep the original system visible.

IMPORTANT:
Automatically use the equation that was NOT selected in the previous step.

Examples:
- If the student despejó from equation 1,
use equation 2 here.
- If the student despejó from equation 2,
use equation 1 here.

Instruction:
“Ahora reemplazaremos la variable usando la expresión encontrada.”

FIRST:
Show the untouched equation.

THEN:
Animate parentheses appearing around the variable that will be replaced.

Example:
(x) - 2y = 1

Instruction:
“Haz clic para reemplazar la variable.”

When clicked:
Replace the variable INSIDE the SAME PARENTHESES with the despejada expression.

Example:
(4 - y) - 2y = 1

IMPORTANT:
The replacement should feel smooth and visually satisfying.

====================================
STEP 4 — RESOLVER ECUACIÓN RESULTANTE
====================================

Title:
“Paso 4: Resolver la ecuación”

Guide the student through the resulting first-degree equation step-by-step.

Break the algebra into very small transformations.

Example:
(4 - y) - 2y = 1
4 - 3y = 1
4 - 1 = 3y
3 = 3y
y = 1

Highlight final answers in green.

Add encouraging messages like:
“¡Excelente!”
“¡Ya encontramos una variable!”

====================================
STEP 5 — ENCONTRAR LA OTRA VARIABLE
====================================

Keep this step similar to the Igualación module.

Title:
“Paso 5: Encontrar la otra variable”

Instruction:
“Ahora reemplaza el valor encontrado en cualquiera de las ecuaciones.”

Show both equations as clickable cards.

Allow the student to choose either equation.

Guide substitution visually step-by-step.

Highlight final answer in green.

====================================
STEP 6 — VERIFICACIÓN
====================================

Keep this step similar to the Igualación module.

Title:
“Paso 6: Verificación”

Instruction:
“Comprobemos que nuestra solución funciona.”

Show substitutions step-by-step in both equations.

Use:
- green checkmarks
- success animations
- celebration visuals

====================================
FINAL SCREEN
====================================

Large celebration emoji.

Title:
“¡Sistema resuelto!”

Display final answers beautifully:
x = 3
y = 1

Add:
“¡Excelente trabajo usando el método de sustitución!”

Include buttons:
- Reiniciar
- Volver al menú principal

IMPORTANT INTERACTION RULES:
- Use immediate visual feedback
- Wrong selections flash briefly in red
- Correct actions animate smoothly
- Use consistent visual patterns
- Keep layouts similar across equivalent steps
- Maintain a calm and clean interface
- Prioritize conceptual understanding over speed

IMPORTANT:
This should feel like a real educational app, not slides.
The focus is active mathematical reasoning and interaction.