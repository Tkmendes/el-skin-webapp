import { ReactNode, createContext, useState, useContext } from "react";
import { CartContextReturn, useCart } from '../Components/Hooks/useCart'


type CartModalContextType = CartContextReturn;

export const CartModalContext = createContext<CartModalContextType | undefined>(undefined);

CartModalContext.displayName = 'Carrinho';

interface CartProviderProps {
  children: ReactNode;
}

export const CartModalProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cart = useCart();

  return (
    <CartModalContext.Provider value={cart}>
      {children}
    </CartModalContext.Provider>
  );
};

export const useCartContext = (): CartModalContextType => {
  const context = useContext(CartModalContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};



