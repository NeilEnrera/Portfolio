import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  data = portfolio;
}
