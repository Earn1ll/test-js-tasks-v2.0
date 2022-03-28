import { LightningElement } from 'lwc';

export default class TestJsCheckboxHideAndShow extends LightningElement {
    changeFirstCard() {
        let firstCheckbox = this.template.querySelector(".checkA");
        let firstCard = this.template.querySelector(".firstCard");
        if(firstCheckbox.checked === true) {
            firstCard.style.visibility = "hidden";
        } else {
            firstCard.style.visibility = "visible";
        }
      }
    
      changeSecondCard() {
        let secondCheckbox = this.template.querySelector(".checkB");
        let secondCard = this.template.querySelector(".secondCard");
        
        if(secondCheckbox.checked === true) {
            secondCard.style.visibility = "hidden";
        } else {
            secondCard.style.visibility = "visible";
        }
    }    
}