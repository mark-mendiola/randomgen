import { Component } from '@angular/core';

@Component({
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent {

  showErrorFlag : boolean = true;

  hideError() : void {
    this.showErrorFlag = false;
  }

  showError() : void {
    this.showErrorFlag = true;
  }

}
