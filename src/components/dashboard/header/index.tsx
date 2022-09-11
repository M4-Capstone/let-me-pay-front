import { StyledHeader } from "./styles"
import { ThemeButton } from "./styles"
import { toast } from "react-hot-toast"
import { useHistory } from "react-router-dom"
import logo from "../../../assets/img/logo.png"

const Header = () =>{

    const history = useHistory()

    const logout = () =>{
        localStorage.clear()
        setTimeout(()=>{
            history.push("/login")
        }, 1500)
        toast.success('Deslogado com sucesso!')

    }

    return(
        <StyledHeader> 
            
            <img src={logo} alt="logo"/>

            <ThemeButton  onClick={() => logout()}>SAIR</ThemeButton>

        </StyledHeader>
    )
}

export default Header 