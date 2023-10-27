import React, { useState, useContext } from 'react';

// Se crea un contexto llamado DarkModeContext
export const DarkModeContext = React.createContext();

// Función personalizada para acceder al contexto del modo oscuro
export function useDarkMode() {
  return useContext(DarkModeContext);
}

// Componente DarkModeProvider que envuelve toda la aplicación
export function DarkModeProvider({ children }) {
  // Estado local para rastrear si el modo oscuro está habilitado (inicialmente en false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Muestra el valor de isDarkMode y toggleDarkMode en la consola
/*   console.log("isDarkMode", isDarkMode);
  console.log("toggleDarkMode", toggleDarkMode); */

  // Proporciona el contexto DarkModeContext a los componentes hijos
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
