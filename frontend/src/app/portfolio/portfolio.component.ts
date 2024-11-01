import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "./project/project.component";
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public portfolioService: PortfolioService = inject(PortfolioService);
}
