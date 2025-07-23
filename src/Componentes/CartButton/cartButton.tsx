import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartButtonStyle = styled.button`
    background: none; 
    border: none; 
    cursor: pointer; 
    padding: 0.5rem; 
    border-radius: 50%; 
    color: #333; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    transition: background-color 0.3s ease; 

    &::hover{
    background-color: #f0f0f0; 
    }
`

function CartButton() {
    return (
        <CartButtonStyle>
            <FontAwesomeIcon icon={faCartShopping} />
        </CartButtonStyle>
    )
};

export default CartButton