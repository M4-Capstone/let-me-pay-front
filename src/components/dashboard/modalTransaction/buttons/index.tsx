import React, { Children, ReactNode, useContext } from "react";
import { UserContext } from "../../../../context/userContext";

import ButtonModalStyle from "./style";

export const ButtonModalDeposito = () => {
  const { modalButton, setModalButton } = useContext(UserContext);

  return (
    <ButtonModalStyle
      className={modalButton === "deposit" ? "activated" : "disabled"}
      onClick={() => setModalButton("deposit")}
    >
      DEPOSITO
    </ButtonModalStyle>
  );
};

export const ButtonModalSaque = () => {
  const { modalButton, setModalButton } = useContext(UserContext);

  return (
    <ButtonModalStyle
      className={modalButton === "withdraw" ? "activated" : "disabled"}
      onClick={() => setModalButton("withdraw")}
    >
      SAQUE
    </ButtonModalStyle>
  );
};

export const ButtonModalTransferencia = () => {
  const { modalButton, setModalButton } = useContext(UserContext);

  return (
    <ButtonModalStyle
      className={modalButton === "transfer" ? "activated" : "disabled"}
      onClick={() => setModalButton("transfer")}
    >
      TRANSFERENCIA
    </ButtonModalStyle>
  );
};

export const ButtonModalContinuar = () => {
  const { transferSubmit } = useContext(UserContext);

  return (
    <ButtonModalStyle
      className="proceedBtn"
      onClick={(e) => transferSubmit(e)}
    >
      CONTINUAR
    </ButtonModalStyle>
  );
};
