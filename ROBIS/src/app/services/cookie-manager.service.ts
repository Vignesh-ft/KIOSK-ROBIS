import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) {}

  clearAllCookies() {
    this.cookieService.deleteAll('/');
  }

  clearCookiesIn15Minutes() {
    const startTimeKey = 'cookieClearStartTime';
    const startTime = Number(localStorage.getItem(startTimeKey));
    const now = new Date().getTime();

    if (startTime) {
      const elapsedTime = now - startTime;
      const remainingTime = Math.max(15 * 60 * 1000 - elapsedTime, 0);

      setTimeout(() => this.clearAllCookies(), remainingTime);
    } else {
      localStorage.setItem(startTimeKey, now.toString());
      setTimeout(() => this.clearAllCookies(), 15 * 60 * 1000);
    }
  }
}
