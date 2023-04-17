import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-check-d',
  templateUrl: './check-d.component.html',
  styleUrls: ['./check-d.component.css']
})
export class CheckDComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}



// @Component({
//   selector: 'dialog-elements-example',
//   templateUrl: 'dialog-elements-example.html',
// })

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
