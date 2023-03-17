import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  turnos : {}
}

const horarioSlice = createSlice({
  name: 'horario',
  initialState,
  reducers: {

    actualizar: (state, action) => {
      const obj   = action.payload;
      state.turnos = obj;
    },

    getDayList: (state, action) =>{
      state.turnos

    },

    addTurn : (state, action) => {
      const user = action.payload.user;
      const turn  = action.payload.schedule;
      
    }
  }
});

export const { actualizar } = horarioSlice.actions;

export default horarioSlice.reducer;