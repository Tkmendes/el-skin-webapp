import styled from "styled-components";


const Imput = styled.input`
    width: 100%;    
    padding: 0.75rem 1rem; 
    border: 1px solid #ddd; 
    border-radius: 8px; 
    font-size: 16px; 
    outline: none; 
    transition: border-color 0.3s ease; 
    background-color: #878787;

    &:placeholder {
        color: #000000;
        font-size: 16px;
        
    }

    &:focus {
        border-color: #007bff;
    }
`
//  width: 100%;
//     height: 47px;
//     top: 16px;
//     left: 211px;
//     opacity: 1;
//     border-radius: 8px;
//     background-color: #878787;
//     display: flex;

export default Imput