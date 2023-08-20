import { createSlice } from "@reduxjs/toolkit";
const initialCounterStage = { showCart:false,items:[],totalQuantity:0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCounterStage,
  reducers: {
    cartShow(state){
        state.showCart=!state.showCart
    },
    addItem(state,action){
      const newItem=action.payload;
      const existingItem=state.items.find(item=>item.id===newItem.id)
      state.totalQuantity++
      if(!existingItem){
        state.items.push({
          id:newItem.id,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
          name:newItem.title
        })
      }else{
      existingItem.quantity++
      existingItem.totalPrice=existingItem.totalPrice+newItem.price
      }
    },
    removeItem(state,action){
      const id=action.payload
      const existingItem=state.items.find(item=>item.id===id)
      state.totalQuantity--
      if(existingItem===1){
        state.items=state.items.filter(item=>item.id!==id)
      }else{
        existingItem.quantity--
        existingItem.totalPrice=existingItem.totalPrice-existingItem.price
      }
    }
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer