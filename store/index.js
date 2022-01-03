import { createStore } from 'redux'
import { createSlice,configureStore} from '@reduxjs/toolkit'

const initialState={
    image:"sharingan.png"
}

const frontDecalState=createSlice({
    name:'frontDecalState',
    initialState,
    reducers:{
        changeImage(state,action){
            state.image=action.payload
        }
    }
})
 const store = configureStore({
     reducer:{fontImageReducer: frontDecalState.reducer}
 })

export const frontDecalActions= frontDecalState.actions
export default store