import { createSlice } from "@reduxjs/toolkit";

const ordersInitialState={
    orders:[],
    activeOrder:{}
}

const ordersState= createSlice({
    name:'ordersState',
    initialState:ordersInitialState,
    reducers:{
        setOrders(state,action){
            state.orders= action.payload
        },
        setActiveOrder(state,action){
            state.activeOrder= state.orders.filter((el)=> el._id== action.payload)
        }
    }
})

export default ordersState