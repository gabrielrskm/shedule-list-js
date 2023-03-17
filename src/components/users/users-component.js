
import styles from './users.css?raw'
import img from '../../assets/userAnonymus.png'
import store from '../../services/store/store.js'

export class appUsers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.atributes = "miAtributo";

  }


  static get observedAttributes() {
    return ["atributes"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "atributes") this.atributes = newValue;
  }

  connectedCallback() {

      this.shadowRoot.innerHTML = //html
      `<h3>Cargando</h3>
      `
        
  }

  actualizar(dataUser){

    let str = '';
    for(let i = 0; i < dataUser.length; i++){
      str +=  //html
      `<option value="${dataUser[i].nombre}">${dataUser[i].nombre}</option>
      `
    }
    this.shadowRoot.innerHTML =  `<style>${styles}</style>`;
    this.shadowRoot.innerHTML += //html
      `<div class="wrapper">
        <label for="users">Usuario</label>
        <select name="users" id="users">
        ${str}
        </select>
        <img src=${img} alt="anonymus user">
      </div>`;
      this.select = this.shadowRoot.getElementById('users');
      const value  = this.select.value
      store.dispatch({type: 'actualUser1/change',payload: value});
      this.select.addEventListener("change", this);
  }

  handleEvent(event) {

    if (event.type === "change"){
      const value = (event.target.value)
      store.dispatch({type: 'actualUser1/change',payload: value});
    }
      
  }


}
window.customElements.define("app-users", appUsers);


