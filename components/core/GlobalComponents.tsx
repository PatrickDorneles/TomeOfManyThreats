import useLocalStorage from "@rehooks/local-storage";
import { Moon, SignOut, Sun } from "phosphor-react";
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { Theme } from "types/Theme";
import dynamic from 'next/dynamic'  
import NoSsr from "./NoSsr";
import { signOut, useSession } from "next-auth/react";
import { ContentSearchBar } from "./ContentSearchBar";
import { useRouter } from "next/router";

type Props = PropsWithChildren

export const GlobalComponents: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", Theme.LIGHT)
    const main = useRef<HTMLDivElement>(null)
    const { status } = useSession()
    const { push } = useRouter()
    
    const switchTheme = useCallback(() => {
      const themeSwitchMap = {
        [Theme.DARK]: Theme.LIGHT,
        [Theme.LIGHT]: Theme.DARK
      }
      
      setTheme(themeSwitchMap[theme])
    }, [theme, setTheme])
    
    useEffect(() => {
      switch(theme) {
        case Theme.LIGHT: 
          main.current?.setAttribute('data-theme', theme)
          break
        case Theme.DARK:  
          main.current?.setAttribute('data-theme', theme)
          break
      }
    }, [theme, main]);
    
    async function clickSignOut() {
      await signOut({ redirect: false })
      push('/')
    }
    
    
    return <>
        <main ref={main} className="relative flex min-h-screen flex-col bg-base-100">
            <NoSsr>
              <nav id="NavBar" className="flex w-full items-center justify-between bg-base-300 py-1 pl-6">
                <ContentSearchBar />
                <section id="ButtonTray" className="flex h-full w-min items-center gap-4 self-end justify-self-end rounded-l-full px-4 py-2">
                  <label className={`swap swap-rotate rounded-full ${theme === Theme.LIGHT && 'swap-active'}`}>
                    <input type="checkbox" onChange={switchTheme} checked={theme === Theme.LIGHT} />
                    <Sun className='swap-on h-7 w-7 text-base-content' />
                    <Moon className='swap-off h-7 w-7 text-base-content' />
                  </label>
                  { status === 'authenticated' && (
                    <button className="rounded-full" onClick={clickSignOut}>
                      <SignOut className="h-7 w-7 text-base-content" />
                    </button>
                  )}
                </section>
              </nav>
            </NoSsr>
            {children}
        </main>
    </>
}