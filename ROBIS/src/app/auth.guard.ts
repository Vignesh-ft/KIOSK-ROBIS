import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean {
    const userId = this.cookieService.get('userId');

    if (userId) {
      //this.router.navigateByUrl('/')
      return true;
    } else {
      // userId cookie does not exist, redirect to login
      this.router.navigate(['']);
      return false;
    }
  }
}
