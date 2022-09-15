import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../context/userContext";
import { FaSearch } from "react-icons/fa";
import { ModalTransactionStyled } from "./style";
import {
  ButtonModalContinuar,
  ButtonModalDeposito,
  ButtonModalSaque,
  ButtonModalTransferencia,
} from "../buttons";

const ModalTransaction = () => {
  const { keyword, setKeyword, modalTransaction, setModalTransaction, modalButton, transferSubmit } =
    useContext(UserContext);

  useEffect(() => {
    function handleESCCloseModalEvent(e: KeyboardEvent) {
      const keyPressed = e.key;
      if (keyPressed === "Escape") {
        setModalTransaction("none");
      }
    }

    document.addEventListener("keydown", (e) => handleESCCloseModalEvent(e));
    return document.removeEventListener("keydown", (e) => handleESCCloseModalEvent(e));
  }, []);

  return (
    <ModalTransactionStyled display={modalTransaction}>
      <div className="container-modal">
        <div className="header-modal">
          <p>Escolha uma ação:</p>
          <button onClick={() => setModalTransaction("none")}>X</button>
        </div>

        <div className="main-modal">
          <ButtonModalDeposito />
          <ButtonModalSaque />
          <ButtonModalTransferencia />
        </div>

        {modalButton && <div className="footer-modal">
          {(modalButton === "deposit" || modalButton === "withdraw") ? <ButtonModalContinuar /> : <><h3> Email/CPF</h3>
          <form className="input-modal" onSubmit={(e) => transferSubmit(e)}>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <button type="submit">
              <FaSearch />
            </button>
          </form></>}
        </div>}
      </div>
    </ModalTransactionStyled>
  );
};

export default ModalTransaction;
