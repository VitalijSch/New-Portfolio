import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation/translation.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
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
    'skillSet.skill'
  ];

  public scrollService: ScrollService = inject(ScrollService);
  public translationService: TranslationService = inject(TranslationService);
}
