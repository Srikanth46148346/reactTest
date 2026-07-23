import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 2
    },

    reducers: {
        increase(state){
            state.value += 1;
        },

        decrease(state){
            state.value -= 1;
        },

        increaseByAmount(state, action){
            state.value += action.payload;
        },
        reset(state){
            state.value = 0;
        }
    }
});


export const { increase, decrease, increaseByAmount, reset } = counterSlice.actions

export default counterSlice.reducer;

// my testing

// testing 


// Testing rebase for the myrebase