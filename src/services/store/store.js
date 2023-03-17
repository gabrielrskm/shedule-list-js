
import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import horarioReducer from './slice/horarioSlice.js';
import counterReducer from './slice/counterSlice.js';
import userReducer from './slice/userSlice.js';
import actualUserReducer from './slice/actualUser.js';

const rootReducer = combineReducers({
  horario: horarioReducer,
  counter: counterReducer,
  users : userReducer,
  actualUser : actualUserReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;

