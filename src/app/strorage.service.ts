import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrorageService {
  // gratitudeList = [];

  constructor() { }

  saveGratitude(graditude: string) {
    const gratitudeList = JSON.parse(this.getFromLocalStorage('gratitudeList') || '[]');
    gratitudeList.push(graditude);
    this.saveToLocalStorage('gratitudeList', JSON.stringify(gratitudeList));
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
