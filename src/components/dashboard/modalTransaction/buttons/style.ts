import styled from "styled-components";

type ButtonProps = {
  selected: string;
};

const ButtonModalStyle = styled.button`
  width: 109px;
  height: 25px;
  background: #c9ffc8;
  border-radius: 3px;
  font-size: 10px;
  text-transform: uppercase;
  color: black;
  font-weight: bold;

  .disabled {
    width: 109px;
    height: 25px;
    background: #c9ffc8;
    border-radius: 3px;
    font-size: 10px;
    text-transform: uppercase;
    color: black;
    font-weight: bold;
  }

  .activated {
    width: 109px;
    height: 25px;
    background-color: #94ba93;
    border-radius: 3px;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }
`;

export default ButtonModalStyle;
