import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';
import { NavigateService } from '../services/navigate/navigate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public toggleLanguage: boolean = false;

  public scrollService: ScrollService = inject(ScrollService);

  public navigateService: NavigateService = inject(NavigateService);

  public switchLanguage(): void {
    this.toggleLanguage = !this.toggleLanguage;
  }
}
