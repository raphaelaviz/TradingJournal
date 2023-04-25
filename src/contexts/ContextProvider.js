import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// Creates the Context Provider to share state variables across the components.
// At the moment the Context is sharing only variables responsible for visuals
// like the theme, screen size and whether the sidebar is displayed or not, but
// more variables will be added here as the project continues. 

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };


  return (

    <StateContext.Provider value={{ currentMode, activeMenu, screenSize, setScreenSize, setActiveMenu, setCurrentMode, setMode, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);