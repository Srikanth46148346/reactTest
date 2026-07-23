import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import newSliceReducer from "./features/counter/newSlice"


const store = configureStore({
    reducer: {
        counter: counterReducer,
        newSlice: newSliceReducer

    }
});

export default store