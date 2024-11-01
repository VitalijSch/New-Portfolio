import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public showProject: boolean = false;
  public currentProject: Project | null = null;
  public projects: Project[] = [
    {
      title: 'Join',
      languages: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      gitHub: 'https://github.com/VitalijSch/join-angular',
      url: 'https://join.vitalij-schwab.com',
    },
    {
      title: 'DA Bubble',
      languages: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'Firebase'],
      description: 'A chat messenger app is inspired by Slack or Discord and allows users to communicate with each other through channels or direct messages.',
      gitHub: 'https://github.com/VitalijSch/DA-Bubble',
      url: 'https://da-bubble.vitalij-schwab.com/',
    },
    {
      title: 'Pokedex',
      languages: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'Api'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      gitHub: 'https://github.com/VitalijSch/pokedex-angular',
      url: 'https://pokedex.vitalij-schwab.com',
    },
    {
      title: 'El Pollo Loco',
      languages: ['HTML', 'CSS', 'JavaScript'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      gitHub: 'https://github.com/VitalijSch/El-Pollo-Loco',
      url: 'https://el-pollo-loco.vitalij-schwab.com',
    },
  ];

  public selectCurrentProject(project: Project) {
    this.currentProject = project;
    this.toggleShowProject();
  }

  public toggleShowProject(): void {
    this.showProject = !this.showProject;
    if (this.showProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
}
