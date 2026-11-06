import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface SustitucionMethodSelectionProps {
  onSelectX: () => void;
  onSelectY: () => void;
  onBack: () => void;
}

export function SustitucionMethodSelection({ onSelectX, onSelectY, onBack }: SustitucionMethodSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full bg-white rounded-3xl shadow-2xl p-6"
    >
      <button
        onClick={onBack}
        className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <h2 className="text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Método de sustitución
      </h2>

      <div className="mb-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 space-y-2">
        <div className="text-sm text-gray-600 mb-2">Sistema original:</div>
        <div className="text-center text-xl">
          <span className="text-blue-600">x</span> + <span className="text-orange-500">y</span> = 4
        </div>
        <div className="text-center text-xl">
          <span className="text-blue-600">x</span> - 2<span className="text-orange-500">y</span> = 1
        </div>
      </div>

      <div className="mb-8 space-y-4">
        <p className="text-gray-700 leading-relaxed">
          En este método despejamos una variable y reemplazamos esa expresión dentro de la otra ecuación.
        </p>

        <p className="text-gray-700">
          Escoge una variable para comenzar:
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onSelectX}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95 text-xl"
        >
          Empezar con <span className="font-bold">X</span>
        </button>

        <button
          onClick={onSelectY}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl active:scale-95 text-xl"
        >
          Empezar con <span className="font-bold">Y</span>
        </button>
      </div>
    </motion.div>
  );
}
