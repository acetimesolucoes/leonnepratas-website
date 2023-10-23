import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.scss']
})
export class CustomerSigninComponent {

  form: FormGroup;

  constructor(
    private appState: AppStateService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  doSignIn() {
    this.appState.setOnToLoading(3000);

    this.router.navigate(['dashboard']);
  }

  doSignUp() {
    this.appState.setOnToLoading();

    this.router.navigate(['auth/signup']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
