import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  id: number = 0;
  name:string = '';
  desc: string = '';
  img: string = '';
  price: number = 0;

  cources =[
    {id:1,
    name: "HTml, CSS , cSAss , Bootstrap, Angular MAterial",
    desc: "This beginner-level course is designed to provide a comprehensive introduction to HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), the fundamental building blocks of web development. Participants will gain hands-on experience in creating and styling web pages, developing a solid foundation for further exploration in web design and development.",
    img: './assets/images.jpeg',
    price: 36.52
   
  },

  {id:2,
    name: "javascript",
    desc: "This course serves as an introduction to JavaScript, a versatile and essential programming language for web development. Participants will delve into the core concepts of JavaScript, gaining hands-on experience in writing scripts to enhance the functionality and interactivity of web pages. This foundational course is suitable for beginners and those looking to strengthen their understanding of JavaScript. to HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), the fundamental building blocks of web development. Participants will gain hands-on experience in creating and styling web pages, developing a solid foundation for further exploration in web design and development.",
    img: './assets/images.jpeg',
    price: 55.52
   
  },

  {id:3,
    name: "typescript",
    desc: "This course is a comprehensive introduction to TypeScript, a superset of JavaScript that adds static typing and other advanced features to enhance code quality and developer productivity. Geared towards web developers seeking a robust and scalable development experience, this course covers TypeScript fundamentals, its integration with popular frameworks, and best practices for writing maintainable code.",
    img: './assets/images.jpeg',
    price: 44.52
   
  },

  {id:4,
    name: "react",
   desc:"This course provides an in-depth exploration of React.js, a powerful JavaScript library for building user interfaces. Designed for web developers looking to enhance their skills, this course covers the core concepts of React, component-based development, and state management. Participants will gain practical experience in building dynamic and efficient web applications.",
    img: './assets/images.jpeg',
    price: 11.52
   
  },

  ];
  
  constructor(private route: ActivatedRoute)
  {
    this.route.queryParams.subscribe((params)=>{
      this.name = params['name'];
      const course =this.cources.find((c) => c.name === this.name);
      if(course)
      {
        this.id = course.id;
        this.price = course.price;
        this.desc = course.desc;
        this.img = course.img;
        console.log({id: course.id, name: course.name, price: course.price});
      }
    });
  }
  
}
