import { Component, OnInit, HostListener } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public isStickyHeader:boolean = false;
  public contacts$:Observable<Contact[]>;
  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts$ = this.contactsService.contacts$;
    // this.contacts = this.contactsService.getContacts();
  }

  // onContactSelected(id:number){
  //   this.contactsService.selectContactById(id);
  // }

}
