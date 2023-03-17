import { initializeApp } from "firebase/app";
import { getDatabase, ref,onValue,query, child, get, orderByChild,orderByValue, limitToFirst, startAt, endAt, orderByKey} from "firebase/database";

function snapshotDatabaseTurn(snapshot) {

  if(!snapshot.exists()){console.log('no data');return;}
  let result =  [];
  let obj = {};
  snapshot.forEach(element =>{
    obj = {
      id : element.key,
      fecha  : element.val().fecha,
      hora_inicio : element.val().hora_inicio,
      hora_fin : element.val().hora_fin,
      vacantes_disponibles : element.val().vacantes_disponibles,
      usuarios : (element.val().usuarios !== undefined)?element.val().usuarios:""
    }
    result.push(obj);
  })
  const event = new CustomEvent('charge-database',{
    detail: result,
    bubble  : true,
    cancelable : false
  });

  document.dispatchEvent(event);


}

function snapshotDatabaseUsers(snapshot) {
  if(!snapshot.exists()){console.log('no data');return;}
  let result =  [];
  let obj = {};
  snapshot.forEach(element =>{
    obj = {
      id : element.key,
      nombre  : element.val().nombre,
      rol : element.val().rol
    }
    result.push(obj);
  })
  const event = new CustomEvent('charge-database-users',{
    detail: result,
    bubble  : true,
    cancelable : false
  });

  document.dispatchEvent(event);
}

function  readDataQueryTurn (db){

  const dateNow = new Date();
  const dateInit = dateNow.toLocaleDateString('es-ES',{year:'numeric'})+'/'
                  + dateNow.toLocaleDateString('es-ES',{month:'2-digit'})+'/'
                  + dateNow.toLocaleDateString('es-ES',{day:'2-digit'});

  dateNow.setUTCDate(dateNow.getUTCDate()+5);
  const dateEnd = dateNow.toLocaleDateString('es-ES',{year:'numeric'})+'/'
                  + dateNow.toLocaleDateString('es-ES',{month:'2-digit'})+'/'
                  + dateNow.toLocaleDateString('es-ES',{day:'2-digit'});

  const starCountRef = query(ref(db, 'turnos'),
                              orderByChild('fecha'),
                              startAt(dateInit),
                              endAt(dateEnd));

  try {
      onValue(starCountRef, snapshotDatabaseTurn);
  } catch (error) {
    console.log(error);
  }
}

function readDataQueryUsers(db){

  const starCountRef = query(ref(db, 'usuarios'));

  try {
      onValue(starCountRef, snapshotDatabaseUsers);
  } catch (error) {
    console.log(error);
  }

}

export default  function database(){

// Initialize Realtime Database and get a reference to the service
  const db = getDatabase();
  const dbRef = ref(db);
  readDataQueryTurn(db);
  readDataQueryUsers(db);

}

