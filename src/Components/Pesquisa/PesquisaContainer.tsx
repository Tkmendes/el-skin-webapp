import styled from "styled-components";
import Imput from "../Imput/input";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { createContext } from "react";
import { SearchContext } from "../../Context/searchContext";


const PesquisaContainer = styled.div`
    flex: 2; 
    max-width: 678px; 
    margin:  2rem; 
    position: relative; 
    display: flex;
    
`

const ButtonHeader = styled.button`
    position: absolute; 
    right: 8px; 
    top: 50%; 
    transform: translateY(-50%);    
    background: none; 
    border: none; 
    cursor: pointer; 
    padding: 0.5rem; 
    border-radius: 50%; 
    color: #666; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    transition: background-color 0.3s ease;          
`
const Search = createContext(SearchContext);


function Pesquisa() {
    
    const {search, setSearch} = useContext(SearchContext);

        // const buttonClick = (evento) => {
        //     const produtoDigitado = evento.target.value
        //     const resultadoPesquisa = produtos.filter( produtos => produtos.nome.includes(produtoDigitado))
        //     setProdutosPesquisados(resultadoPesquisa)
        // };
    function handleClick(){ 


        console.log(`Você pesquisou por: ${search}`); 


    };
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        // Atualiza o estado com o valor atual do input.
        setSearch(e.target.value);
    };
  
    return (
        
        <PesquisaContainer>
            <Imput placeholder="O que você está procurando?" value={search} onChange={handleInputChange}/>
                <ButtonHeader onClick={handleClick}>
                          <FontAwesomeIcon icon={faSearch} />
                </ButtonHeader>
        </PesquisaContainer>
         
        
    )

}

export default Pesquisa

