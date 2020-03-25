import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './container/contacts-list.component';

import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
    imports: [
      CommonModule,
      PipesModule,
      DirectivesModule
    ],
    declarations: [
      ContactsListComponent,
      ContactComponent,
      ContactDetailComponent
    ],
    exports: [
      ContactsListComponent,
      ContactComponent,
      ContactDetailComponent
    ],
    providers: []
})
export class ContactsListModule {}
