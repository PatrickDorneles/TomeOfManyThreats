import useLocalStorage from "@rehooks/local-storage";
import { Moon, SignOut, Sun } from "phosphor-react";
import { FC, PropsWithChildren, useCallback, useContext, useEffect, useRef } from "react";
import { Theme } from "types/Theme";
import dynamic from 'next/dynamic'  
import NoSsr from "./NoSsr";
import { signOut, useSession } from "next-auth/react";
import { ContentSearchBar } from "./ContentSearchBar";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeContext } from "contexts/ThemeContext";
import { Navbar } from "./Navbar";

type Props = PropsWithChildren

export const GlobalComponents: FC<Props> = ({ children }) => {
  
    return <>
        <main className="relative flex min-h-screen flex-col bg-base-100">
            <Navbar />
            {children}
        </main>
    </>
}