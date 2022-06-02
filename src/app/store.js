import fruitsReducer from "../features/fruits/fruits_slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        fruits: fruitsReducer,
    }
})

export default store;