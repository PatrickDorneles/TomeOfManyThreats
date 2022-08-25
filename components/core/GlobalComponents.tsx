import { FC, PropsWithChildren } from "react";
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