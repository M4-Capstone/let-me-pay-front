import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { ITransaction } from "../../../interfaces/interfaces"
import { StyledDiv, StyledDivAmount, StyledDivUser, StyledSection, StyledUserEmail, StyledUserName } from "./styles"

interface IProps{
    filteredTransactions: []
    showData: boolean
}

const CardsTransaction = ({filteredTransactions, showData}: IProps)=>{

    const {user} =  useContext(UserContext)

    const convertAmount = (transaction:ITransaction)=>{
        let stringToNumber = parseFloat(transaction.amount).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        if(transaction.categoryType.id === 1){
            stringToNumber= "– "+stringToNumber
        }
        if(transaction.categoryType.id === 2){
            stringToNumber= "+ "+stringToNumber
        }
        if(transaction.categoryType.id === 3){
            if(transaction.receiverId.documentId === user.documentId){
                stringToNumber= "+ "+stringToNumber
            }else{
                stringToNumber= "– "+stringToNumber
            }
        }
        return stringToNumber
    }

    const verifyReceiverName = (transaction:ITransaction)=>{

        let result = ""

        if(transaction.receiverId.name === user.name && transaction.categoryType.id === 1){
            result = "Você fez um saque!"
        }

        if(transaction.receiverId.name === user.name && transaction.categoryType.id === 2){
            result = "Você fez um depósito!"
        }

        if(transaction.receiverId.name === user.name && transaction.categoryType.id === 3){
            result = "Transferência recebida"
        }

        if(transaction.receiverId.name !== user.name && transaction.categoryType.id === 3){
            result = "Transferência enviada"
        }

        return result
    }

    const verifyReceiverEmail = (transaction:ITransaction)=>{
        let result = ""

        if(transaction.receiverId.email === user.email && transaction.categoryType.id === 3){
            result = transaction.senderId.name
        }

        if(transaction.receiverId.email !== user.email && transaction.categoryType.id === 3){
            result = transaction.receiverId.name
        }

        return result
    }


    return(
        <StyledSection>
            {filteredTransactions?.map((transaction:ITransaction, index:number) => 
            <StyledDiv key={`${transaction}${index}`}>
                {showData && 
                    <>
                        <StyledDivUser>
                            <StyledUserName>{verifyReceiverName(transaction)}</StyledUserName>
                            <StyledUserEmail>{verifyReceiverEmail(transaction)}</StyledUserEmail>
                        </StyledDivUser>
        
                        <StyledDivAmount>
                            <h5>{convertAmount(transaction)}</h5>
                        </StyledDivAmount>
                    </>
                }
                
            </StyledDiv>)}
        </StyledSection>
    )
}

export default CardsTransaction