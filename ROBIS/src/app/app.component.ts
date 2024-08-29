import { Component } from '@angular/core';
import { CookieManagerService } from './services/cookie-manager.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ROBIS';

  constructor(private cookieManager: CookieManagerService, private cookieService:CookieService) {}

  ngOnInit() {
    let localStorageCookie = localStorage.getItem('Vignes')
    if(localStorageCookie) {
      this.cookieService.set("userId", localStorageCookie)
    }
  }
}
