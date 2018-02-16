import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidators } from './email.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = new FormGroup({
    'newPassword': new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern('(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}')
    ]),
    'currentPassword': new FormControl('', [
      Validators.required
    ]),
    'confirmPassword': new FormControl('', [
      Validators.required, 
      Validators.minLength(8)
    ])
  }, EmailValidators.valueCheck);
  

  get currentPassword(){
    return this.reactiveForm.get('currentPassword');
  }

  get newPassword(){
    return this.reactiveForm.get('newPassword');
  }

  get confirmPassword(){
    return this.reactiveForm.get('confirmPassword');
  }

  submitForm(){
    
    if(this.reactiveForm.get("currentPassword").value == "Angular2018"){
            alert("Current password checked")
        } else{
            alert(this.reactiveForm.errors.pattern)
        }
    this.reactiveForm.reset();

  }

  constructor() { }

  ngOnInit() {
  }

}
