import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  inLoading = new BehaviorSubject<boolean>(false);

  constructor() { }

  setOnToLoading(time?: number) {
    this.inLoading.next(true);

    setTimeout(() => {
      this.setOffToLoading();
    }, time ? time : 2000);
  }

  setOffToLoading() {
    this.inLoading.next(false);
  }
}
