import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';
import { NavigateService } from '../services/navigate/navigate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public scrollService: ScrollService = inject(ScrollService);
  public navigateService: NavigateService = inject(NavigateService);
}
