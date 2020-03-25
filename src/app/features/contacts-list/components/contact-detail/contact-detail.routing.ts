import { NgModule } from '@angular/core';
// te ayuda a usar la direciva ngModel y ngSubmite en el template
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail.component';


const routes: Routes = [
    {
        path: '',
        component: ContactDetailComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ContactDetailRoutingModule { }
