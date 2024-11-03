import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio/portfolio.service';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  public portfolioService: PortfolioService = inject(PortfolioService);

  public getProjectNumber(): string {
    let projectNumber = this.getIndexOfProject() + 1;
    return `0${projectNumber}`;
  }

  public getIndexOfProject(): number {
    let currentProject = this.portfolioService.currentProject;
    let index = this.portfolioService.projects.findIndex(project => project.title === currentProject?.title);
    if (index !== -1) {
      return index;
    } else {
      this.portfolioService.currentProject = this.portfolioService.projects[0];
    }
    return 0;
  }

  public nextProject(): void {
    this.portfolioService.currentProject = this.portfolioService.projects[this.getIndexOfProject() + 1];
  }
}