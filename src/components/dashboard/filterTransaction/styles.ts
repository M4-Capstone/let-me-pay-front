import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;
   
`
interface IProps{
    selected: boolean
}

export const StyledButton = styled.button<IProps>`
    font-size: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    background-color:${({selected})=> selected ? "white" : "#94BA93"};
    color: ${({selected})=> selected ? "#94BA93" : "white"};
    transition: 0.3s;
    font-weight: bold;
    &:hover{
        transition: 0.3s;
        background-color: #85cc83;
        color: white;
    }
`