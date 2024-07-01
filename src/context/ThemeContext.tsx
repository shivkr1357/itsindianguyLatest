"use client";
import { createContext, useContext, useState } from "react";

export interface ThemeStateValues {
   theme: string;
   toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeStateValues | undefined>(undefined);

const AppMainProvider = ({ children }: any) => {
   const [theme, setTheme] = useState("dark");

   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
   };

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default AppMainProvider;

export const useThemeState = (): ThemeStateValues => {
   const context = useContext(ThemeContext);
   if (context === undefined) {
      throw new Error("useThemeState must be used within a ThemeProvider");
   }
   return context;
};
