import { useAuthRequired } from "hooks/UseAuthRequired";
import { NextPage } from "next";
import { FC } from "react";

export function withAuthOnly<Props>(PageOrComponent: NextPage<Props> | FC<Props>) {
    return function AuthOnlyComponent(props: Props) {
        const { authenticated } = useAuthRequired()
        
        if(!authenticated) return <></>
        
        return <> 
            <PageOrComponent {...props} />
        </>
    }
} 