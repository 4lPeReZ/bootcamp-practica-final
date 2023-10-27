import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";

function DarkModeToggle() {
  // Utilizamos el contexto DarkModeContext para acceder a los estados y funciones relacionados con el modo oscuro
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // Añadimos un efecto que se ejecuta cuando cambia el valor de isDarkMode
    /* console.log("isDarkMode", isDarkMode); */ // Muestra el valor actual de isDarkMode en la consola

    // Cambiamos las clases del body para aplicar o quitar los estilos del modo oscuro
    if (isDarkMode) {
      document.body.classList.add("dark-mode"); // Aplicamos los estilos del modo oscuro
    } else {
      document.body.classList.remove("dark-mode"); // Quitamos los estilos del modo oscuro
    }
  }, [isDarkMode]); // Este efecto se ejecuta cuando cambia isDarkMode

  return (
    <label>
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      Dark Mode
    </label>
  );
}

export default DarkModeToggle;
