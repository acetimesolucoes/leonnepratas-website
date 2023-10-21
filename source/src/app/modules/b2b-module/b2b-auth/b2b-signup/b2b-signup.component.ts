import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-b2b-signup',
  templateUrl: './b2b-signup.component.html',
  styleUrls: ['./b2b-signup.component.scss']
})
export class B2bSignupComponent {

  form: FormGroup;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private appState: AppStateService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      registrationType: ['fisical', Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      companyName: [null, Validators.required],
      phoneNumber1: [null, Validators.required],
      phoneNumber2: [null],
      legalIdentify: [null, Validators.required],
      stateRegistration: [null, Validators.required],
      birth: [null, Validators.required],
      gender: [null],
      email: [null, [Validators.required, Validators.email]],
      emailConfirmation: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: [null, [Validators.required]],
      agreementPrivacyPolice: [false, [Validators.required, Validators.requiredTrue]],
      agreementReceiptEmailMarketing: [true],
    });

    this.form.controls['email'].valueChanges.subscribe(value => {
      if (value !== this.form.controls['emailConfirmation'].value && this.form.controls['emailConfirmation'].touched) {
        this.form.controls['emailConfirmation'].setErrors({ emailConfirmation: value });
      }
    });

    this.form.controls['password'].valueChanges.subscribe(value => {
      if (value !== this.form.controls['passwordConfirmation'].value && this.form.controls['passwordConfirmation'].touched) {
        this.form.controls['passwordConfirmation'].setErrors({ emailConfirmation: value });
      }
    });

    this.form.controls['emailConfirmation'].valueChanges.subscribe(value => {
      if (value !== this.form.controls['email'].value) {
        this.form.controls['emailConfirmation'].setErrors({ emailConfirmation: value });
      }
    });

    this.form.controls['passwordConfirmation'].valueChanges.subscribe(value => {
      if (value !== this.form.controls['password'].value) {
        this.form.controls['passwordConfirmation'].setErrors({ emailConfirmation: value });
      }
    });
  }

  onRegisterClick() {
    this.appState.setOnToLoading();

    console.log(this.form);
  }

  doSignIn() {
    this.location.back();
  }

  isFormValid() {
    if (this.isCompanyRegistration()) {
      this.form.controls['firstName'].setValue(null);
      this.form.controls['firstName'].setErrors(null);

      this.form.controls['lastName'].setErrors(null);
      this.form.controls['lastName'].setValue(null);

      this.form.controls['gender'].setErrors(null);
      this.form.controls['gender'].setValue(null);

      this.form.controls['birth'].setErrors(null);
      this.form.controls['birth'].setValue(null);

      return this.form.valid;
    } else {
      this.form.controls['companyName'].setErrors(null);
      this.form.controls['companyName'].setValue(null);

      this.form.controls['stateRegistration'].setErrors(null);
      this.form.controls['stateRegistration'].setValue(null);

      return this.form.valid;
    }
  }

  isCompanyRegistration() {
    return this.form.controls['registrationType'].value === 'legal';
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
