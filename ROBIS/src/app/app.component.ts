import { Component } from '@angular/core';
import { CookieManagerService } from './services/cookie-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ROBIS';

  constructor(private cookieManager: CookieManagerService) {}

  ngOnInit() {
    this.cookieManager.clearCookiesIn15Minutes();
  }
}
