import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    width: 80%;
    align-self: center;
    flex-direction: column;
    border-bottom: 3px solid #C9FFC9;
    gap: 10px;
`

export const DivName = styled.div`
    h5{
        font-size: 13px;
        font-weight: 400;
        font-style: italic;
    }
    h4{
        
    }
    
`

export const DivInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const BalanceDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    div{
        background-color: #C9FFC9;
        border-radius: 5px;
        width: 100px;
        padding: 5px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
`