import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // Replace with your actual service or component name

  constructor(private cookieService: CookieService) {}

  login(user: string) {
    if (this.isCookieEmpty()) {
        console.log("Auth Service: ");
        localStorage.setItem('userId', user);
        this.cookieService.set('userId', user);
    }
  }

  isCookieEmpty(): boolean {
    console.log("Auth Service");
    return !this.cookieService.check('userId');
  }
}
