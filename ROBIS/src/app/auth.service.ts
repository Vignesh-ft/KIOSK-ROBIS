import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // Replace with your actual service or component name

  constructor(private cookieService: CookieService) {}

  login(user: string) {
    if (this.isCookieEmpty()) {
      this.cookieService.set('userId', user);
    }
  }

  isCookieEmpty(): boolean {
    return !this.cookieService.check('userId');
  }
}
