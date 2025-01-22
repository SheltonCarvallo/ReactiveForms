import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [new EmailValidatorService()]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]], // here the cantBeStrider is passed by reference and Angular then calls the funcition
    password: ['', [Validators.required,  Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },
  {
    validators: [
      this.validatorService.isFieldOneaEqualsToFieldTwo('password', 'password2')
    ]
  }
)

  onSubmit(): void{
    this.registerForm.markAllAsTouched();
  }

  isValidField( field: string): boolean | null  {
    return this.validatorService.isValidField(this.registerForm, field);
  }


  /*passwordsMatch(): boolean {
    const pass1 : string = this.registerForm.controls['password'].value;
    const pass2 : string = this.registerForm.controls['password2'].value;
    if(pass1 !== pass2 && this.registerForm.controls['password2'].touched){
      return false;
    }
    return true;
  }*/
}
