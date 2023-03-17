//using in html file as custon componet
import { appContentMenu } from "./src/components/content-menu/contentMenu-component.js";
import { appUsers } from "./src/components/users/users-component.js";
import { appContentList } from "./src/components/content-list/contentList-component.js";

import loading from "./src/services/loading.js";
import store from "./src/services/store/store.js";

let previusState = {
  users: 'init',
  turn: 'init',
  actualUser: 'init'
}

loading()

store.subscribe(render)

function render() {


  const dataUser = store.getState().users.users;
  const dataList = store.getState().horario.turnos;
  const actualUser = store.getState().actualUser.value;
  
  if (dataUser !== previusState.users && dataUser[1] !== undefined) {
    const userComponet = document.getElementById('app-users');
    previusState.users = dataUser;
    userComponet.actualizar(dataUser);
  }
  if (dataList !== previusState.turn && dataList[1] !== undefined) {
    const contentMenu = document.getElementById('content-menu')
    previusState.turn = dataList;
    contentMenu.actualizar(dataList);
    const contentList = document.getElementsByTagName('app-content-list')
    contentList[0].actualizar(dataList, dataList[0].fecha);
  }

  if(actualUser !== previusState.actualUser && actualUser[0] !== undefined){
    previusState.actualUser = actualUser;
    const title = document.getElementsByTagName('h1')[0]
    title.innerText  = 'hola '+ actualUser
  }


} 