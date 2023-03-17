import styles from './list.css?raw'
import img from '../../assets/Alarm.svg'
import store from '../../services/store/store.js'

export class appList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.schedule = "";
    this.count = 8;
    this.date = "";
    this.stateReserve = "Reserve";

    //store.subscribe(this.render.bind(this));
    //store.subscribe(()=>this.render())
  }



  static get observedAttributes() {
    return ["schedule", "stateReserve","date","count"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "schedule") this.schedule = newValue;
    if (name === "stateReserve") this.stateReserve = newValue;
    if (name === "date") this.date = newValue;
    if (name === "count") this.count = newValue;
  }

  connectedCallback() {
    const html = //html
    `<style>${styles}</style>
      <div>
        <img src=${img} alt="clock" />
        <span id="hour">${this.schedule}</span>
        <button id="reserve">${this.stateReserve}</button>
        <span id="day">${this.date}</span>
        <span id="aviable">Aviable${this.count}of 8</span> 
      </div> 
      `;
    this.shadowRoot.innerHTML  = html;

    this.button = this.shadowRoot.querySelector("button");
    this.box = this.shadowRoot.querySelector("div");
    this.button.addEventListener("click", this);
  }

  
  changeHabilited() {
    if (this.habilited) return;
    this.button.disabled = true;
  }

  handleEvent(event) {

    if (event.type === "click") {
      const myEvent = new CustomEvent("schedule-change", {
        detail: { from: this.schedule, message: this.stateReserve },
        composed: true,
        bubbles: true,
      });
      this.dispatchEvent(myEvent);
      this.changeButton();
      
    }

    if(event.type === 'schedule-change'){

    }
  }
  changeButton() {
    if (this.stateReserve === "Reserve") {
      this.stateReserve = "Unreserve";
      this.box.style.background = "linear-gradient(to top left, green 4%, #ffffff 76%)";
    } else {
      this.stateReserve = "Reserve";
      this.box.style.background = "";
    }
    this.button.textContent = this.stateReserve;
  }
}


window.customElements.define("app-list", appList);

