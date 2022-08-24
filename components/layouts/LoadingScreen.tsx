import { useSession } from "next-auth/react"
import { FC, PropsWithChildren } from "react"

type Props = PropsWithChildren

export const AuthLoadingScreen: FC = ({ children }: Props) => {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })
      
    if (status === "loading") {
      return <div className="flex flex-1 items-center justify-center">
        <span className="animate-bounce text-5xl">🐲</span>
      </div>
    }
      
    return <>
        {children}
    </>
}