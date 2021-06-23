import { Component, ChangeDetectionStrategy , OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

import axios from 'axios';

@Component({
  selector: 'app-form-feild',
  templateUrl: './form-feild.component.html',
  styleUrls: ['./form-feild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFeildComponent {

  addressForm = this.fb.group({
    firstName: ['h', Validators.required],
    lastName: ['s', Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

 
  onSubmit(){
    alert('Thanks!');
  }
 /* 
  onSubmit(f : NgForm){
    alert('Thanks!');
  }
  */

  // api to create endpoint execute
  createEndPoint = ()=>{
  try{
             axios.post('',{})
             .then( (res)=>{})
             .catch()
  }catch(e){
    console.log(e);
  }
  }
}
