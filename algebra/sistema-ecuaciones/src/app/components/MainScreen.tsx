import { motion } from 'motion/react';

interface MainScreenProps {
  onSelectIgualacion: () => void;
  onSelectSustitucion: () => void;
  onSelectReduccion: () => void;
}

export function MainScreen({ onSelectIgualacion, onSelectSustitucion, onSelectReduccion }: MainScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white rounded-3xl shadow-2xl p-6"
    >
      <h1 className="text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Sistema de ecuaciones
      </h1>

      <div className="mb-6 space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Un sistema de ecuaciones son dos ecuaciones que trabajan juntas. Nuestro objetivo es encontrar los valores de las variables que hacen que ambas ecuaciones sean correctas.
        </p>

        <p className="text-gray-700">
          Un sistema de ecuaciones se ve así:
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 space-y-3">
          <div className="text-center text-2xl">
            <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
          </div>
          <div className="text-center text-2xl">
            <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        Existen 3 métodos para resolverlo:
      </p>

      <div className="space-y-3">
        <button
          onClick={onSelectIgualacion}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Igualación
        </button>

        <button
          onClick={onSelectSustitucion}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Sustitución
        </button>

        <button
          onClick={onSelectReduccion}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Reducción
        </button>
      </div>
    </motion.div>
  );
}
