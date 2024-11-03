import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio/portfolio.service';
import { ProjectComponent } from './project/project.component';
import { ReferencesComponent } from './references/references.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation/translation.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent, ReferencesComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public portfolioService: PortfolioService = inject(PortfolioService);
  public translationService: TranslationService = inject(TranslationService);
}
