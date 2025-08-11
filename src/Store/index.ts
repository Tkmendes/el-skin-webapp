import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/createSlice";
import cartReducer from "./slices/cartSlice"
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        // Adicione seus reducers aqui
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;