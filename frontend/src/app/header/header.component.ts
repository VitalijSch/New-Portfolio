import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';
import { NavigateService } from '../services/navigate/navigate.service';
import { TranslationService } from '../services/translation/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public toggleLanguage: boolean = false;

  public scrollService: ScrollService = inject(ScrollService);
  public translationService: TranslationService = inject(TranslationService);
  public navigateService: NavigateService = inject(NavigateService);

  public switchLanguage(): void {
    this.toggleLanguage = !this.toggleLanguage;
    if (this.toggleLanguage) {
      this.translationService.switchLanguage('en');
    } else {
      this.translationService.switchLanguage('de');
    }
  }
}
