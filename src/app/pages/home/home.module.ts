import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';
import { ContactsListModule } from 'src/app/features/contacts-list/contacts-list.module';


@NgModule({
    imports: [
        CommonModule,
        ContactsListModule.forRoot(),
        HomeRoutingModule,
        ComponentsModule
    ],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
