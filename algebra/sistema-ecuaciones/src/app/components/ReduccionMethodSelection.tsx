import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ReduccionMethodSelectionProps {
  onStart: () => void;
  onBack: () => void;
}

export function ReduccionMethodSelection({ onStart, onBack }: ReduccionMethodSelectionProps) {
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

      <h2 className="text-center mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
        Método de reducción
      </h2>

      <div className="mb-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-4 space-y-2">
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
          En este método eliminamos una variable sumando o restando ecuaciones para obtener una ecuación con una sola variable.
        </p>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95 text-xl"
      >
        Comenzar
      </button>
    </motion.div>
  );
}
