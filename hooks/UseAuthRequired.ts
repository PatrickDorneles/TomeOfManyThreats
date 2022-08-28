import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuthRequired() {
    const { push, pathname } = useRouter()
    const { data, status } = useSession({ 
        onUnauthenticated() {
            push('/403')    
        },
        required: true
    })
    
    useEffect(() => {
        if(status === "loading") {
            push(`/loading?route=${ pathname}`)
        }
    }, [status, push, pathname])
    
    return { session: data, status }
}