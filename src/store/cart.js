import { createSlice } from "@reduxjs/toolkit";
const initialCounterStage = { showCart:false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCounterStage,
  reducers: {
    cartShow(state){
        state.showCart=!state.showCart
    }
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer