import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  private storageKey = 'lk-theme';

  // true = light, false = dark
  private readonly _theme$ = new BehaviorSubject<boolean>(false);
  readonly theme$ = this._theme$.asObservable();

  constructor() {
    // initial value will be synced when initFromStorage is called (or header will call it)
  }

  get isLight(): boolean {
    return this.document.documentElement.dataset['theme'] === 'light';
  }

  setLight(light: boolean) {
    if (light) {
      this.document.documentElement.dataset['theme'] = 'light';
      try { localStorage.setItem(this.storageKey, 'light'); } catch (e) { void e; }
      this._theme$.next(true);
    } else {
      delete this.document.documentElement.dataset['theme'];
      try { localStorage.setItem(this.storageKey, 'dark'); } catch (e) { void e; }
      this._theme$.next(false);
    }
  }

  toggle() {
    this.setLight(!this.isLight);
  }

  initFromStorage() {
    try {
      const v = localStorage.getItem(this.storageKey);
      const light = v === 'light';
      if (light) {
        this.document.documentElement.dataset['theme'] = 'light';
      } else {
        delete this.document.documentElement.dataset['theme'];
      }
      this._theme$.next(light);
    } catch (e) {
      // fallback: reflect current DOM attribute
      void e;
      this._theme$.next(this.isLight);
    }
  }
}
