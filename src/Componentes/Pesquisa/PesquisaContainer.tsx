import styled from "styled-components";
import Imput from "../Imput/input";
import Button from "../ButtonHeader/Button";


const PesquisaContainer = styled.div`
    flex: 2; 
    max-width: 678px; 
    margin:  2rem; 
    position: relative; 
    display: flex;
    
`


function Pesquisa() {
    return (
        <PesquisaContainer>
            <Imput placeholder="O que você está procurando?" />
            <Button/>
        </PesquisaContainer>
    )

}

export default Pesquisa

