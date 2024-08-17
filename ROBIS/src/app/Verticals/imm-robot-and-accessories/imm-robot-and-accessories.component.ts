import { Component } from '@angular/core';

@Component({
  selector: 'app-imm-robot-and-accessories',
  templateUrl: './imm-robot-and-accessories.component.html',
  styleUrl: './imm-robot-and-accessories.component.css'
})
export class ImmRobotAndAccessoriesComponent {
  data={
    videoPath : "../../../assets/Videos/Robot.mp4",
    title: "Robotics and Robotics Solutions",
    aboutVideo: '../../../assets/Verticals Video/Robots & Robotic Automation.mp4',
    about: "ROBIS offers a comprehensive range of Robots & Robotic Automation solutions designed to enhance precision, efficiency, and flexibility in various industrial applications. Our advanced robotic technologies and automation systems are tailored to meet diverse operational needs, driving innovation and optimizing performance across multiple industries.",
    documentLink: "",
    products:[
      {
        productName:"Cartesian Robots",
        productImg: "",
        productDesc:"Cartesian robots, also known as linear robots, use a three-axis system to move in straight lines along the X, Y, and Z axes. They are ideal for tasks requiring high precision and repeatability, such as material handling, assembly, and packaging.",
        productURL:""
      },
      {
        productName:"Delta Robots",
        productImg: "",
        productDesc:"Delta robots are known for their high speed and agility. With their parallel-link design, they excel in applications that require rapid, precise movements, such as picking and placing small items, and are commonly used in high-speed assembly lines and packaging.",
        productURL:""
      },
      {
        productName:"SCARA Robots",
        productImg: "",
        productDesc:"SCARA robots are built for high-speed, high-precision tasks with horizontal rotational movement. They are ideal for applications such as assembly, material handling, and pick-and-place. Their design ensures quick and accurate movements.",
        productURL:""
      },
      {
        productName:"IML Robot (In-Mold Labeling)",
        productImg: "",
        productDesc:"Our IML robots automate the in-mold labeling process, efficiently applying labels during the molding process. This technology ensures precise label placement and integrates seamlessly with injection molding machines, enhancing production efficiency and reducing waste.",
        productURL:""
      },

      {
        productName:"Robotic Welding",
        productImg: "",
        productDesc:"ROBIS’s robotic welding solutions provide high-quality, consistent welds with precision and speed. These systems are designed for various welding applications, including MIG, TIG, and spot welding, improving weld quality, reducing labor costs, and increasing production rates.",
        productURL:""
      },
      {
        productName:"In-Mold Decoration",
        productImg: "",
        productDesc:"In-mold decoration robots automate the application of decorative elements within the molding process. This solution allows for intricate designs and finishes to be integrated into molded parts, enhancing product aesthetics and reducing post-production processes.",
        productURL:""
      },
      {
        productName:"Robotic Tending",
        productImg: "",
        productDesc:"Robotic tending solutions automate the loading and unloading of materials from machines, such as CNC machines and injection molding equipment. This automation increases productivity, reduces manual handling, and ensures consistent and accurate material handling.",
        productURL:""
      },
      {
        productName:"Robotic Punching",
        productImg: "",
        productDesc:"Our robotic punching systems automate the punching process for various materials, providing high-speed and accurate punching operations. These solutions are ideal for manufacturing applications that require precise hole placement and high throughput.",
        productURL:""
      },
      {
        productName:"Robotic Flaming",
        productImg: "",
        productDesc:"Robotic flaming is the process of applying controlled flames to surfaces using robots. This technology is applied to activities including adhesion promotion, surface cleaning, and material property enhancement prior to further processing.",
        productURL:""
      },

    ]
  }
}
