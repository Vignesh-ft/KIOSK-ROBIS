import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) {}
  timeTaken = 2

  clearAllCookies() {
    this.cookieService.deleteAll('/');
    window.location.reload()
    localStorage.clear()
  }

  clearCookiesAlert() {
    setTimeout(()=>{alert("You're About to Log out!")}, this.timeTaken * 60 * 1000 * 0.2)
  }

  clearCookiesIn15Minutes() {
    const startTimeKey = 'cookieClearStartTime';
    const startTime = Number(localStorage.getItem(startTimeKey));
    const now = new Date().getTime();

    console.log([startTime]);
    
    if (startTime) {
      const elapsedTime = now - startTime;
      const remainingTime = Math.max(this.timeTaken * 60 * 1000 - elapsedTime, 0);
      console.log("Timer",{"Start":startTime, "Remain":remainingTime});
      setTimeout(() => this.clearAllCookies(), remainingTime);
    } else {
      localStorage.setItem(startTimeKey, now.toString());
      setTimeout(() => this.clearAllCookies(), this.timeTaken * 60 * 1000);
    }
  }
}
