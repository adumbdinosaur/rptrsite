import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Terminal from './components/Terminal';
import CommandBar from './components/CommandBar';
import componentsMap from './components/componentsMap';
import { handleEasterEggs } from './utils/easterEgg';

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('Home');
  const [easterEgg, setEasterEgg] = useState<React.ReactNode | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const handleCommandSubmit = (command: string) => {
    handleEasterEggs(command, setEasterEgg, setSidebarVisible, setSelectedComponent);
  };

  const handleLinkClick = (componentKey: string) => {
    setSelectedComponent(componentKey);
    setEasterEgg(null);
  };

  const SelectedComponent = componentsMap[selectedComponent];


  return (
    <div className="flex h-screen">
      <div
        className={`${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-500 ease-in-out w-64`}
      >
        <Sidebar onSelect={handleLinkClick} setEasterEgg={setEasterEgg} />
      </div>
      <div
        className={`${sidebarVisible ? 'w-0.5' : 'w-0'}
          bg-gray-600 transition-all duration-500 ease-in-out`}
      />
      <div
        className={`${sidebarVisible ? 'flex-1' : 'w-full'} flex flex-col`}
      >
        <Terminal content={<>{easterEgg || <SelectedComponent />}</>} />
        <CommandBar onSubmitCommand={handleCommandSubmit} />
      </div>
    </div>
  );
};

export default App;
