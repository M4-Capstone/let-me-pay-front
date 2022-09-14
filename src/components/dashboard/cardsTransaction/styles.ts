import styled, {css} from "styled-components";

const medias = [
    {
        break: 280,
        width: 90
    },
    {
        break: 768,
        width: 100
    },
]

export const StyledSection = styled.section`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            width: ${media.width}%;
        }
    `)} 
`

export const StyledDiv = styled.div`
    display: flex;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 60px;
`

export const StyledDivUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const StyledUserName = styled.h5`
    font-size: 16px;
    font-weight: 500;

`

export const StyledUserEmail = styled.h5`
    font-size: 12px;
    font-weight: 500;
    font-style: italic;
`

export const StyledDivAmount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledMethod = styled.h5`
    font-size: 12px;
    font-weight: 500;
    font-style: italic;
    align-self: center;
`


