import { ThemeContext } from "contexts/ThemeContext";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Sun, Moon, SignOut } from "phosphor-react";
import { FC, useCallback, useContext } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Theme } from "types/Theme";
import { PostSearchBar } from "./ContentSearchBar";
import NoSsr from "./NoSsr";
import { ProfileAvatar } from "./ProfileAvatar";

export const Navbar: FC = () => {
    const { setTheme, theme } = useContext(ThemeContext)
    const { status } = useSession()
    const { push } = useRouter()  
    
    const switchTheme = useCallback(() => {
      const themeSwitchMap = {
        [Theme.DARK]: Theme.LIGHT,
        [Theme.LIGHT]: Theme.DARK
      }
      
      setTheme(themeSwitchMap[theme])
    }, [theme, setTheme])
    
    
    async function clickSignOut() {
      await signOut({ redirect: false })
      push('/')
    }
    
    
    return <NoSsr>
        <nav id="NavBar" className="navbar relative m-2 flex w-[calc(100%-16px)] items-center justify-between gap-2 rounded bg-base-300 px-4 py-1">
          <PostSearchBar />
          <section id="ButtonTray" className="flex h-full flex-1 justify-end gap-4">
            <label className={`swap swap-rotate rounded-full ${theme === Theme.LIGHT && 'swap-active'}`}>
              <input type="checkbox" onChange={switchTheme} checked={theme === Theme.LIGHT} />
              <Sun className='swap-on h-7 w-7 text-base-content' />
              <Moon className='swap-off h-7 w-7 text-base-content' />
            </label>
            { status === 'authenticated' && (
              <ProfileAvatar />
            )}
          </section>
        </nav>
      </NoSsr>
}