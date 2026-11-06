import { useState } from 'react';
import { MainScreen } from './components/MainScreen';
import { MethodSelection } from './components/MethodSelection';
import { PathX } from './components/PathX';
import { PathY } from './components/PathY';
import { SustitucionMethodSelection } from './components/SustitucionMethodSelection';
import { PathSustitucionX } from './components/PathSustitucionX';
import { PathSustitucionY } from './components/PathSustitucionY';
import { ReduccionMethodSelection } from './components/ReduccionMethodSelection';
import { PathReduccion } from './components/PathReduccion';

export default function App() {
  const [screen, setScreen] = useState<string>('main');
  const [selectedMethod, setSelectedMethod] = useState<'igualacion' | 'sustitucion' | 'reduccion' | null>(null);
  const [selectedPath, setSelectedPath] = useState<'x' | 'y' | null>(null);

  const resetApp = () => {
    setScreen('main');
    setSelectedMethod(null);
    setSelectedPath(null);
  };

  return (
    <div className="size-full bg-gradient-to-br from-blue-50 to-purple-50 overflow-y-auto">
      <div className="min-h-full flex items-center justify-center p-4 max-w-[390px] mx-auto">
        {screen === 'main' && (
          <MainScreen
            onSelectIgualacion={() => {
              setSelectedMethod('igualacion');
              setScreen('method-selection');
            }}
            onSelectSustitucion={() => {
              setSelectedMethod('sustitucion');
              setScreen('method-selection');
            }}
            onSelectReduccion={() => {
              setSelectedMethod('reduccion');
              setScreen('method-selection');
            }}
          />
        )}
        {screen === 'method-selection' && selectedMethod === 'igualacion' && (
          <MethodSelection
            onSelectX={() => {
              setSelectedPath('x');
              setScreen('path');
            }}
            onSelectY={() => {
              setSelectedPath('y');
              setScreen('path');
            }}
            onBack={resetApp}
          />
        )}
        {screen === 'method-selection' && selectedMethod === 'sustitucion' && (
          <SustitucionMethodSelection
            onSelectX={() => {
              setSelectedPath('x');
              setScreen('path');
            }}
            onSelectY={() => {
              setSelectedPath('y');
              setScreen('path');
            }}
            onBack={resetApp}
          />
        )}
        {screen === 'method-selection' && selectedMethod === 'reduccion' && (
          <ReduccionMethodSelection
            onStart={() => setScreen('path')}
            onBack={resetApp}
          />
        )}
        {screen === 'path' && selectedMethod === 'igualacion' && selectedPath === 'x' && (
          <PathX onReset={resetApp} onBack={() => setScreen('method-selection')} />
        )}
        {screen === 'path' && selectedMethod === 'igualacion' && selectedPath === 'y' && (
          <PathY onReset={resetApp} onBack={() => setScreen('method-selection')} />
        )}
        {screen === 'path' && selectedMethod === 'sustitucion' && selectedPath === 'x' && (
          <PathSustitucionX onReset={resetApp} onBack={() => setScreen('method-selection')} />
        )}
        {screen === 'path' && selectedMethod === 'sustitucion' && selectedPath === 'y' && (
          <PathSustitucionY onReset={resetApp} onBack={() => setScreen('method-selection')} />
        )}
        {screen === 'path' && selectedMethod === 'reduccion' && (
          <PathReduccion onReset={resetApp} onBack={() => setScreen('method-selection')} />
        )}
      </div>
    </div>
  );
}