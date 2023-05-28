import { createContext, useContext } from "react";
import { TThemeContent } from "../../utils/types";
import styles from '../../components/app/app.module.css';

export const ThemeContext = createContext<TThemeContent>({
  theme: styles.light,
  toggleTheme: () => {},
});

export const useGlobalContext = () => useContext(ThemeContext)
