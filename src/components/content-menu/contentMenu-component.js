import {appMenu} from '../menu/menu-component.js';
import  store from '../../services/store/store.js';
import styles from './contentMenu.css?raw';
import html from './contentMenu.html?raw';


export class appContentMenu extends HTMLElement {

    
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.atributes = 'algo';
        this.styles =  `<style>${styles}</style>`
    }

    handleEvent(event) {

        if (event.type === "click") {
          const myEvent = new CustomEvent("menu-change", {
            detail: { from: event.target.id, message: event.target.atributes },
            composed: true,
            bubbles: true,
          });
          this.dispatchEvent(myEvent);
        }
      }
    

    static get observedAttributes(){
        return  ['atributes'];
    }

    attributeChangedCallback(name,oldValue,newValue) {
        if(name === 'atributes') this.atributes = newValue;
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = this.styles + html;
    }

    actualizar(dataList){
        
        let list = dataList.reduce((acc,item)=>{
            if(!acc.includes(item.fecha)){
              acc.push(item.fecha);
            }
            return acc;
          },[]);
        let data = "<div>";
        for(let i = 0 ; i <list.length;i++){
            data +=  //html
            `<app-menu id="${'menu'+i}" atributes = "${list[i]}"></app-menu>`
        }
        data += '</div>'
        this.shadowRoot.innerHTML = this.styles + data;

        let element = this.shadowRoot.querySelectorAll('app-menu');
        for(let i = 0 ; i < element.length ; i++){
            element[i].addEventListener('click', this);
        }

    }

    han

}
window.customElements.define('app-content-menu',appContentMenu);


