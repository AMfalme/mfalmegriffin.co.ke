import React, { useState, useEffect, useContext } from 'react'
import Toggle from 'react-toggle'
import { useMediaQuery } from "react-responsive";

import { ThemeContext, themes } from '../context/theme-context';


export default function DarkModeToggle () {
  
  const [isDark, setIsDark] = useState(false);

  
  
  function changeTheme() {
    isDark === false ? setIsDark(true) : setIsDark(false)
  }
  
  const theme = useContext(ThemeContext);
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]); 
  
  return (
    <ThemeContext.Provider value={"light"}>
      <Toggle
        checked={isDark}
        onChange={() => changeTheme()}
        icons={''}
        aria-label="Dark mode toggle"
      />  
    </ThemeContext.Provider>
  )
}
