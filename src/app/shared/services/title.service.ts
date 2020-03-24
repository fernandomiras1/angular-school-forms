import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

// el decorador Injectable(), permite injecar servicios en el constructor
// en otras palabras puede recibir otros servicios por medio del contructor
@Injectable({
    // tree-shaking ( Decorador Inyectable - Después de Angular 6 )
    providedIn: 'root'
})
export class TitleService {
    // Subject: puede manejar mulipres subscipriciones, a demas es capas de emitir eventos
    private titleSubject: Subject<string> = new Subject();
    // Generamos una variabel publica, para solo escuchar los eventos solamente.
    public title$: Observable<string> = this.titleSubject.asObservable();

    constructor(
        private router: Router,
        private title: Title
    ) {
        this.init();
    }

    init() {
        this.router.events.pipe(
            // ActivationEnd: Un evento desencadenado al final de la parte de activación de la fase de resolución de enrutamiento.
            filter((event => event instanceof ActivationEnd)),
            filter((event: ActivationEnd) => event.snapshot.firstChild === null ),
            map( (event: ActivationEnd) =>  event.snapshot.data)
        ).subscribe(data => {
            // Agregamos el titulo en la pestaña del google Chrome.
            this.title.setTitle(data.title);
            this.titleSubject.next(data.title);
        });
    }

}
