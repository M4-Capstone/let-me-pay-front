import { Dispatch, SetStateAction, useState } from "react"
import { ITransaction } from "../../../interfaces/interfaces"
import { StyledButton, StyledDiv } from "./styles"

interface IProps{
    transactions: []
    setFilteredTransactions: Dispatch<SetStateAction<[]>>
}

const FilterTransaction = ({transactions, setFilteredTransactions}:IProps)=>{

    const buttons = ["Todos", "Depósito","Transferência", "Saque"]

    const [selected, setSelected] = useState("Todos")

    const filterTransaction = (type:string) => {

        setSelected(type)
        if(type === "Saque"){
            const filteredList:any = transactions.filter((transaction:ITransaction) => transaction.categoryType.id === 1)

            setFilteredTransactions(filteredList)
        }
        if(type === "Depósito"){
            const filteredList:any = transactions.filter((transaction:ITransaction) => transaction.categoryType.id === 2)

            setFilteredTransactions(filteredList)
        }
        if(type === "Transferência"){
            const filteredList:any = transactions.filter((transaction:ITransaction) => transaction.categoryType.id === 3)

            setFilteredTransactions(filteredList)
        }
        if(type === "Todos"){
            setFilteredTransactions(transactions)
        }
    }

    return(
        <StyledDiv>
            {buttons.map((button, index) => 

            <StyledButton 
                key={`${button}${index}`}
                onClick={()=>filterTransaction(button)}
                selected={button === selected ? true : false}
            >
                {button}
            </StyledButton>
            
            )}     
        </StyledDiv>
    )
}

export default FilterTransaction