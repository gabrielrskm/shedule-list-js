import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users : {}
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    actualizar: (state, action) => {
      const obj   = action.payload;
      state.users = obj;
    },

    getUserList: (state, action) =>{
      state.turnos

    },

    addUser : (state, action) => {
      const user = action.payload.user;
      const turn  = action.payload.schedule;
      
    },
    removeUser : (state, action) => {
      const user = action.payload.user;
      const turn  = action.payload.schedule;
      
    }
  }
});

export const { actualizar,getUserList,addUser,removeUser } = userSlice.actions;

export default userSlice.reducer;