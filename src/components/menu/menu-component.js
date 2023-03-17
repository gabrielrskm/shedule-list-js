import styles from './menu.css?raw'

export class appMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.atributes = "";
    this.date = ""
    //insert atributes here
  }


  static get observedAttributes() {
    return ["atributes"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "atributes") {
      this.atributes = newValue;
      this.setValues = newValue;
    }
  }

  /**
   * @param {string} value
   */
   set setValues(value){

    let arrDate = value.split('/');
    let intDate = arrDate.map((element)=>{
      return parseInt(element)
    })
    let myDate = new Date();
    myDate.setFullYear(intDate[0],intDate[1]-1,intDate[2]);
    let obj = {
        day : myDate.toLocaleDateString('en-US',{ day: `numeric`}),
        name_day: myDate.toLocaleDateString('en-US',{weekday : 'long'}),
        month :myDate.toLocaleDateString('en-US',{ month: 'long'})
    }
    this.date = (obj);
    return true;
  }

  connectedCallback() {

    let styleComponent = `<style>${styles}</style>`
    let html = //html
    `<div class="wrapper">`;
      html += //html
      `
        <div class="day">
          <span>${this.date.month}</span>
          <span>${this.date.day}</span>
          <span>${this.date.name_day}</span>
        </div>
      `
    html += `</div>`;
    this.shadowRoot.innerHTML = styleComponent + html;
  }
}
window.customElements.define("app-menu", appMenu);