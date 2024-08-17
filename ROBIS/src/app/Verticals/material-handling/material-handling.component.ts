import { Component } from '@angular/core';

@Component({
  selector: 'app-material-handling',
  templateUrl: './material-handling.component.html',
  styleUrl: './material-handling.component.css'
})
export class MaterialHandlingComponent {
  data={
    videoPath : "../../../assets/Videos/Warehouse.mp4",
    title: "Material Handling and Warehouse Solutions",
    aboutVideo:'../../../assets/Verticals Video/Material Handling & WA.mp4',
    about: "ROBIS provides advanced solutions in Material Handling & Warehouse Automation designed to enhance the efficiency and effectiveness of your logistics operations. Our suite of technologies and automation systems streamline material handling processes, ensuring optimal performance and scalability across your warehouse operations.",
    documentLink: "",
    products:[
      {
        productName:"Automated Guided Vehicles (AGVs)",
        productImg: "",
        productDesc:"Our AGVs automate the transportation of materials within your facility. Equipped with advanced navigation and control systems, AGVs improve throughput, reduce manual handling, and enhance safety by autonomously moving goods to designated locations.",
        productURL:""
      },
      {
        productName:"Autonomous Mobile Robots (AMRs)",
        productImg: "",
        productDesc:"ROBIS’s AMRs provide dynamic and flexible material handling in complex warehouses. With advanced sensors and AI, they adapt to surroundings, ensuring efficient transport, improved flexibility, seamless integration, and reduced operational costs.",
        productURL:""
      },
      {
        productName:"Warehouse Management Systems (WMS)",
        productImg: "",
        productDesc:"Our WMS provides a robust platform for managing warehouse operations, including real-time inventory tracking, order management, and data analytics. It streamlines processes, enhances accuracy, and improves overall operational efficiency.",
        productURL:""
      },
      {
        productName:"Automated Storage and Retrieval Systems (AS/RS)",
        productImg: "",
        productDesc:"AS/RS solutions automate storage and retrieval, optimizing space and reducing manual labor. Utilizing robotics and advanced algorithms, they ensure fast, accurate inventory handling, speeding up order fulfillment and lowering costs.",
        productURL:""
      },
      {
        productName:"L-Series",
        productImg: "",
        productDesc:"The L-Series vehicles are designed for efficient material handling for medium-duty applications. These vehicles offer robust performance and are ideal for navigating tight spaces and handling a variety of materials with precision.",
        productURL:""
      },
      {
        productName:"Compact Series",
        productImg: "",
        productDesc:"The Compact Series vehicles are tailored for environments where space is limited. Their compact design allows for maneuverability in confined areas, making them perfect for small to medium-sized warehouses that require agile and flexible material handling solutions.",
        productURL:""
      },
      {
        productName:"Counterbalance",
        productImg: "",
        productDesc:"Counterbalance vehicles are equipped to handle heavy loads with stability and precision. They are ideal for applications requiring significant lifting capabilities and are designed to provide robust performance and durability in demanding environments.",
        productURL:""
      },
      {
        productName:"Forkover",
        productImg: "",
        productDesc:"Forkover vehicles are specialized for handling goods in high-density storage environments. They feature extended forks and high lifting capabilities, making them suitable for tasks that involve reaching and retrieving materials from elevated storage locations.",
        productURL:""
      },
    ]
  }
}
