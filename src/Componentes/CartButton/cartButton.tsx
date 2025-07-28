import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../CartModal/cartModal";
import { useState } from "react";
import { useCartContext } from "../../Context/cartModalContext";


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
    font-size: 1.1rem;

    &::hover{
    background-color: #f0f0f0; 
    }
`

function CartButton() {
    const {  getTotalItems } = useCartContext();
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
            <FontAwesomeIcon icon={faCartShopping} /> {getTotalItems()}
        </CartButtonStyle>
        <CartModal isOpen={isCartModalOpen} onClose={handleCloseCart} />
        </>
    )
};

export default CartButton