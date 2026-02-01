import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Education',
      Items: [
        {
          Orgenization: 'Higher Institute of Applied Sciences and Technology,  Sousse, Tunisia',
          Title: 'National Engineering Degree in Software Engineering',
          Date: 'September 2022 - June 2025',
          Description: [
            'Comprehensive training in software development, algorithms, and system architecture.',
            'Skills gained in programming, databases, and project management methodologies.',
            'Hands-on projects including web and mobile application development.'
          ]
        },
        {
          Orgenization: 'Higher Institute of Technological Studies, Zaghouan, Tunisia',
          Title: 'Bachelor’s Degree in Computer Technology',
          Date: 'September 2019 – June 2022',
          Description: [
            'Solid foundation in computer systems, networking, and software development.',
            'Practical experience with programming languages and database management.',
            'Participation in academic projects to develop problem-solving and technical skills.'
          ]
        }
      ]
    }
  ];


  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
