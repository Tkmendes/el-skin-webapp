
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../Store";
import { addItem, removeItem, updateQuantity, clearCart } from "../../Store/slices/cartSlice";

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
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.cart.items);

    const handleAddItem = useCallback((item: Omit<ICartItem, 'quantity'>) => {
        dispatch(addItem(item));
    }, [dispatch]);

    const handleRemoveItem = useCallback((id: string) => {
        dispatch(removeItem({ id }));
    }, [dispatch]);

    const handleUpdateQuantity = useCallback((id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    }, [dispatch]);

    const handleClearCart = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    const getTotalItems = useCallback(() => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }, [items]);

    const getTotalPrice = useCallback(() => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [items]);

    return {
        items,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
        updateQuantity: handleUpdateQuantity,
        clearCart: handleClearCart,
        getTotalItems,
        getTotalPrice
    };
}

export default useCart;

// export default useCart;
    // const addItem = (newItem: Omit<ICartItem, 'quantity'>) => {
    //     setItems(currentItems => {
    //         const existingItem = currentItems.find(item => item.id === newItem.id);
    //         if (existingItem) {
    //             return currentItems.map(item =>
    //                 item.id === newItem.id
    //                     ? { ...item, quantity: item.quantity + 1 }
    //                     : item
    //             );
    //         }
    //         return [...currentItems, { ...newItem, quantity: 1 }];
    //     });
    // };

    // const removeItem = (id: string) => {
    //     setItems(currentItems => currentItems.filter(item => item.id !== id));
    // };

    // const updateQuantity = (id: string, quantity: number) => {
    //     if (quantity <= 0) {
    //         removeItem(id);
    //         return;
    //     }
    //     setItems(currentItems =>
    //         currentItems.map(item =>
    //             item.id === id ? { ...item, quantity } : item
    //         )
    //     );
    // };

    // const clearCart = () => {
    //     setItems([]);
    // };

    // const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

    // const getTotalPrice = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

//     return {
//         items,
//         addItem,
//         removeItem,
//         updateQuantity,
//         clearCart,
//         getTotalItems,
//         getTotalPrice
//     };
// }

