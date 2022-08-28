import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getToken } from 'next-auth/jwt'

export function useAuthRequired() {
    const { push, pathname } = useRouter()
    const { data, status } = useSession({ 
        onUnauthenticated() {
            push('/401')    
        },
        required: true
    })
    
    useEffect(() => {
        if(status === "loading") {
            push(`/loading?route=${ pathname}`)
        }
    }, [status, push, pathname])
    
    return { session: data!, status, authenticated: status === 'authenticated' }
}