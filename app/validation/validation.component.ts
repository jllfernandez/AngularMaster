import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms/src/directives/ng_form';

//Models
import { ValidationModel } from '../models/ValidationModel';

import swal from 'sweetalert2';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  validation = new ValidationModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    this.callService(this.validation, f);
}
//metodo de services
callService(body:ValidationModel, f: NgForm){
  console.log('Vale --->' + body.email);
      swal.fire("Good job!", "You clicked the button!" + body.email, "success")
  }
}
