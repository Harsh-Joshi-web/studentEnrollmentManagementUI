import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  id: number;
  universityName: string;
  term: number;
  tax: number;
  totalAmount: number;
  action: number;
}
 
interface University {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1001, universityName: 'Solicon', term:8, tax:10, totalAmount:1870, action: 1},
  {id: 1002, universityName: 'DAVV', term: 7, tax:1, totalAmount:1717, action: 2},
  {id: 1003, universityName: 'HIT', term: 8, tax:10, totalAmount:1870, action: 1}
];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent {
  panelOpenState = true;
  panelOpenState2 = true;
  amt = 500;
  gst = 5;
  price = 505;

  // For table
  displayedColumns: string[] = ['id', 'universityName', 'term', 'tax', 'totalAmount', 'action'];
  dataSource = ELEMENT_DATA;

  // For Form
  invoiceForm = new FormGroup({
    uniId: new FormControl(""),
    term: new FormControl(""),
  });

  invoiceSubmitted(){
    console.log(this.invoiceForm.value);
  }

  // For Modal
  openModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }
  universities: University[] = [
    {value: '1001', viewValue: 'Solicon'},
    {value: '1002', viewValue: 'DAVV'},
    {value: '1003', viewValue: 'HIT'},
  ];

}
