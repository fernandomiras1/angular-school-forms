import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';
import { ContactsListComponent } from './container/contacts-list.component';

import { ContactComponent } from './components/contact/contact.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        PipesModule,
        DirectivesModule
    ],
    declarations: [
        ContactsListComponent,
        ContactComponent
    ],
    entryComponents: [
        ContactsListComponent,
        ContactComponent
    ],
    exports: [
        ContactsListComponent,
        ContactComponent
    ],
    providers: []
})
export class ContactsListModule {
    static forRoot(): ModuleWithProviders {
      return {
          ngModule: ContactsListModule
      };
    }
}
