import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrl: './component-card.component.css'
})
export class ComponentCardComponent {
  @Input() routeURL:string = ""
  @Input() title:string = ""
  @Input() description:string = ""

  getInfo(title: string) {

    // console.log("Card is working!");
    const userId = 1; // Replace with actual logic to retrieve the logged-in user's ID

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
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Log any errors
    });
  }
}
