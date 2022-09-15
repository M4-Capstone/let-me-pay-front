import styled, {css} from "styled-components";

const medias = [
    {
        break: 280,
        width: 90
    },
    {
        break: 768,
        width: 50
    },
]


export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    min-width: 270px;
    border-radius: 20px;
    height: 480px;
    background-color: white;
    gap: 20px;
    ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            width: ${media.width}%;
        }
    `)} 
 
`

export const DivIcon = styled.div`
    align-self: flex-end;
    margin-right: 20px;
    margin-top: 10px;
    button{
        background-color: transparent;
    }
`

export const ButtonTransaction = styled.button`
    width: 80%;
    max-width: 300px;
    align-self: center;
    padding: 5px;
    height: 40px;
    margin-top: 40px;
    border-radius: 7px;
    background-color: #94BA93;
    color: white;
`
