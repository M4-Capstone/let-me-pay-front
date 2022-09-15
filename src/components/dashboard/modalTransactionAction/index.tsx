import React, { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import { ButtonEnviar, Footer, Header, MainContent, ModalContainer, ModalTransactionActionContainer } from "./style";
import api from '../../../services/api';
import toast from "react-hot-toast";

type PossibleActions = "transfer" | "withdraw" | "deposit";

function actionToString(action: string): string {
  switch (action) {
    default:
    case 'transfer': {
      return "Transferência"
    }
    case 'withdraw': {
      return "Saque"
    }
    case 'deposit': {
      return 'Depósito'
    }
  }
}

interface IModalTransactionActionProps {
  reloadHistory: () => void
}

const ModalTransactionAction: React.FC<IModalTransactionActionProps> = ({ reloadHistory }) => {
  const { user, keyword, setKeyword, modalButton, modalTRActionOpen, setModalTRActionOpen, setModalTransaction } = useContext(UserContext);
  const [receiverData, setReceiverData] = useState<Record<string, any>>({});
  const [inputValue, setInputValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const modalContent = {
    transfer: (ref: React.MutableRefObject<any>, state: number, setState: (value: number) => void) => (
      <>
        <p className="recipient"><span>Você está enviando dinheiro para:</span><br/>{receiverData?.name || "..."}</p>
        <hr />
        <div className="inputContainer" onClick={() => ref.current.focus()}>
          <label htmlFor="transferInput">R$</label>
          <input
            type="number"
            id="transferInput"
            ref={ref}
            min={1}
            value={state}
            onChange={(e) => setState(e.target.valueAsNumber)}
          />
        </div>
        <span className="transferAdvice">Valor a transferir</span>
      </>
    ),
    withdraw: (ref: React.MutableRefObject<any>, state: number, setState: (value: number) => void) => (<>
      <p className="recipient"><span>Você está retirando dinheiro</span></p>
      <hr />
      <div className="inputContainer" onClick={() => ref.current.focus()}>
        <label htmlFor="withdrawInput">R$</label>
        <input
          type="number"
          id="withdrawInput"
          ref={ref}
          min={1}
          value={state}
          onChange={(e) => setState(e.target.valueAsNumber)}
        />
      </div>
      <span className="transferAdvice">Valor a sacar</span>
    </>),
    deposit: (ref: React.MutableRefObject<any>, state: number, setState: (value: number) => void) => (<>
      <p className="recipient"><span>Você está depositando dinheiro</span></p>
      <hr />
      <div className="inputContainer" onClick={() => ref.current.focus()}>
        <label htmlFor="depositInput">R$</label>
        <input
          type="number"
          id="depositInput"
          ref={ref}
          min={1}
          value={state}
          onChange={(e) => setState(e.target.valueAsNumber)}
        />
      </div>
      <span className="transferAdvice">Valor a depositar</span>
    </>),
  };

  async function handleSubmitTransfer(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {    
    let reqBody: Record<string, any>;
    switch (modalButton) {
      default:
      case 'transfer': {
        reqBody = {
          amount: inputValue,
          receiverDocumentId: receiverData.documentId,
          senderDocumentId: user.documentId,
        };
        break;
      }
      case 'withdraw': {
        reqBody = {
          amount: inputValue,
          documentId: user.documentId,
        };
        break;
      }
      case 'deposit': {
        reqBody = {
          amount: inputValue,
          documentId: user.documentId,
        };
        break;
      }
    }

    const transacionar = api.post(`transactions/${modalButton}`, reqBody, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@tokenLMP')}`
      }
    });

    toast.promise(transacionar, {
      loading: (() => {
        setIsLoading(true);
        return "Efetuando transação...";
      })(),
      success: ({ data }) => {
        reloadHistory();
        setModalTRActionOpen(false);
        setIsLoading(false);
        return "Transação bem sucedida 🤓";
      },
      error: (error) => {
        setIsLoading(false);
        if (modalButton === 'transfer' && error.request.status === 403) {
          return JSON.parse(error.request.response).message;
        } else {
          return "Algo deu errado.";
        }
      }
    })
  }

  useEffect(() => {
    (modalButton === 'transfer') && api.get(`profile/${encodeURIComponent(keyword)}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@tokenLMP')}`
      }
    }).then(({data}) => {
      if (data.length === 0) throw new Error("Usuário não encontrado")
      else {
        if (!data[0]) throw new Error("Usuário não encontrado");
        else setReceiverData(data[0]);
      };
    }).catch((error) => {
        toast.error(error.message);
        setModalTRActionOpen(false);
        setModalTransaction("flex");
        setKeyword("");
    });
    
    function handleESCCloseModalEvent(e: KeyboardEvent) {
      const keyPressed = e.key;
      if (keyPressed === "Escape") {
        setModalTRActionOpen(false);
      }
    }

    document.addEventListener("keydown", (e) => handleESCCloseModalEvent(e));
    return document.removeEventListener("keydown", (e) => handleESCCloseModalEvent(e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalTransactionActionContainer display={modalTRActionOpen}>
      <ModalContainer display={modalTRActionOpen}>
        <Header>
          <h2>{actionToString(modalButton)}</h2>
          <button onClick={() => setModalTRActionOpen(false)}> X </button>
        </Header>
        <MainContent>{modalContent[modalButton as PossibleActions || 'transfer'](inputRef, inputValue, setInputValue)}</MainContent>
        <Footer><ButtonEnviar disabled={isLoading} onClick={handleSubmitTransfer}>Confirmar</ButtonEnviar></Footer>
      </ModalContainer>
    </ModalTransactionActionContainer>
  )
};

export default ModalTransactionAction;