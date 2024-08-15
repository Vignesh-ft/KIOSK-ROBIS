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

    // Prepare the login data
    const loginData = {
      username: this.userName.trim(),
      company: this.companyName.trim()
    };

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          // Check if the error message is present in the response
          this.errorMessage = data.message || 'Something went wrong'; // Set error message
          throw new Error(this.errorMessage);
        });
      }
      return response.json();
    })
    .then(data => {
      // Handle successful user creation
      console.log('User created:', data);

      // Redirect or perform other actions
      this.router.navigate(['/home']); // Example redirect
    })
    .catch(error => {
      // Handle fetch errors
      console.error('There was a problem with the fetch operation:', error);
      this.errorMessage = error.message; // Display the error message on the screen
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
