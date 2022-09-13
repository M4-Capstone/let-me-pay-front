import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

export const RegisterFormStyle = styled.form`
  max-width: 352px;
  min-width: 340px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 1rem;
  text-align: left;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  h2 {
    font-size: 20px;
  }

  input {
    background-color: #c9ffc8;
    width: 310px;
    height: 30px;
    padding: 10px 15px;
    border-radius: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .address {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .address > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .address > div > input {
    width: 150px;
  }

  button {
    width: 200px;
    padding: 15px 0px;
    margin-top: 30px;
    background: #94ba93;
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }
`;
