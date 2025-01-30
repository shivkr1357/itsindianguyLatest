"use client";
import { createContext, useContext, useState } from "react";

export interface ThemeStateValues {
   customTheme: string;
   toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeStateValues | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component that wraps your app and makes theme available to all child components
 */
const ThemeProvider = ({ children }: ThemeProviderProps) => {
   const [customTheme, setCustomTheme] = useState("light");

   const toggleTheme = () => {
      setCustomTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
   };

   return (
      <ThemeContext.Provider value={{ customTheme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;

export const useThemeState = (): ThemeStateValues => {
   const context = useContext(ThemeContext);
   if (context === undefined) {
      throw new Error("useThemeState must be used within a ThemeProvider");
   }
   return context;
};
