import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  userPostalCode = new BehaviorSubject<string>(this.getPostalCode())

  constructor(private localstorageService: LocalstorageService) { }

  getPostalCode() {
    let postalCode = this.localstorageService.getItem('postalCode');

    return postalCode || '';
  }

  setUserPostalCode(postalCode: string) {
    this.localstorageService.setItem('postalCode', postalCode);

    this.userPostalCode.next(postalCode);
  }
}
