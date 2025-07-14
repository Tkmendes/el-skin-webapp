import styled from "styled-components";


const Imput = styled.input`
    width: 100%;
    height: 47px;
    top: 16px;
    left: 211px;
    opacity: 1;
    border-radius: 8px;
    background-color: #878787;
    display: flex;

    &::placeholder {
        color: #000000;
        font-size: 16px;
        
    }

    &::focus {
        border-color: #007bff;
    }
`


export default Imput