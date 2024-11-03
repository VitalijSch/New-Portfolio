import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';
import { NavigateService } from '../services/navigate/navigate.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public scrollService: ScrollService = inject(ScrollService);
  public navigateService: NavigateService = inject(NavigateService);
  public router: Router = inject(Router);
}
