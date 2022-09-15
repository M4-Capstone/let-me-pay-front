import  styled, { css }  from "styled-components";

const medias = [
    {
        break: 280,
        margin:20,
        gap: 10,
    },
    {
        break: 500,
        margin: 115,
        gap: 0,
    },
]

export const StyledHeader = styled.header`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;

    ${medias.map(media => css`
    @media(min-width: ${media.break}px){
        gap: ${media.gap}px;
    }`)}

    img{
        width: 120px;
        ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            margin-left: ${media.margin}px;
        }`)}
       
    }

`
export const ThemeButton = styled.button`
  display: flex;
  color: white;
  background-color: #94BA93;
  padding: 7px 25px;
  border-radius: 5px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  ${medias.map(media => css`
    @media(min-width: ${media.break}px){
        margin-right: ${media.margin}px;
    }`)}
`
