// import { useEffect } from "react";
// import { themes } from "../config/themes";


// export function useTheme(themeName) {

//   useEffect(() => {

//     const theme = themes[themeName];

//     if (!theme) return;


//     Object.entries(theme).forEach(
//       ([key, value]) => {
//         document.documentElement.style.setProperty(
//           `--${key}`,
//           value
//         );
//       }
//     );


//   }, [themeName]);

// }

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
};