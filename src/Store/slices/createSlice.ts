
import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    term: string;
}

const initialState: SearchState = {
    term: '', // Defina o estado inicial do seu slice aqui
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTerm: (state, action) => {
            state.term = action.payload;
        },
        clearTerm: (state) => {
            state.term = '';
        },
    },
});

export default searchSlice.reducer;
export const { setTerm, clearTerm } = searchSlice.actions;
