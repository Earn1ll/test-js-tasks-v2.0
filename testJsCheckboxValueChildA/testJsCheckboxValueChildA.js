import { LightningElement,api } from 'lwc';

export default class testJsCheckboxValueChildA extends LightningElement {
    booleanValue = " ";
    
    @api changeHandler(event) {
       this.booleanValue = event.target.checked;

        const selectedEvent = new CustomEvent("getvalue",{
            detail: this.booleanValue
        });

        this.dispatchEvent(selectedEvent);
      }
}