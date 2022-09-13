import styled, {css} from "styled-components";

const medias = [
    {
        break: 280,
        justifyContent: "space-around"
    },
    {   
        break: 768,
        justifyContent: "space-between"
    },
]

export const StyledDiv = styled.div `
    display: flex;
    align-self: center;
    width: 80%;
    align-items: center;
    margin-top: 40px;

    ${medias.map(media=> css`
        @media(min-width: ${media.break}px){
           justify-content: ${media.justifyContent};
        }
    `)}
`

export const FirstDivAddress =styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SecondDivAddress =styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InfoAddress = styled.h5`
    color: #8A8A8A;
    font-weight: 500;
`