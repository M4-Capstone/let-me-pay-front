import styled, { css } from "styled-components";

const medias = [
    {
        break: 280,
        flexDirection: "column",
        alignItems: "center",
        width: 90
    },
    {
        break: 768,
        flexDirection: "row",
        alignItems: "unset",
        width: 50
    },
]

export const StyledMain = styled.main`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;

    ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            flex-direction: ${media.flexDirection};
            align-items: ${media.alignItems};
        }
    `)}
`

export const StyledSection = styled.section`
    ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            width: ${media.width}%;
        }
    `)}  
    
`