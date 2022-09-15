import React, { createContext, ReactNode, useState } from "react";

import { IUser } from "../../interfaces/interfaces";

interface IProps {
  children: ReactNode;
}

interface IUserContextType {
  modalTransaction: string;
  setModalTransaction: (newState: string) => void;
  user: IUser;
  setUser: (newState: IUser) => void;
  modalButton: string;
  setModalButton: (newState: string) => void;
  keyword: string;
  setKeyword: (newState: string) => void;
  transferSubmit: (e: React.FormEvent) => void;
  modalTRActionOpen: boolean;
  setModalTRActionOpen: (value: boolean) => void;
}

export const UserContext = createContext({} as IUserContextType);
export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const [modalTransaction, setModalTransaction] = useState<string>("none");

  const [modalButton, setModalButton] = useState<string>("");

  const [keyword, setKeyword] = useState<string>("");

  const [modalTRActionOpen, setModalTRActionOpen] = useState<boolean>(false);

  const transferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalTransaction("none");
    setModalTRActionOpen(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        modalTransaction,
        setModalTransaction,
        modalButton,
        setModalButton,
        keyword,
        modalTRActionOpen,
        setModalTRActionOpen,
        setKeyword,
        transferSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
