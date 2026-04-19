import { Component } from '@angular/core';
import { ZardCardComponent } from "@/shared/components/card";

type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
  thumbnail?: string;
};

@Component({
  selector: 'app-home',
  imports: [ZardCardComponent],
  templateUrl: './home.html'
})
export class Home {
  protected readonly sharedProjectThumbnail =
    'https://goodmockups.com/wp-content/uploads/2024/04/Free-Multiple-Screens-iPhone-15-UI-Mockup-PSD-Set-4.jpg';

  protected readonly projects: ProjectItem[] = [
    {
      title: "Billie's Craft Beer Fest App",
      summary:
        'Mobile-first event companion for festival visitors with practical schedule and experience-focused interactions.',
      tags: ['Mobile app', 'Event experience'],
      thumbnail: 'assets/images/billies-craft-beer-fest.png'
    },
    {
      title: 'iCantBudget mobile app',
      summary:
        'Personal finance concept app focused on approachable budgeting flows and clearer money habits for daily use.',
      tags: ['Finance', 'Mobile UX'],
      thumbnail: 'assets/images/icantbudget.png'
    },
    {
      title: 'Student grade calculator app',
      summary:
        'Student tool that simplifies grade tracking and gives a quick view of progress across courses and assessments.',
      tags: ['Education', 'Productivity'],
      thumbnail: 'assets/images/student-grade-calculator.png'
    }
  ];
}
