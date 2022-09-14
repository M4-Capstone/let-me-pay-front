import { ReactNode } from "react";
import { UserProvider } from "./userContext";

type Props = {
    children: ReactNode
};

export const Providers = ({children}:Props)=>{
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
