import useLocalStorage from "@rehooks/local-storage"
import { createContext, FC, PropsWithChildren, useEffect, useRef } from "react"
import { Theme } from "types/Theme"

type ContextType = {
    theme: Theme,
    setTheme(theme: Theme): void
}

export const ThemeContext = createContext<ContextType>({
    theme: Theme.LIGHT,
    setTheme() {}
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", Theme.LIGHT)
    
    
    useEffect(() => {
        switch(theme) {
          case Theme.LIGHT: 
            document.body?.setAttribute('data-theme', theme)
            break
          case Theme.DARK:  
            document.body?.setAttribute('data-theme', theme)
            break
        }
      }, [theme]);
    
    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}