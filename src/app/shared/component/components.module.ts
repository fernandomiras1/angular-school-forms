import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HighlightDirective } from './highlight.directive';
import { UpperCapitalPipe } from './upper-capital.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [CommonModule ],
    declarations: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactDetailComponent,
        HighlightDirective,
        UpperCapitalPipe,
        HeaderComponent
    ],
    entryComponents: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        ContactDetailComponent,
        HeaderComponent
    ],
    exports: [
        ButtonComponent,
        TabsComponent,
        TabComponent,
        ContactComponent,
        HighlightDirective,
        ContactDetailComponent,
        HeaderComponent
    ]
})
export class ComponentsModule { }
