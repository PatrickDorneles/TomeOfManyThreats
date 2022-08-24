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
        <main ref={main} className="relative min-h-screen bg-base-100">
            <NoSsr>
              <section className="absolute top-4 flex w-full items-center pl-6">
                <ContentSearchBar />
                <nav id="GlobalButtonTray" className="absolute right-0 flex w-min items-center gap-4 rounded-l-full bg-neutral px-4 py-2">
                  <label className={`swap swap-rotate rounded-full ${theme === Theme.LIGHT && 'swap-active'}`}>
                    <input type="checkbox" onChange={switchTheme} checked={theme === Theme.LIGHT} />
                    <Sun className='swap-on h-10 w-10 text-neutral-content' />
                    <Moon className='swap-off h-10 w-10 text-neutral-content' />
                  </label>
                  { status === 'authenticated' && (
                    <button className="rounded-full" onClick={clickSignOut}>
                      <SignOut className="h-10 w-10 text-neutral-content" />
                    </button>
                  )}
                </nav>
              </section>
            </NoSsr>
            {children}
        </main>
    </>
}