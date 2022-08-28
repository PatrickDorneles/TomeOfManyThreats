import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"



const LoadingPage: NextPage = () => {
    const { query, push } = useRouter()
    const { status } = useSession()
    
    useEffect(() => {
        if(status == 'authenticated') {
            push(typeof query.route === 'string' ? query.route : '/dashboard')
        }
    }, [status, query, push])

    return <section className="absolute top-0 z-[999] grid h-screen w-screen place-items-center bg-base-100">
        <span className="animate-bounce text-2xl">🐲</span>
    </section>
}

export default LoadingPage