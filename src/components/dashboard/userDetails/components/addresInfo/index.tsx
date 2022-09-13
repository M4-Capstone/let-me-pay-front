import { useContext } from "react"
import { UserContext } from "../../../../../context/userContext"
import { FirstDivAddress, InfoAddress, SecondDivAddress, StyledDiv } from "./styles"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface IProps{
    showData:boolean 
}


const UserAddress = ({showData}:IProps)=>{

    const {user} = useContext(UserContext)
    const {address} = user

    return(
        <StyledDiv>

            <FirstDivAddress>
                <div>
                    <h5>CEP:</h5>
                    <InfoAddress>{showData ? address?.zipCode : <Skeleton height={16} width={90}/>}</InfoAddress>
                </div>

                <div>
                    <h5>Número:</h5>
                    <InfoAddress>{showData ? address?.number : <Skeleton height={16}  width={90}/>}</InfoAddress> 
                </div>

                <div>
                    <h5>Cidade:</h5>
                    <InfoAddress>{showData ? address?.city : <Skeleton height={16}  width={90}/>}</InfoAddress>
                </div>
            </FirstDivAddress>

            <SecondDivAddress>
                <div>
                    <h5>Rua:</h5>
                    <InfoAddress>{showData ? address?.street : <Skeleton height={16}  width={90}/>}</InfoAddress>
                </div>

                <div>
                    <h5>Bairro:</h5>
                    <InfoAddress>{showData ? address?.neighbourhood : <Skeleton height={16}  width={90}/>}</InfoAddress>
                </div>

                <div>
                    <h5>Estado:</h5>
                    <InfoAddress>{showData ? address?.state : <Skeleton height={16}  width={90}/>}</InfoAddress>
                </div>
            </SecondDivAddress>
            

        </StyledDiv>
    )
}

export default UserAddress