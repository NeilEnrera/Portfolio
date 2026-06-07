import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class CertificationsComponent {
  data = portfolio;
}
