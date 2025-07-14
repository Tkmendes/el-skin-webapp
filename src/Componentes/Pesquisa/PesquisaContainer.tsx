import styled from "styled-components";
import Imput from "../Imput/input"; 

const PesquisaContainer = styled.div`
    flex: 2; 
    max-width: 678px; 
    margin:  2rem; 
    position: relative; 
    
`

function Pesquisa(){
    return (
        <PesquisaContainer>
            <Imput placeholder="O que você está procurando?"
            />
        </PesquisaContainer>
    )

}

export default Pesquisa

