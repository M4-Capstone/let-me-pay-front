import { ButtonTransaction, DivIcon, StyledSection } from "./styles"
import { TbEdit } from "react-icons/tb" 
import UserInfo from "./components/userInfo"
import UserAddress from "./components/addresInfo"

const UserDetails = ()=>{

    return(
        <StyledSection>

            <DivIcon><TbEdit size={30}/></DivIcon>

            <UserInfo/>

            <UserAddress/>

            <ButtonTransaction>TRANSAÇÃO</ButtonTransaction>

        </StyledSection>
    )
}

export default UserDetails