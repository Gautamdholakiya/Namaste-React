import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        additems : (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const {additems} = cartSlice.actions

export default cartSlice.reducer