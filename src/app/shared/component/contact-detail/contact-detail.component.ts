import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/features/contacts-list/services/contacts.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(public contactsService: ContactsService) {
  }

  ngOnInit() {
  }

}
