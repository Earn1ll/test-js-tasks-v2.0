import { LightningElement,track,api} from 'lwc';
export default class TestJsCheckboxValue extends LightningElement {
  
  @track checkboxValue;
  @api checkboxValue;
   

  @api childCheckbox(event){
    this.checkboxValue = event.detail;
  }
  
} 