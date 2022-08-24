import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"


export default function LoadingPage() {
    const { status } = useSession()
    const { push } = useRouter()
    
    useEffect(() => {
        if(status === 'authenticated') {
            push('dashboard')
        }
        
        if(status === 'unauthenticated') {
            push('/')
        }
    }, [status, push])

    return <>
        <div className="
            grid
            h-screen
            place-items-center
        ">
            <span className="animate-bounce text-5xl">🐲</span>
        </div>
    </>
}