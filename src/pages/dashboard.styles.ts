import styled, { css } from "styled-components";

const medias = [
    {
        break: 280,
        flexDirection: "column",
        alignItems: "center",
    },
    {
        break: 768,
        flexDirection: "row",
        alignItems: "unset",
    },
]

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            flex-direction: ${media.flexDirection};
            align-items: ${media.alignItems};
        }
    `)}
`