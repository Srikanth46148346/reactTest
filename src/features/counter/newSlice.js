import { createSlice } from "@reduxjs/toolkit";

const newSlice = createSlice({
    name: 'my new slice',
    initialState : {
        value: 0
    },
    reducers: {
        add(state){
            state.value += 1;
        },

        remove(state){
            state.value -= 1;
        },

        reset(state){
            state.value = 0;
        }

    }
});


export const {add, remove, reset} = newSlice.actions;

export default newSlice.reducer;