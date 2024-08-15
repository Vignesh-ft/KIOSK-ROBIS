import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName =""
  companyName=""
  errorMessage=""
  constructor(private router: Router) {}


  validateLogin() {
    if (this.userName === "" && this.companyName === "") {
      this.errorMessage = "Username and Company Name are required";
      return;
    }

    if (this.userName === "") {
      this.errorMessage = "Username is required";
      return;
    }

    if (this.companyName === "") {
      this.errorMessage = "Company name is required";
      return;
    }

    // Prepare the login data
    const loginData = {
      username: this.userName,
      company: this.companyName
    };

    // Send the login request
    fetch('http://localhost:3000/api/login', { // Adjust URL if needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.message === 'Login successful') {
        alert('Login successful');
        // Redirect to the desired page, e.g., dashboard
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = data.error || 'Invalid credentials';
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      this.errorMessage = 'There was a problem with the fetch operation.';
    });

    // Clear fields after submission
    this.userName = "";
    this.companyName = "";
    
    setTimeout(() => {
      this.errorMessage = "";
    }, 2000);
  }
}
