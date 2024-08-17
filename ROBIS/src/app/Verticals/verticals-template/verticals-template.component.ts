import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-verticals-template',
  templateUrl: './verticals-template.component.html',
  styleUrl: './verticals-template.component.css'
})
export class VerticalsTemplateComponent implements OnInit {
  @Input() data:any

  constructor(private router:Router, private cookieService: CookieService){}

  currentAddress = this.router.url

  Message = "Hover to watch the Video"
  videoPath:string = ""
  title:string = ""
  subTitle:string = ""
  about:string = ""
  aboutVideo: any = ""
  documentLink:string = ""
  products:any
  showButton:boolean = false
  changeBool:boolean = false

  ngOnInit(): void {
    this.timingFunction()
    console.log(this.data)
    this.aboutVideo = this.data.aboutVideo
    this.videoPath = this.data.videoPath
    this.title = this.data.title
    this.about = this.data.about
    this.documentLink = this.data.documentLink
    this.products = this.data.products
    this.subTitle = this.data?.subTitle ? this.data?.subTitle : "PRODUCTS"
  }

  timingFunction() {
    setTimeout(()=>{
      this.showButton = true
    },2000)
  }

  productClick(title:any) {
    console.log("Product clicked!");
    const verticleId = this.cookieService.get('verticalId'); // Retrieve UUID from cookie
  
    const productData = {
      verticle_id: verticleId, // Ensure this matches the backend parameter name
      product: title // Ensure this matches the backend parameter name
    };
  
    console.log('Sending request: ', productData);
  
    fetch('http://localhost:3000/actions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(response => {
      console.log('Received response:', response.status); // Log the status code of the response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Product saved:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Log any errors
    });
  }
  

  goto(address:any) {
    document.getElementById(address)?.scrollIntoView({behavior:'smooth'})
  }

  hideMessage() {
    if(this.changeBool === false) {
      this.changeBool = true
      setTimeout(()=>{
        this.Message = ""
      },500)
    }

  }

  showMessage() {
    if(this.changeBool === true) {
      this.changeBool = false
      setTimeout(()=>{
        this.Message = "Hover to watch the Video"
      },500)
    }
  }

}
