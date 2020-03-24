import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HighlightDirective } from './highlight.directive';
import { UpperCapitalPipe } from './upper-capital.pipe';
import { StartsWithCapitalValidatorDirective } from './startsWithCapital.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactsListComponent,
        HighlightDirective,
        UpperCapitalPipe,
        StartsWithCapitalValidatorDirective
    ],
    entryComponents: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactsListComponent,
        StartsWithCapitalValidatorDirective
    ],
    exports: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactsListComponent,
        StartsWithCapitalValidatorDirective
    ]
})
export class ComponentsModule { }
