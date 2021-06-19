import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fields = [
    { type: 'text', placeholder: 'Name', iconClasses: 'fas fa-user-circle', isInput: true },
    { type: 'email', placeholder: 'Email', iconClasses: 'fas fa-at', isInput: true },
    { type: 'text', placeholder: 'Subject', iconClasses: 'fas fa-comment-alt', isInput: true },
    { placeholder: 'Message', iconClasses: 'fas fa-envelope', isTextArea: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
