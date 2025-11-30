import React from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <button className='w-10 h-10 hover:bg-[var(--gradient-to)] transition-colors duration-400 focus:bg-[var(--gradient-to)] rounded-full flex items-center justify-center'
         onClick={toggleTheme}
      >
         {theme === 'light' ? <Moon className='w-5 h-5' /> : <Sun className='w-5 h-5' />}
      </button>
   );
};
