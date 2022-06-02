import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    fruits: [],
}

const fruitsSlice = createSlice({
    name: "fruits",
    initialState,
    reducers: {
        addFruit(state, action) {
            state.fruits.push(action.payload);
        },
        removeFruit(state, action) {
            let index = state.fruits.indexOf(action.payload);
            if (index !== -1) {
                state.fruits.splice(index,1);
            }
        },
        clearFruits(state) {
            state.fruits = [];
        }
    }
})

export const { addFruit, removeFruit, clearFruits } = fruitsSlice.actions;
export default fruitsSlice.reducer;