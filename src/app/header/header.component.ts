import { Component } from '@angular/core';
import { TitleService } from '../shared/services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public titleService: TitleService) { }
}
