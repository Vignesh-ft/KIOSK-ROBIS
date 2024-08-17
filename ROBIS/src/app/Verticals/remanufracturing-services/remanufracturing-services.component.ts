import { Component } from '@angular/core';

@Component({
  selector: 'app-remanufracturing-services',
  templateUrl: './remanufracturing-services.component.html',
  styleUrl: './remanufracturing-services.component.css'
})
export class RemanufracturingServicesComponent {
  data={
    videoPath : "../../../assets/Videos/Remanufracturing.mp4",
    title: "Remanufracturing Solutions",
    subTitle: "SERVICES",
    about: "ROBIS provides comprehensive IMM (Injection Molding Machine) Remanufacturing Services designed to enhance the performance, efficiency, and lifespan of your existing machinery. Our expert services address a range of needs, from upgrading control systems to relocating and retrofitting machines. We focus on delivering tailored solutions that meet your specific requirements and improve the functionality of your equipment.",
    documentLink: "",
    products:[
      {
        productName:"Control Retrofitment",
        productImg: "",
        productDesc:"Our Control Retrofitment service upgrades IMM machine control systems with the latest technology, enhancing performance and precision. This modernization improves process control, ensures compatibility with modern software, and boosts operational efficiency.",
        productURL:""
      },
      {
        productName:"Servo Pump Upgrade",
        productImg: "",
        productDesc:"The Servo Pump Upgrade replaces hydraulic pumps with advanced servo-driven ones, boosting energy efficiency, reducing noise, and enhancing IMM machine performance. This upgrade increases precision, speeds up cycle times, and lowers operating costs.",
        productURL:""
      },
      {
        productName:"Machine Relocation Services",
        productImg: "",
        productDesc:"The Servo Pump Upgrade replaces hydraulic pumps with advanced servo-driven ones, boosting energy efficiency, reducing noise, and enhancing IMM machine performance. This upgrade increases precision, speeds up cycle times, and lowers operating costs.",
        productURL:""
      },
      {
        productName:"Electric Retrofitment ",
        productImg: "",
        productDesc:"Electric Retrofitment upgrades your IMM machines' electrical components, including wiring, controllers, and panels, to improve reliability and performance. This modernization enhances energy management and reduces maintenance needs.",
        productURL:""
      }
    ]
  }
}
