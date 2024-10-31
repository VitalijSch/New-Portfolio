import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public toggleLanguage: boolean = false;

  public switchLanguage(): void {
    this.toggleLanguage = !this.toggleLanguage;
  }
}
