import useLocalStorage from "@rehooks/local-storage";
import { Moon, Sun } from "phosphor-react";
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { Theme } from "types/Theme";
import dynamic from 'next/dynamic'  
import NoSsr from "./NoSsr";

type Props = PropsWithChildren

export const WithTheme: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", Theme.LIGHT)
    const main = useRef<HTMLDivElement>(null)
    
    const themeCheck = useCallback(() => {
        switch(theme) {
          case Theme.LIGHT: 
            main.current?.setAttribute('data-theme', theme)
            break
          case Theme.DARK:  
            main.current?.setAttribute('data-theme', theme)
            break
        }
    }, [theme])
    
    const switchTheme = useCallback(() => {
      switch(theme) {
        case Theme.LIGHT: setTheme(Theme.DARK); break
        case Theme.DARK: setTheme(Theme.LIGHT); break
      }
    }, [theme, setTheme])
    
    useEffect(() => {
        themeCheck();
    }, [themeCheck]);
    
    
    return <>
        <main ref={main} className="bg-base-100 min-h-screen relative">
            <NoSsr>
              <label className={`swap swap-rotate absolute top-4 right-6 ${theme === Theme.LIGHT && 'swap-active'}`}>
                <input type="checkbox" onChange={switchTheme} checked={theme === Theme.LIGHT} />
                <Sun className='w-10 h-10 text-primary swap-on' />
                <Moon className='w-10 h-10 text-primary swap-off' />
              </label>
            </NoSsr>
            {children}
        </main>
    </>
}