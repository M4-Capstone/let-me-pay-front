import { useState } from "react"
import { StyledButton, StyledDiv } from "./styles"

const FilterTransaction = ()=>{
    const buttons = ["TODOS", "DEPÓSITO","TRANSFERÊNCIA", "SAQUE"]
    const [selected, setSelected] = useState<string>()

    return(
        <StyledDiv>
            {buttons.map(button => 

            <StyledButton 
                onClick={()=>setSelected(button)}
                selected={button === selected ? true : false}
            >
                {button}
            </StyledButton>
            
            )}     
        </StyledDiv>
    )
}

export default FilterTransaction