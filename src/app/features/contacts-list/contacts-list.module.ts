import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';
import { ContactsListComponent } from './container/contacts-list.component';

// Paso 1
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ContactsListComponent
    ],
    entryComponents: [
        ContactsListComponent
    ],
    exports: [
        ContactsListComponent
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
