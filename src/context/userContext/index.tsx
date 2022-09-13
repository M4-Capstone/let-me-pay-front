import { createContext,ReactNode, useState } from "react";
import { IUser } from "../../interfaces/interfaces";

interface IProps {
    children: ReactNode
};

interface IUserContextType{
    user: IUser
    setUser: (newState: IUser)=> void
}


export const UserContext = createContext({} as IUserContextType)
export const UserProvider = ({children}:IProps)=>{
    const [user, setUser] = useState<IUser>({} as IUser)

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}