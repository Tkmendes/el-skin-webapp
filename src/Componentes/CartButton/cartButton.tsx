import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../CartModal/cartModal";
import { useState } from "react";


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
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  
    const handleCloseCart = () => {
    setIsCartModalOpen(false);
  };

    function handleOnClickCart() {
    setIsCartModalOpen(true);
  }
    return (
        <>
        <CartButtonStyle onClick={handleOnClickCart}>
            <FontAwesomeIcon icon={faCartShopping} />
        </CartButtonStyle>
        <CartModal isOpen={isCartModalOpen} onClose={handleCloseCart} />
        </>
    )
};

export default CartButton