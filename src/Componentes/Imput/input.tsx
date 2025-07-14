import styled from "styled-components";


const Imput = styled.input`
    width: 100%;
    height: 47px;
    top: 16px;
    left: 211px;
    angle: 0 deg;
    opacity: 1;
    
    border-radius: 8px;

    &::placeholder {
        color: #878787;
        font-size: 16px;
    }

    &::focus {
        border-color: #007bff;
    }
`


export default Imput