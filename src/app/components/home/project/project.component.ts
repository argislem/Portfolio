import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  selectedImage: string | null = null
  isModalOpen = false

  Projects = [
    {
      imgs: [
        "../../../../assets/images/scihub/1.png",
        "../../../../assets/images/scihub/2.png",
        "../../../../assets/images/scihub/3.png",
        "../../../../assets/images/scihub/4.png",
        "../../../../assets/images/scihub/5.png",

      ],
      Title: "QRQC Module",
      Description:
        "Developed a full-stack module using Spring Boot and Angular, modeled with UML, and automated the QRQC process for better incident management. Containerized the application with Docker and implemented CI/CD pipelines using Jenkins and GitLab. Worked in an Agile Scrum environment, contributing to sprint planning and task tracking.",
      Technologies: ["Spring Boot", "Angular", "Docker", "Jenkins", " GitLab", "CI/CD"],


    },
{
      imgs: [
        "../../../../assets/images/vegetfood/1.png",
        "../../../../assets/images/vegetfood/2.png",
        "../../../../assets/images/vegetfood/3.png",
        "../../../../assets/images/vegetfood/4.png",
        "../../../../assets/images/vegetfood/5.png",
        "../../../../assets/images/vegetfood/6.png",
        "../../../../assets/images/vegetfood/7.png",
        "../../../../assets/images/vegetfood/8.png",
      ],
      Title: "Commune Asset Manager",
      Description: "A Designed and developed a municipal asset management application to improve tracking and administration of communal properties. Implemented REST APIs with Spring Boot and dynamic interfaces with React.js. Managed PostgreSQL database, integrated front-end and back-end, and performed functional testing and performance improvements.",
      Technologies: ["Spring Boot","React" ,"PostgreSQL", "Github"],
      ghLink: "https://github.com/lethanhtuan939/VegetFood-SpringBoot",
      demoLink: "",
    },
    {
      imgs: [
        "../../../../assets/images/hotel-reservation/1.png",
        "../../../../assets/images/hotel-reservation/2.png",
        "../../../../assets/images/hotel-reservation/3.png",
        "../../../../assets/images/hotel-reservation/4.png",
        "../../../../assets/images/hotel-reservation/5.png",
        "../../../../assets/images/hotel-reservation/6.png",
        "../../../../assets/images/hotel-reservation/7.png",
        "../../../../assets/images/hotel-reservation/8.png",
        "../../../../assets/images/hotel-reservation/9.png",
      ],
      Title: "Tunisia Traditions Shop",
      Description:
        "Developed an e-commerce platform for Tunisian traditional clothing to provide a smooth user experience and performant interface. Built the web application with Next.js and Tailwind CSS, implementing product catalog, shopping cart, and checkout functionalities. Created an admin panel for product and stock management, and performed functional testing and continuous UI improvements.",
      Technologies: ["Next.js", "MySQL", "tailwind css", "JavaScript","Github"],

      demoLink: "",
    },
    {
      imgs: [
        "../../../../assets/images/health-declaration/1.png",
        "../../../../assets/images/health-declaration/2.png",
        "../../../../assets/images/health-declaration/3.png",
        "../../../../assets/images/health-declaration/4.png",
        "../../../../assets/images/health-declaration/5.png",
        "../../../../assets/images/health-declaration/6.png",
      ],
      Title: "Training Manager",
      Description: "Developed a web application for managing training sessions, including a full Arabic version to meet user needs. Built the front-end with React.js and back-end with Node.js, implementing REST APIs and CRUD functionalities. Ensured seamless integration, optimized forms, and improved overall user experience and system reliability.",
      Technologies: ["React.js", "Node.js", "MySQL","Postman"],

    }
    ,
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  }

  @ViewChild("imgContainer") imgContainer!: ElementRef

  constructor(public analyticsService: AnalyticsService) { }

  ngOnInit(): void { }

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  openImageModal(imageSrc: string): void {
    this.selectedImage = imageSrc
    this.isModalOpen = true
    document.body.style.overflow = "hidden"
  }

  closeImageModal(): void {
    this.isModalOpen = false
    this.selectedImage = null
    document.body.style.overflow = "auto"
  }

  // Close modal when clicking outside the image
  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeImageModal()
    }
  }
}

