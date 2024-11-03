import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public showProject: boolean = false;
  public currentProject!: Project;;
  public projects: Project[] = [
    {
      title: 'Join',
      languages: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'Firebase'],
      description: 'projects.join',
      gitHub: 'https://github.com/VitalijSch/join-angular',
      url: 'https://join.vitalij-schwab.com',
    },
    {
      title: 'DA Bubble',
      languages: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'Firebase'],
      description: 'projects.daBubble',
      gitHub: 'https://github.com/VitalijSch/DA-Bubble',
      url: 'https://da-bubble.vitalij-schwab.com/',
    },
    {
      title: 'Pokedex',
      languages: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'Api'],
      description: 'projects.pokedex',
      gitHub: 'https://github.com/VitalijSch/pokedex-angular',
      url: 'https://pokedex.vitalij-schwab.com',
    },
    {
      title: 'El Pollo Loco',
      languages: ['HTML', 'CSS', 'JavaScript'],
      description: 'projects.elPolloLoco',
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
