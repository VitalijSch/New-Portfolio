import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { ProjectComponent } from './project/project.component';
import { ReferencesComponent } from './references/references.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent, ReferencesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public portfolioService: PortfolioService = inject(PortfolioService);
}
