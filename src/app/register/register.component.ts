import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    inputEmail: new FormControl('', [Validators.required, Validators.email]),
    inputPassword : new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  registerSubmit() {
    console.log(this.registerForm)
    this.isLoggedIn = true;
  }

  get inputEmail(): FormControl {
    return this.registerForm.get('inputEmail') as FormControl;
  }

  get inputPassword(): FormControl {
    return this.registerForm.get('inputPassword') as FormControl;
  }
}

