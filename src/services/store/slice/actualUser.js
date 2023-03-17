import { configureStore,createSlice } from "@reduxjs/toolkit";



const actualUserSlice  = createSlice({

  name: 'actualUser1',
  initialState : {value : {}},

  reducers : {
    change(state,action){
      state.value = action.payload;
    }
  }
});

export const {change} = actualUserSlice.actions;
export default actualUserSlice.reducer;