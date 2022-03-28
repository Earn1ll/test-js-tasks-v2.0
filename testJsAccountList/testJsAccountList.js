import { LightningElement, api} from "lwc";
import { CloseActionScreenEvent } from 'lightning/actions';
import { ShowToastEvent } from 'lightning/actions';



export default class TestJsAccountList extends LightningElement {
  @api recordId;

  closeTable() {
    this.dispatchEvent(new CloseActionScreenEvent());
    this.dispatchEvent(
      new ShowToastEvent({
          title: 'close',
          message: 'Account info closed!',
          variant: 'close'
      })
  );
  }
}