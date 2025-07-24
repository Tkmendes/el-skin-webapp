import styled from "styled-components";

const CartModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`
const CartModalDiv = styled.div`
  background: #2d2d2d;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: white;
`

const CartModalHeader = styled.div`
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const CartModalHeaderTitle = styled.h2` 
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
`

const CartModalCloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

&:hover {
  background: rgba(255, 255, 255, 0.1);
}
`

const CartModalContent = styled.div`
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;
`

const CartEmpty = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #999;
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`

const CartItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  background: #3d3d3d;
  border-radius: 8px;
  position: relative;
`

const CartItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
`

const CartItemImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CartItemName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  line-height: 1.3;
`

const CartItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

const QuantityLabel = styled.span`
  font-size: 0.9rem;
  color: #ccc;
  margin-right: 10px;
`

const QuantityControls = styled.div`    
  display: flex;
  align-items: center;
  gap: 5px;
  background: #4d4d4d;
  border-radius: 6px;
  padding: 5px;
`

const QuantityButton = styled.button`
  background: none;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.9rem;

&::hover {
  background: rgba(255, 255, 255, 0.1);
` 

const QuantityDisplay = styled.span`
  background: #5d5d5d;
  color: white;
  padding: 5px 12px;
  border-radius: 4px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
` 

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-left: auto;

&:hover {
  background: rgba(239, 68, 68, 0.1);
`

const CartItemPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #a3e635;
  margin-top: auto;
`

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #4d4d4d;
  margin-top: 20px;
`

const TotalLabel = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
`

const TotalPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #a3e635;
`

const FinalizeButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;

&:hover {
  background: linear-gradient(135deg, #7c3aed, #9333ea);
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
`

function CartModal() {
    return (
        <CartModalOverlay>
          <CartModalDiv>
            <CartModalHeader>
              <CartModalHeaderTitle>Carrinho de Compras</CartModalHeaderTitle>
              <CartModalCloseButton onClick={() => console.log("Fechar modal")}>
                &times;
              </CartModalCloseButton>
            </CartModalHeader>
          </CartModalDiv>
        </CartModalOverlay>
    );
};

export default CartModal;