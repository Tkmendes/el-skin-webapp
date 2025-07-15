import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

function Button (){
    return (
        <ButtonHeader>
          <FontAwesomeIcon icon={faSearch} />
        </ButtonHeader>
    )
};

export default Button