import styled, { css } from "styled-components";
const medias = [
    {
        break: 280,
        flexDirection: "column",
        alignItems: "unset",
        justifyContent: "unset",
    },
    {   
        break: 768,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
]

export const StyledDiv = styled.div`
    display: flex;
    width: 80%;
    align-self: center;
    flex-direction: column;
    height: 88px;
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
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    gap: 10px;
`

interface IProps{
    showData:boolean
}

export const BalanceDiv = styled.div<IProps>`
    display: flex;
    justify-content: center;
    gap: 10px;
    ${medias.map(media=> css`
        @media(min-width: ${media.break}px){
            align-items: ${media.alignItems};
            justify-content: ${media.justifyContent};
        }
    `)}

    div{
        background-color:  ${({showData})=> showData ? "#C9FFC9": "transparent"};
        border-radius: 5px;
        height: 25px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
`