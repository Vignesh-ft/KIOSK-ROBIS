import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router:Router){}
  currentAddress = this.router.url
  about= "Founded in 2009, ROBIS embodies Motherson's vision of self-reliance and innovation in Robotics Automation and Innovative Solutions. Headquartered in Chennai, ROBIS is the central hub for design, technology, product development, manufacturing, and testing. To support our global expansion, we have established satellite centers in Europe, dedicated to providing sales and service support. Our journey is driven by perseverance, dedication, and a commitment to self-sufficiency, which has fostered trust and reliability among our customers. With a strong emphasis on technical expertise, a global perspective, and customer-centric solutions, ROBIS consistently delivers innovative and dependable solutions, solidifying our reputation as a trusted partner worldwide."


  verticals = [
    {

      path: "/industry4-0",
      title: "Industry 4.0 & Cloud solutions​",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente, hic, illum saepe iste deleniti officia"
    },
    {
      path: "/machine-rmfg",
      title: "Remanufacturing Services​",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente, hic, illum saepe iste deleniti officia"
    },
    {
      path: "/qa-testing",
      title: "Assembly & Testing Solutions​",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente, hic, illum saepe iste deleniti officia"
    },
    {
      path: "/i-asmbly",
      title: "IMM Robots & Accessories​",
      description: " "
    },
    {
      path: "/join-sol",
      title: "Joining Solutions​",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente, hic, illum saepe iste deleniti officia"
    },
    {
      path: "/mat-handlng",
      title: "Material Handling & Warehouse Automation​",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente, hic, illum saepe iste deleniti officia"
    }
  ]

  goto(address:any) {
    document.getElementById(address)?.scrollIntoView({behavior:'smooth'})
  }
  getInfo(title: string) {

    console.log("Card is working!");
    
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
