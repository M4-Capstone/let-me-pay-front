import { useContext } from "react"
import { UserContext } from "../../../../../context/userContext"
import { FirstDivAddress, InfoAddress, SecondDivAddress, StyledDiv } from "./styles"

const UserAddress = ()=>{

    const {user} = useContext(UserContext)
    const {address} = user

    return(
        <StyledDiv>

            <FirstDivAddress>
                <div>
                    <h5>CEP:</h5>
                    <InfoAddress>{address?.zipCode}</InfoAddress>
                </div>

                <div>
                    <h5>Número:</h5>
                    <InfoAddress>{address?.number}</InfoAddress>
                </div>

                <div>
                    <h5>Cidade:</h5>
                    <InfoAddress>{address?.city}</InfoAddress>
                </div>
            </FirstDivAddress>

            <SecondDivAddress>
                <div>
                    <h5>Rua:</h5>
                    <InfoAddress>{address?.street}</InfoAddress>
                </div>

                <div>
                    <h5>Bairro:</h5>
                    <InfoAddress>{address?.neighbourhood}</InfoAddress>
                </div>

                <div>
                    <h5>Estado:</h5>
                    <InfoAddress>{address?.state}</InfoAddress>
                </div>
            </SecondDivAddress>
            

        </StyledDiv>
    )
}

export default UserAddress