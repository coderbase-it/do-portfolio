import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // formSubmitUrl = environment.formSubmitUrl;
  // thankYouPageUrl = environment.thankYouPageUrl;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  fields = [
    { name: 'name', type: 'text', placeholder: 'Name', iconClasses: 'fas fa-user-circle', isInput: true },
    { name: 'email', type: 'email', placeholder: 'Email', iconClasses: 'fas fa-at', isInput: true },
    { name: 'subject', type: 'text', placeholder: 'Subject', iconClasses: 'fas fa-comment-alt', isInput: true },
    { name: 'message', placeholder: 'Message', iconClasses: 'fas fa-envelope', isTextArea: true },
  ];

  constructor(private fb: FormBuilder) { }
}
