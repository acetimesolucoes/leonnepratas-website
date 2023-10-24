import { Injectable } from '@angular/core';
import { UserToken } from '../shared/models';

import { LocalstorageService } from './localstorage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  accessToken = new BehaviorSubject<UserToken | null>(this.getAccessToken());

  constructor(private localstorage: LocalstorageService,) { }

  loggedIn(): boolean {
    return this.getAccessToken() ? true : false;
  }

  getAccessToken(): UserToken | null {
    let uToken: UserToken | null = JSON.parse(this.localstorage.getItem('accessToken') || '');
    return uToken;
  }

  setAccessToken(accessToken: UserToken) {
    this.localstorage.setItem('accessToken', JSON.stringify(accessToken));
    this.accessToken.next(accessToken);
  }
}
