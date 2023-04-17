import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//For table
export interface PeriodicElement {
  stuId: number;
  name: string;
  address: string;
  email: string;
  university: string;
  term: number;
  course: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {stuId: 1, name: 'Rameshwar', address:'Indore', email:'ram@gamil.com', university:'Silicon', term:2, course:'BTech', action: 1},
  {stuId: 2, name: 'Piyush', address:'Odisha', email:'piyush@gamil.com', university:'ITDAV', term:8, course:'BA', action: 1},
  {stuId: 3, name: 'Yogesh', address:'Lucknow', email:'harsh@gamil.com', university:'CV Raman', term:6, course:'BE', action: 1},
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent{
  // For panel
  panelOpenState1 = true;

  // For form
  stuForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    universityId: new FormControl('', Validators.required),
    term: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
    course: new FormControl('', Validators.required),
  });

  stuSubmitted(){
    console.log(this.stuForm.value);
  }

  get name(): FormControl {
    return this.stuForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.stuForm.get('email') as FormControl;
  }

  get address(): FormControl {
    return this.stuForm.get('address') as FormControl;
  }

  get universityId(): FormControl {
    return this.stuForm.get('universityId') as FormControl;
  }

  get term(): FormControl {
    return this.stuForm.get('term') as FormControl;
  }

  get course(): FormControl {
    return this.stuForm.get('course') as FormControl;
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

  // For table
  displayedColumns: string[] = ['stuId', 'name', 'address', 'email','university', 'course', 'term', 'action'];
  dataSource = ELEMENT_DATA;
}
