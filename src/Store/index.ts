import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/createSlice";
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        // Adicione seus reducers aqui
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;