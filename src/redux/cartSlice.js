import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    cartItem : []
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state, action)=>{
            const existingItem = state.cartItem.find((e)=> e.id === action.payload.id)

            if(existingItem){
                alert("Item already exists in the cart")
            }else{
                // const total = action.payload.price;
                state.cartItem = [...state.cartItem, {...action.payload, qty: 1}]
                toast.success("Item Added Successfully !!!")
            }
        },
        increaseQty: (state,action)=> {
            const index = state.cartItem.findIndex((e)=>e.id === action.payload)
            let qty = state.cartItem[index]?.qty;
            const qtyInc = qty + 1;
            state.cartItem[index].qty = qtyInc;

            // console.log(qtyInc)

            // const price = state.cartItem[index].price;
            // const total = price * qtyInc;
            // state.cartItem[index].total = total;

            toast.success("Qty Increased !!!")
        },
        decreaseQty: (state,action)=>{
            const index = state.cartItem.findIndex((e)=>e.id === action.payload)
            let qty = state.cartItem[index].qty;
            if(qty > 1){
                const qtyInc = qty - 1;
                state.cartItem[index].qty = qtyInc;
                toast.success("Qty Decreased !!!")
            }
        },
        removeFromCart: (state, action)=>{
            state.cartItem = state.cartItem.filter((e)=>e.id !== action.payload)
        }
    }
}) 

export const {addToCart,increaseQty,decreaseQty,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;