import React, { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { FaSearch } from "react-icons/fa";
import { ModalTransactionStyled } from "./style";
import {
  ButtonModalDeposito,
  ButtonModalSaque,
  ButtonModalTransferencia,
} from "../buttons";

const ModalTransaction = () => {
  const { modalTransaction, setModalTransaction, modalButton, transferSubmit } =
    useContext(UserContext);

  return (
    <ModalTransactionStyled display={modalTransaction}>
      <div className="container-modal">
        <div className="header-modal">
          <p>{modalButton}</p>
          <button onClick={() => setModalTransaction("none")}>X</button>
        </div>

        <div className="main-modal">
          <h2>transição</h2>
          <ButtonModalDeposito />
          <ButtonModalSaque />
          <ButtonModalTransferencia />
        </div>

        <div className="footer-modal">
          <h3> Email/CPF</h3>
          <form className="input-modal" onSubmit={(e) => transferSubmit(e)}>
            <input type="text" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </ModalTransactionStyled>
  );
};

export default ModalTransaction;
