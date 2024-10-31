import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-tracker.component.html',
  styleUrl: './mouse-tracker.component.css'
})
export class MouseTrackerComponent {
  public mouseX: number = 0;
  public mouseY: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
