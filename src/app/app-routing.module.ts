import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'client',
    data: {title: 'Form Cliente'},
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'home',
    data: {title: 'Contacts'},
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact-detail',
    data: {title: 'Contact detail'},
    loadChildren: () => import('./features/contacts-list/components/contact-detail/contact-detail.module').then(m => m.ClientDetailModule)
  },
  {
    path: '',
    redirectTo: '/client',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
