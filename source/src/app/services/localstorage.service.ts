import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void { }
  getItem(key: string): string | null { return null; }
  key(index: number): string | null { return null; }
  removeItem(key: string): void { }
  setItem(key: string, value: string): void { }

  constructor() {
    this.length = 0;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;

  constructor() {
    this.storage = new LocalStorage();

    AppComponent.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });

    this.length = 0;
  }

  [name: string]: any;

  length: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return String(this.storage.getItem(key))?.replace('"', '\"');
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
