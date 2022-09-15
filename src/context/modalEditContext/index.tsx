import  { createContext, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}

interface IModalContextType {
    showModalEdit: boolean;
    setShowModalEdit: (newState: boolean) => void;
}

const defaultValue = {
  showModalEdit: false
}

export const ModalEditContext = createContext(defaultValue as IModalContextType);
export const ModalEditProvider = ({ children }: IProps) => {
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <ModalEditContext.Provider
      value={{
        showModalEdit,
        setShowModalEdit
      }}
    >
      {children}
    </ModalEditContext.Provider>
  );
};
