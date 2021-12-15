import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrorageService {

  constructor() { }

  saveGratitude(graditude: string) {
    const gratitudeList = JSON.parse(this.getFromLocalStorage('gratitudeList') || '');

  }

  saveToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
