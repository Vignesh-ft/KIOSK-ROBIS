import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = '';
  companyName = '';
  email='';
  country='';
  phone='';
  errorMessage = '';
  
  constructor(private router: Router) {}

  validateLogin() {
    // Clear previous error message
    this.errorMessage = '';

    // Validate inputs
    if (this.userName.trim() === '' && this.companyName.trim() === '') {
      this.errorMessage = 'Username and Company Name are required';
      return;
    }

    if (this.userName.trim() === '') {
      this.errorMessage = 'Username is required';
      return;
    }

    if (this.companyName.trim() === '') {
      this.errorMessage = 'Company name is required';
      return;
    }

    const loginData = {
      username: this.userName.trim(),
      company: this.companyName.trim()
    };
    
    fetch('http://localhost:3000/login', {
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
        this.router.navigateByUrl('/home');
    
        // Prepare the user details fetched from the login response
        const userDetails = {
          name: data.user.username,
          email: data.user.email || null,
          company: data.user.company,
          country: data.user.country || null,
          phoneNumber: data.user.phone || null,
          time: new Date().toISOString() // Current timestamp
        };
    
        // Make a second fetch request to store the user's details
        return fetch('http://localhost:3000/userdetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userDetails)
        });
      } else {
        this.errorMessage = data.error || 'Invalid credentials';
        throw new Error(this.errorMessage);
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      this.errorMessage = 'There was a problem with the fetch operation.';
    });
    

    // Clear fields after submission
    this.userName = '';
    this.companyName = '';

    // Optional: Clear the error message after a certain period
    setTimeout(() => {
      this.errorMessage = '';
    }, 5000); // Increased to 5 seconds
  }
}
