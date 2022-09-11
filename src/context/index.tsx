import { UserProvider } from "./userContext";

type Props = {
    children: React.ReactNode
};

export const Providers = ({children}:Props)=>{
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
