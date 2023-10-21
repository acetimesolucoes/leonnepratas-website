import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-b2b-signin',
  templateUrl: './b2b-signin.component.html',
  styleUrls: ['./b2b-signin.component.scss']
})
export class B2bSigninComponent {
  constructor(private appState: AppStateService, private router: Router,) {

  }

  doSignIn() {
    this.appState.setOnToLoading();
  }

  doSignUp() {
    this.appState.setOnToLoading();

    this.router.navigate(['auth/signup']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
