import {appList} from  "../list/list-component.js";

export class appContentList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.atributes = '';
        this.actualData;
        document.addEventListener('menu-change',this);
        
    }

    handleEvent(event){
        console.log(event.detail.message)
        this.actualizar(this.actualData,event.detail.message)
    }

    static get observedAttributes(){
        return  ['atributes'];
    }

    attributeChangedCallback(name,oldValue,newValue) {
        if(name === 'atributes') this.atributes = newValue;
    }

    connectedCallback(){
        this.shadowRoot.innerHTML= //html
        `<div>Welcome to the page, the data will be displayed here</div>`;
    }

    actualizar(dataList,fecha){
        
        let list = dataList.filter((element)=>element.fecha === fecha)
        let str = '';
        for(let i = 0; i < list.length; i++){
            str += //html
            `<app-list  id= "${list[i].id}"
                        schedule = "${list[i].hora_inicio +' hasta '+list[i].hora_fin}"
                        date="${list[i].fecha}"
                        count="${list[i].vacantes_disponibles}">
            </app-list>`
        }
        this.shadowRoot.innerHTML= str
        this.actualData = dataList;
    }

}
window.customElements.define('app-content-list',appContentList);