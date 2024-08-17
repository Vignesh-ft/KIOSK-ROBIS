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
    subTitle:'SERVICES',
    aboutVideo:'../../../assets/Videos/Joining_Video.mp4',
    about: "ROBIS provides a diverse range of Joining Solutions designed to meet various needs in plastic joining and assembly. Our advanced technologies ensure strong, reliable, and precise connections, enhancing product quality and manufacturing efficiency. Whether you require standard joining methods or customized solutions, we offer the expertise and technology to deliver optimal results.",
    documentLink: "",
    products:[
      {
        productName:"Ultrasonic Welding",
        productImg: "",
        productDesc:"Ultrasonic welding utilizes high-frequency ultrasonic vibrations to generate localized heat, fusing plastic parts together without the need for additional materials. This method is ideal for producing strong, precise welds with minimal thermal impact, making it suitable for applications in automotive, electronics, and medical device manufacturing.",
        productURL:""
      },
      {
        productName:"Hotplate Welding",
        productImg: "",
        productDesc:"Hotplate welding involves heating plastic parts on a heated plate until they reach the desired temperature, then pressing them together to form a weld. This method is effective for joining large or complex parts, providing strong, consistent welds with precise control over the welding process.",
        productURL:""
      },
      {
        productName:"Heat Staking",
        productImg: "",
        productDesc:"Heat staking uses localized heat to melt and deform plastic stakes, which then solidify to form a secure connection between parts. This method is commonly used for assembly in electronics and automotive applications, where it offers a reliable way to attach components without the need for additional fasteners.",
        productURL:""
      },
      {
        productName:"Vibrational Welding",
        productImg: "",
        productDesc:"Vibrational welding employs high-frequency vibrations to generate heat through friction, melting and joining plastic parts. This technique is suitable for applications requiring precise alignment and strong welds, making it ideal for the assembly of small to medium-sized components in industries like consumer goods and medical devices.",
        productURL:""
      },
      {
        productName:"Special Purpose Machines",
        productImg: "",
        productDesc:"ROBIS offers custom-built machines for unique plastic joining challenges, tailored to specific customer needs. Our Joining Solutions blend advanced technology with industry expertise for high-quality, reliable results. Whether conventional or bespoke, our solutions enhance manufacturing processes and product performance.",
        productURL:""
      }
    ]
  }
}
