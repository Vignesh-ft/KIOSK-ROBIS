import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName =""
  companyName=""
  errorMessage=""

  validateLogin() {
    if(this.userName === "" && this.companyName === ""){
      this.errorMessage = "Username and Company Name is Requried"
    }

    else if(this.userName === "") {
      this.errorMessage = "Username is Requried"
      this.companyName = ""
    }

    else if(this.companyName === "") {
      this.errorMessage = "Company name is requried"
      this.companyName = ""
    }

    setTimeout(()=>{
      this.errorMessage = ""
      return
    },2000)
  }
}
