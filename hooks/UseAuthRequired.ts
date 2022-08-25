import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuthRequired() {
    const { push } = useRouter()
    const { data, status } = useSession()
    
    useEffect(() => {
        if(status === 'unauthenticated')
            push('/')
    }, [status, push])
    
    return data
}