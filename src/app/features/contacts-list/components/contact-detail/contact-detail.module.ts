import { NgModule } from '@angular/core';
// te ayuda a usar la direciva ngModel y ngSubmite en el template
import { FormsModule } from '@angular/forms';
import { ContactDetailComponent } from './contact-detail.component';
import { AdressModule } from 'src/app/features/adress/adress.module';
import { ContactDetailRoutingModule } from './contact-detail.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdressModule.forRoot(),
        ContactDetailRoutingModule,
        ComponentsModule
    ],
    declarations: [ContactDetailComponent],
    entryComponents: [ContactDetailComponent],
    exports: [ContactDetailComponent]
})
export class ClientDetailModule { }
