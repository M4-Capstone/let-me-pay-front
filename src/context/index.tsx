import { ReactNode } from "react";
import { ModalEditProvider } from "./modalEditContext";
import { UserProvider } from "./userContext";

type Props = {
    children: ReactNode
};

export const Providers = ({children}:Props)=>{
    return (
        <UserProvider>
            <ModalEditProvider>
                {children}
            </ModalEditProvider>
        </UserProvider>
    )
}
