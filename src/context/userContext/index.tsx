import React, { createContext, useState } from "react";
import { IUser } from "../../interfaces/interfaces";

type Props = {
    children: React.ReactNode
};


export const UserContext = createContext({})

export const UserProvider = ({children}:Props)=>{
    const [user, setUser] = useState({
        documentId: "48662238807",
        name: "Antoniel Mariano",
        email: "antonielcamposm@gmail.com",
        isActive: true,
        createdAt: "2022-09-11T03:06:26.439Z",
        updatedAt: "2022-09-11T03:06:44.791Z",
        address: {
            id: "25f2641a-a39f-4c0d-8029-1c05eb0b933f",
            neighbourhood: "Livia",
            zipCode: "18614024",
            street: "Roque Lardo",
            number: "218",
            city: "Botucatu",
            state: "SP"
        },
        wallet: {
            id: "a94313da-85cd-450f-9b15-463ec73a954e",
            amount: "15000.00",
            createdAt: "2022-09-11T03:06:26.297Z",
            updatedAt: "2022-09-11T03:06:26.297Z"
        }
    })

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}