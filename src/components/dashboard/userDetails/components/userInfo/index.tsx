import { useContext, useState } from "react"
import { UserContext } from "../../../../../context/userContext"
import { BalanceDiv, DivInfo, DivName, StyledDiv } from "./styles"
import { BiShow,BiHide } from "react-icons/bi"

const UserInfo = ()=>{

    const {user} = useContext(UserContext)
    const [showInfo, setShowInfo] = useState(false)

    const toggleInfo = ()=>{
        setShowInfo(!showInfo)
    }

    const indexToOcult= [3,4,5,6,7,8]
    const idOcult = user?.documentId.split("")
    const amountInBrl = parseFloat(user.wallet.amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    for(let i = 0; i < indexToOcult.length; i++){
        idOcult[indexToOcult[i]] = "*"
    }

    return(
        <StyledDiv>

            <DivName>
                <h4>{user.name}</h4>
                <h5>{user.email}</h5>
            </DivName>

            <DivInfo>

                {showInfo ? <h5>{user?.documentId}</h5> : <h5>{idOcult}</h5>}

                <BalanceDiv>

                    <div>{showInfo ? <h5>{amountInBrl}</h5> : <h5>R$ ********</h5>}</div>
                    
                    <button onClick={()=> toggleInfo()}>{showInfo ? <BiHide size={20}/> : <BiShow size={20}/>}</button>
                    
                </BalanceDiv>           
            </DivInfo>

        </StyledDiv>
    )
}

export default UserInfo