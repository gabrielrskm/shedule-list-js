//para fines practicos esta funcion carga toda la configuracion de firebase
import auth from './firebase/auth.js';
import config from './firebase/config.js';
import database from './firebase/database.js';
import store from './store/store.js';


export default function loading(){

  //inicializo el stores
  config ();
  auth();
  database();
  document.addEventListener('charge-database',(event) => {
    //capture data from firebase event for actualizer to store state
    store.dispatch({ type: 'horario/actualizar',payload: event.detail});
  })

  document.addEventListener('charge-database-users',(event) => {
    //capture data from firebase event for actualizer to store state
    store.dispatch({ type: 'users/actualizar',payload: event.detail});
  })

  
}
