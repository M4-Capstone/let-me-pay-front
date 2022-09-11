import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { StyledSection } from "./styles"



const UserDetails = ()=>{

    const {user}:any = useContext(UserContext)

    const{
        documentId,
        name,
        email,
        isActive,
        createdAt,
        updatedAt,
        address,
        wallet} = user

    return(
        <StyledSection>

        </StyledSection>
    )
}

export default UserDetails