import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators.functions';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-pag',
  templateUrl: './register-pag.component.html',
  styles: ``
})
export class RegisterPagComponent {

  constructor(
    private formBuilder: FormBuilder, 
    private validatorService: ValidatorsService
  ){

  }

  public registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]], // here the cantBeStrider is passed by reference and Angular then calls the funcition
    password: ['', [Validators.required,  Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  })

  onSubmit(): void{
    this.registerForm.markAllAsTouched();
  }

  isValidField( field: string): boolean | null  {
    return this.validatorService.isValidField(this.registerForm, field);
  }
}
