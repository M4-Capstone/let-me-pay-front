import styled from "styled-components";

export type ModalProps = {
  display: string;
};

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: black;
  background: rgba(0, 0, 0, 0.77);
  position: absolute;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTransactionStyled = styled.div<ModalProps>`
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: black;
  background: rgba(0, 0, 0, 0.77);
  z-index: 1000;

  .container-modal {
    max-width: 406px;
    min-width: 248px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    position: absolute;
    z-index: -1;
    display: ${(props) => props.display};
    flex-direction: column;
    padding: 20px 20px;
    gap: 2rem;
  }

  h2,
  h3 {
    font-size: 14px;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
  }

  .header-modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .footer-modal {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input-modal {
    max-width: 293px;
    min-width: 224px;
    width: 100%;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #c9ffc8;
    padding: 10px;
    border-radius: 15px;
    gap: 10px;
    margin: 10px 0;
  }

  .input-modal > input {
    background: none;
    border: none;
  }
  .input-modal > button {
    background: none;
  }
`;
