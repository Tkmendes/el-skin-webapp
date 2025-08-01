
import { useState } from "react";

interface ICartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    
}

export interface CartContextReturn {
    items: ICartItem[];
    addItem: (item: Omit<ICartItem, 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCart = (): CartContextReturn => {
    const [items, setItems] = useState<ICartItem[]>([]);

    const addItem = (newItem: Omit<ICartItem, 'quantity'>) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === newItem.id);
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentItems, { ...newItem, quantity: 1 }];
        });
    };

    const removeItem = (id: string) => {
        setItems(currentItems => currentItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

    const getTotalPrice = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

    return {
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice
    };
}

export default useCart;