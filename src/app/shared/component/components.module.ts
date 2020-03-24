import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { UpperCapitalPipe } from '../pipes/upper-capital.pipe';

@NgModule({
    imports: [CommonModule ],
    declarations: [
        ButtonComponent,
        TabsComponent,
        TabComponent
    ],
    entryComponents: [
        ButtonComponent,
        TabsComponent,
        TabComponent
    ],
    exports: [
        ButtonComponent,
        TabsComponent,
        TabComponent
    ]
})
export class ComponentsModule { }
