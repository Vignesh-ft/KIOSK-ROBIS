import { Component } from '@angular/core';

@Component({
  selector: 'app-joining-solutions',
  templateUrl: './joining-solutions.component.html',
  styleUrl: './joining-solutions.component.css'
})
export class JoiningSolutionsComponent {
  data={
    videoPath : "../../../assets/Videos/Joining Process.mp4",
    title: "Joining Solutions",
    about: "ROBIS offers a comprehensive suite of digitization solutions designed to revolutionize your operations under Industry 4.0. Our solutions integrate advanced technologies to enhance visibility, efficiency, and sustainability within your facility. By leveraging real-time data and cutting-edge analytics, ROBIS empowers you to make informed decisions and drive operational excellence. ",
    documentLink: "",
    products:[
      {
        productName:"R-Asset",
        productImg: "",
        productDesc:"R-Asset is a state-of-the-art asset tracking solution that provides real-time visibility into the location and status of your assets. It ensures optimal asset utilization, minimizes downtime, and enhances operational efficiency by keeping you always informed about your equipment.",
        productURL:"/industry4-0/r-asset"
      },
      {
        productName:"R-Energy",
        productImg: "",
        productDesc:"R-Energy allows you to monitor and analyze energy consumption across your operations with precision. Featuring detailed charts and data visualization, it helps you identify energy usage patterns, address inefficiencies, and make data-driven decisions to improve energy efficiency and reduce costs. ",
        productURL:"/"
      },
      {
        productName:"R-Carbon",
        productImg: "",
        productDesc:"R-Carbon is designed to track and manage carbon emissions within your facility. This solution provides real-time monitoring and reporting of emissions, supporting your compliance with environmental regulations and helping you implement effective sustainability initiatives.",
        productURL:"/"
      },
      {
        productName:"R-Connect",
        productImg: "",
        productDesc:"R-Connect facilitates seamless connectivity with shop floor injection molding machines, regardless of their make or manufacturing year. It enables you to monitor machine performance, gather crucial operational data, and optimize maintenance practices to boost productivity and reduce downtime.",
        productURL:"/"
      }
    ]
  }
}
