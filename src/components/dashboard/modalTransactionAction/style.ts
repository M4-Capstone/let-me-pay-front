import styled from "styled-components";

interface IModalProps {
  display: boolean;
}

export const ModalTransactionActionContainer = styled.div<IModalProps>`
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: black;
  background: rgba(0, 0, 0, 0.77);
  z-index: 1000;
`;

export const ModalContainer = styled.aside<IModalProps>`
  max-width: 406px;
  min-width: 248px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  position: absolute;
  z-index: -1;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  padding: 20px 20px;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p.recipient {
    span {
      font-weight: bold;
    }
  }

  hr {
    margin: 10px 0;
    width: 100%;
    height: 1px;
    border: 1px solid;
    border-color: rgba(var(--secondary-color), 0.25);
  }

  div.inputContainer {
    background-color: rgb(var(--primary-color));
    padding: 8px 10px;
    border-radius: 8px;

    display: flex;
    gap: 8px;

    @media (max-width: 480px) {
      &:focus-within {
        outline: rgb(var(--secondary-color));
      }
    }

    input {
      width: 10ch;
      background-color: transparent;
      outline: none;

      font-size: 14px;
    }
  }

  span.transferAdvice {
    font-size: 12px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonEnviar = styled.button`
  width: 100%;
  padding: 10px;

  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;

  background-color: rgb(var(--secondary-color));
  border-radius: 10px;
`;
