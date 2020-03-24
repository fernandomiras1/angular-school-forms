import { Component, ViewChild, ElementRef, AfterViewChecked, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('homeState', [

      state('hide', style({
        transform: 'translateY(0%)'
      })),
      state('show', style({
        transform: 'translateY(-100%)'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements AfterViewChecked {

  public showHeader = true;
  private lastScrollTop = 0;
  private navHeight = 0;
  @ViewChild('nav') nav: ElementRef;

  constructor(public titleService: TitleService) { }

  // uso este metodo para cuando carge todo el sitio recien ahi verificar el tamaño del header.
  // Termina de renderizar todo el sitio.
  ngAfterViewChecked(): void {
    this.navHeight = this.nav.nativeElement.offsetHeight;
    document.body.style.marginTop = `${this.navHeight}px`;
  }

  @HostListener('window:scroll')
  private handleScroll() {
    // el scrollTop comineza en 0 luego va aumentando a medida que vamos scrolliando
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
    if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

}
