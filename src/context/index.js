'use client';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";





export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [sideBarOpen, setSideBarOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false);
    const [submit, setSubmit]= useState(false)

    const {status} = useSession();
    const pathName = usePathname();

    const router = useRouter();

    useEffect(() => {
     if(status === 'unauthenticated' && (pathName.includes('/' || '/products' || '/visitors'))){
        router.push('/Unauth-page')
     }
    }, [status])
    
    
    return <GlobalContext.Provider value={{sideBarOpen, setSideBarOpen, isMobile, setIsMobile,submit, setSubmit}}>
        {children}
    </GlobalContext.Provider>
}