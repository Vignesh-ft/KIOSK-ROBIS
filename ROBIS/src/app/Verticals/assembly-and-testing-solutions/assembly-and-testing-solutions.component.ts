import { Component } from '@angular/core';

@Component({
  selector: 'app-assembly-and-testing-solutions',
  templateUrl: './assembly-and-testing-solutions.component.html',
  styleUrl: './assembly-and-testing-solutions.component.css'
})
export class AssemblyAndTestingSolutionsComponent {
  data={
    videoPath : "../../../assets/Videos/Assembly.mp4",
    title: "Assembly & testing Solutions",
    aboutVideo: '../../../assets/Verticals Video/Assembly + Testing & Joining Solution.mp4',
    about: "ROBIS offers a range of Assembly & Testing Solutions designed to improve efficiency, accuracy, and quality across various industries. Our solutions address specific challenges and streamline production processes through advanced technology and customized systems. By focusing on your unique needs, we provide solutions that enhance operational performance and ensure high-quality results.",
    documentLink: "",
    products:[
      {
        productName:"Poka-Yoke Systems",
        productImg: "",
        productDesc:"Poka-Yoke systems, or error-proofing solutions, enhance production quality and efficiency by using sensors, fixtures, and controls to prevent errors. Integrating these systems ensures consistently high-quality outcomes, minimizes defects, and reduces costly rework. Adopting Poka-Yoke not only meets but exceeds quality standards, boosting customer satisfaction and expediting production.",
        productURL:""
      },
      {
        productName:"Complex Assembly Stations",
        productImg: "",
        productDesc:"Our complex assembly stations are designed for intricate, multi-step processes with flexibility and precision. Suitable for industries like aerospace, medical devices, and electronics, they handle various product configurations and assembly requirements.",
        productURL:""
      },
      {
        productName:"End-of-Line Testers  ",
        productImg: "",
        productDesc:"End-of-line testers ensure products meet quality and performance standards before leaving the production line. Our advanced, customizable testing solutions provide reliable diagnostics and verify functionality, ensuring consistent quality across various product types and industries.",
        productURL:""
      },
      {
        productName:"Special Purpose Machines (SPMs)",
        productImg: "",
        productDesc:"We design and manufacture Special Purpose Machines (SPMs) to address specific customer needs and unique manufacturing challenges. These custom-built machines are tailored to your precise requirements, offering solutions that enhance efficiency and meet complex production demands.",
        productURL:""
      },
      {
        productName:"Conveyor Solutions ",
        productImg: "",
        productDesc:"Our conveyor systems streamline material handling and product flow with options like belt, roller, and modular conveyors. These solutions integrate seamlessly into your production line, enhancing efficiency and reducing manual handling.",
        productURL:""
      }
    ]
  }
}
