import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppStateService } from 'src/app/services/app-state.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserToken } from 'src/app/shared/models';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.scss']
})
export class CustomerSigninComponent implements OnInit, OnDestroy {

  form: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(
    private appState: AppStateService,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscriptionLoggin();
  }

  ngOnDestroy(): void {
    this.unsubscribeLogging();
  }

  doSignIn() {
    this.appState.setOnToLoading(3000);

    this.auth.setAccessToken(new UserToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      new Date(2023, 10, 25).toDateString()
    ));
  }

  doSignUp() {
    this.appState.setOnToLoading();

    this.router.navigate(['auth/signup']);
  }

  subscriptionLoggin() {
    let subs = this.auth.accessToken.subscribe(accessToken => {
      if (accessToken) {
        this.router.navigate(['dashboard']);
      } else {
        console.log('not logged in');
      }
    });

    this.subscriptions.push(subs);
  }

  unsubscribeLogging() {
    this.subscriptions.forEach((sub, index) => {
      sub.unsubscribe();
      this.subscriptions.splice(index, 1);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
