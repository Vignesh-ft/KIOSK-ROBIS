import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router:Router, private cookieService:CookieService){}

  videoURL = "../../assets/Videos/Home_Display-1.mp4"
  currentAddress = this.router.url
  about= "Founded in 2009, ROBIS embodies Motherson's vision of self-reliance and innovation in Robotics Automation and Innovative Solutions. Headquartered in Chennai, ROBIS is the central hub for design, technology, product development, manufacturing, and testing. To support our global expansion, we have established satellite centers in Europe, dedicated to providing sales and service support. Our journey is driven by perseverance, dedication, and a commitment to self-sufficiency, which has fostered trust and reliability among our customers. With a strong emphasis on technical expertise, a global perspective, and customer-centric solutions, ROBIS consistently delivers innovative and dependable solutions, solidifying our reputation as a trusted partner worldwide."


  verticals = [
    {

      path: "/industry4-0",
      title: "Industry 4.0 & Cloud solutions​",
      description: "Industry 4.0 is the fourth industrial revolution, integrating IoT, AI, and big data to create smart factories that enhance automation, efficiency, and innovation in manufacturing."
    },
    {
      path: "/machine-rmfg",
      title: "Remanufacturing Services​",
      description: "Remanufacturing services restore used products to like-new condition, providing a cost-effective and eco-friendly alternative by extending product life, reducing waste, and conserving resources."
    },
    {
      path: "/qa-testing",
      title: "Assembly & Testing Solutions​",
      description: "Assembly and Testing solutions ensure products are precisely assembled and rigorously tested, delivering reliable, high-quality outcomes that meet industry standards and customer specifications."
    },
    {
      path: "/rob-auto",
      title: "Robotics and Robotics Automation​",
      description: "Robotics and Robotics Automation solutions streamline operations by integrating advanced robotics to enhance efficiency, precision, and productivity, driving innovation and competitive advantage in various industries."
    },
    {
      path: "/join-sol",
      title: "Joining Solutions​",
      description: "Joining solutions provide reliable and precise methods for bonding materials, ensuring strong, durable connections that meet industry standards and enhance the overall quality and performance of products."
    },
    {
      path: "/mat-handlng",
      title: "Material Handling & Warehouse Automation​",
      description: "Material handling and warehouse automation optimize the movement, storage, and management of goods, boosting efficiency and accuracy in warehouse operations."
    }
  ]

  goto(address:any) {
    document.getElementById(address)?.scrollIntoView({behavior:'smooth'})
  }


}
