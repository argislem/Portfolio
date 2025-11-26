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
      Tab: 'Work',
      Items: [
        {
          Orgenization: 'Techzen Company Limited',
          Title: 'Fullstack Developer',
          Date: 'Mar. 2025 - Present',
          Description: [
            'Developed and tested (Unit & Integration) new features using Vue.js and FastAPI.',
            'Worked with large-scale data: processed 2.5-3M records and optimized queries on 250M+ database rows.',
            'Improved system performance by optimizing SQL queries, boosting query speed by ~30%.',
            'Completed the company’s internal DevOps training program.'
          ]
        },
        {
          Orgenization: 'Techzen Company Limited',
          Title: 'Fullstack Developer Intern',
          Date: 'Jan. 2025 - Mar. 2025',
          Description: [
            'Contributed to the development of Techeyes, an internal HR management product.',
            'Participated in new feature development within an Agile/Scrum workflow.',
            'Worked with a Vue.js frontend and Spring boot backend tech stack.'
          ]
        }
      ]
    },
    {
      Tab: 'Education',
      Items: [
        {
          Orgenization: 'University of Technology and Education',
          Title: 'Bachelor of Information Technology',
          Date: '2021 - Present',
          Description: [
            'Ranked as the 2021 salutatorian and awarded a merit-based scholarship.',
            'Actively strengthened software development skills through academic learning and real-world projects.'
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
