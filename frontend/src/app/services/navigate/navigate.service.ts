import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  private router: Router = inject(Router);

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
