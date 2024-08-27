import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private cookieService: CookieService) {}

  getInfo(title: string) {

    console.log("Quick link is working!");
    const userId = this.cookieService.get('userId'); // Retrieve UUID from cookie

  const verticalData = {
    userId: userId,
    verticalName: title
  };

console.log('Sending request to save vertical:', verticalData); // Log the data being sent

fetch('http://localhost:3000/verticles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(verticalData)
})
.then(response => {
  console.log('Received response:', response.status); // Log the status code of the response
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Vertical saved:', data); // Log the response data
  if (data.verticalId) {
    // Set the verticalId cookie
    this.cookieService.set('verticalId', data.verticalId.toString(), { path: '/' });
    console.log('Vertical ID stored in cookie:', data.verticalId);
  }
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error); // Log any errors
});
}
}
