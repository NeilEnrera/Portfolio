import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  private platformId = inject(PLATFORM_ID);

  data = portfolio;

  form = {
    name: signal(''),
    email: signal(''),
    message: signal('')
  };

  submitted = signal(false);

  onSubmit() {
    if (this.form.name() && this.form.email() && this.form.message()) {
      this.submitted.set(true);
      if (isPlatformBrowser(this.platformId)) {
        const mailto = `mailto:${this.data.contact.email}?subject=Portfolio Contact from ${encodeURIComponent(this.form.name())}&body=${encodeURIComponent(this.form.message())}`;
        window.location.href = mailto;
      }
    }
  }

  resetForm() {
    this.form.name.set('');
    this.form.email.set('');
    this.form.message.set('');
    this.submitted.set(false);
  }
}
