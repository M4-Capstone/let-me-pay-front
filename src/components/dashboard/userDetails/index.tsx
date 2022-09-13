import { ButtonTransaction, DivIcon, StyledSection } from "./styles"
import { TbEdit } from "react-icons/tb" 
import UserInfo from "./components/userInfo"
import UserAddress from "./components/addresInfo"

interface IProps{
    showData:boolean 
}

const UserDetails = ({showData}:IProps)=>{

    return(
        <StyledSection>

            <DivIcon><TbEdit size={30}/></DivIcon>

            <UserInfo showData={showData}/>

            <UserAddress showData={showData}/>

            <ButtonTransaction>TRANSAÇÃO</ButtonTransaction>

        </StyledSection>
    )
}

export default UserDetails