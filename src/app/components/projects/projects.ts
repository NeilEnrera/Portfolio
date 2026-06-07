import { Component, signal } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  data = portfolio;
  expandedProject = signal<number | null>(null);

  toggleProject(id: number) {
    this.expandedProject.update(v => v === id ? null : id);
  }

  imageError(event: Event) {
    const img = event.target as HTMLElement;
    img.style.display = 'none';
  }
}
