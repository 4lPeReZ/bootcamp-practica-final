import React from 'react';
import TablaDatos from './components/TablaDatos/TablaDatos';
import { DarkModeProvider, useDarkMode } from './providers/DarkModeProvider';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import './App.css'; // Importa los estilos globales

function App() {
  const { isDarkMode } = useDarkMode();

  // Agrega una clase específica para el modo oscuro en función del estado
  const appClassName = isDarkMode ? 'App dark-mode' : 'App';

  return (
    <DarkModeProvider>
      <div className={appClassName}>
        <DarkModeToggle />
        <TablaDatos />
      </div>
    </DarkModeProvider>
  );
}

export default App;
