import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ComponentsModule
    ],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
