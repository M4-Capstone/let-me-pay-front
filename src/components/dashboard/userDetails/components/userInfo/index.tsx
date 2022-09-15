import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../context/userContext"
import { BalanceDiv, DivInfo, DivName, StyledDiv } from "./styles"
import { BiShow,BiHide } from "react-icons/bi"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


interface IProps{
    showData:boolean 
}


const UserInfo = ({showData}:IProps)=>{

    const {user} = useContext(UserContext)
    const [showInfoUser, setShowInfoUser] = useState(false)

    const toggleInfo = ()=>{
        setShowInfoUser(!showInfoUser)
    }
    const amountInBrl = parseFloat(user.wallet?.amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })



    return(
        <StyledDiv>

            <DivName>
                <h4>{showData ? user?.name : <Skeleton height={20}/>}</h4>
                <h5>{showData ? user?.email : <Skeleton height={16}/>}</h5>
            </DivName>

            <DivInfo>

                {showData ? <h5>{showInfoUser ? user?.documentId : user?.idOcult}</h5> : <Skeleton width={88} height={16}/>}

                <BalanceDiv showData={showData ? true : false}>

                    <div>
                        {showData ? <h5>{ showInfoUser ?  amountInBrl : "R$ ********"}</h5> : <Skeleton width={100} height={25}/>}
                    </div> 
                    
                    <button onClick={()=> toggleInfo()}>{showInfoUser ? <BiHide size={20}/> : <BiShow size={20}/>}</button>
                    
                </BalanceDiv>           
            </DivInfo>

        </StyledDiv>
    )
}

export default UserInfo