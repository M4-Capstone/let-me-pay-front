import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;

  div {
    display: flex;
    max-width: 352px;
    min-width: 340px;
    width: 100%;
    height: 389px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding: 20px 15px;
  }

  .container {
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
  }
`;

export const StyledForm = styled.div`
  form {
    background-color: red;
    display: flex;
    width: 100%;
    height: 180px;
    flex-direction: column;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50px;
    gap: 5px;
  }

  input {
    background-color: #c9ffc8;
    width: 100%;
    height: 30px;
    padding: 10px 15px;
    border-radius: 15px;
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
