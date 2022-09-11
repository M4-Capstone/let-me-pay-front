import styled, { css } from "styled-components";

const medias = [
    {
        break: 280,
        flexDirection: "column",
    },
    {
        break: 768,
        flexDirection: "row"
    },
]

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    height: calc(100vh - 80px);
    width: 100%;
    margin-top: 40px;

    ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            flex-direction: ${media.flexDirection};
        }
    `)}
`