import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HighlightDirective } from './highlight.directive';
import { UpperCapitalPipe } from './upper-capital.pipe';

@NgModule({
    imports: [CommonModule ],
    declarations: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactDetailComponent,
        ContactsListComponent,
        HighlightDirective,
        UpperCapitalPipe
    ],
    entryComponents: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactDetailComponent,
        ContactsListComponent
    ],
    exports: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactDetailComponent,
        ContactsListComponent
    ]
})
export class ComponentsModule { }
