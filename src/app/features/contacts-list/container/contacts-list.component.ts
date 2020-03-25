import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public contacts: Contact[] = [];
  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
    // obtenemos todos los contactos del servicios Contacts
    this.contacts = this.contactsService.getContacts();
  }

  onContactSelected(id: number) {
    this.contactsService.selectContactById(id);
  }

}
