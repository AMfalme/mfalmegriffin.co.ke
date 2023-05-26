import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'


export default function DarkModeToggle () {
  
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("theme")) || false);

  
  
  function changeTheme() {
    if (isDark) { 
      setIsDark(false);
      localStorage.setItem("theme", JSON.stringify(false))
      console.log("run")
    }
    else {
      setIsDark(true)
      localStorage.setItem("theme", true)
    }
  }

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark') }
    else { document.body.classList.remove('dark')}
    
    
  }, [isDark]); 
  
  return (
      <Toggle
        checked={isDark}
        onChange={() => changeTheme()}
        icons={''}
        aria-label="Dark mode toggle"
      />
  )
}
