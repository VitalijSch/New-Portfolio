import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public technologies: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Material Design',
    'TypeScript',
    'Angular',
    'Firebase',
    'GIT',
    'Rest-Api',
    'Scrum',
    'Growth mindset'
  ];

}
