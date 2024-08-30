import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoColor = false

  constructor(private cookieService:CookieService, private router:Router){}

  logoutButton():boolean {
    if(this,this.router.url === "/know-about-us"){
      return false
    }
    return true
  }

  changeColor(){
    this.logoColor = !this.logoColor
  }

  logout() {
    this.cookieService.deleteAll()
    console.log("Inside Logout");
    localStorage.clear();
    this.router.navigate([''])
  }
}
