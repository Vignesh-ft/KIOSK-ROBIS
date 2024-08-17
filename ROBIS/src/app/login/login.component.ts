import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userName = '';
  phoneNumber = '';
  email='';
  country='';
  phone='';
  errorMessage = '';

  constructor(private router: Router, private cookieService: CookieService) {}

  validateLogin() {
    // Clear previous error message
    this.errorMessage = '';

    // Validate inputs
    if (this.userName.trim() === '' && this.phoneNumber.trim() === '') {
      this.errorMessage = 'Username and Phone Number are required';
      return;
    }

    if (this.userName.trim() === '') {
      this.errorMessage = 'Username is required';
      return;
    }

    if (this.phoneNumber.trim() === '') {
      this.errorMessage = 'Phone Number is required';
      return;
    }

    const loginData = {
      username: this.userName.trim(),
      phone: this.phoneNumber.trim()
    };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Login response data:', data);  // Log the response data
      if (data.message === 'Login successful') {
        this.router.navigateByUrl('/home');


        // Prepare the user details fetched from the login response
        const userDetails = {
          name: data.user.name || null,
          email: data.user.email || null,
          company: data.user.company || null,
          country: data.user.country || null,
          phoneNumber: data.user.phoneNumber || null,
          time: new Date().toISOString() // Current timestamp
        };

        console.log('Sending user details:', userDetails);
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
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to save user details');
      }
      return response.json();
    })
    .then(data => {
      console.log('User details response:', data);
      if (data.message === 'User created') {
        // Set the cookie with appropriate options
        this.cookieService.set('userId', data.userId, { path: '/', sameSite: 'Lax' }); // Adjust SameSite based on your setup
        console.log('User ID stored in cookie:', this.cookieService.get('userId'));
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = 'Failed to save user details';
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      this.errorMessage = 'There was a problem with the fetch operation.';
    });


    // Clear fields after submission
    this.userName = '';
    this.phoneNumber = '';

    // Optional: Clear the error message after a certain period
    setTimeout(() => {
      this.errorMessage = '';
    }, 5000); // Increased to 5 seconds
  }
}
