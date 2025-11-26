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
        "../../../../assets/images/scihub/7.png",
        "../../../../assets/images/scihub/2.png",
        "../../../../assets/images/scihub/4.png",
        "../../../../assets/images/scihub/5.png",
        "../../../../assets/images/scihub/6.png",
        "../../../../assets/images/scihub/3.png",
      ],
      Title: "UTE-Scihub",
      Description:
        "Hệ thống quản lý đề tài nghiên cứu khoa học và công nghệ - Đại học Sư phạm kỹ thuật - Đại học Đà Nẵng",
      Technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "Docker", "Azure"],
      ghLink: "https://github.com/orgs/UTE-SciHub/repositories",
    },
    {
      imgs: [
        "../../../../assets/images/health-declaration/1.jpeg",
        "../../../../assets/images/health-declaration/2.jpeg",
        "../../../../assets/images/health-declaration/3.jpeg",
        "../../../../assets/images/health-declaration/4.jpeg",
        "../../../../assets/images/health-declaration/5.jpeg",
      ],
      Title: "Health Declaration",
      Description: "A website to declare health and manage the epidemic situation in Da Nang city (school project)",
      Technologies: ["Angular", "TailwindCss", "Spring Boot", "MySQL"],
      ghLink: "https://github.com/lethanhtuan939/Health-Declaration",
    },
    {
      imgs: [
        "../../../../assets/images/hotel-reservation/6.png",
        "../../../../assets/images/hotel-reservation/5.png",
        "../../../../assets/images/hotel-reservation/1.png",
        "../../../../assets/images/hotel-reservation/2.png",
        "../../../../assets/images/hotel-reservation/3.png",
        "../../../../assets/images/hotel-reservation/4.png",
      ],
      Title: "Hotel Reservation App",
      Description:
        "A application to reserve rooms in a hotel (school project), use a website to manage the hotel, and a mobile app for customers",
      Technologies: ["Spring Boot", "MySQL", "Android", "Html", "CSS", "JavaScript"],
      ghLink: "https://github.com/lethanhtuan939/Hotel-Reservation-App",
      demoLink: "",
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
      ],
      Title: "Veget Food",
      Description: "A ecommerce website for vegetarian food (school project)",
      Technologies: ["Spring Boot", "MySQL", "Thymeleaf"],
      ghLink: "https://github.com/lethanhtuan939/VegetFood-SpringBoot",
      demoLink: "",
    },
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

