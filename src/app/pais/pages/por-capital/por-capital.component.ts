import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    /* Para que se ejecute algo del tipo Observable (es lo que devuelve el método buscarPais del servico) tenemos que implementar el método suscribe */
    /* En el subscribe tenemos dos posibles salidas: 1 resp -> funciona correctamente; 2 err -> no devuelve nada */
    this.paisService.buscarCapital( this.termino ).subscribe( 
      ( resp ) => { 
        console.log(resp); 
        this.paises = resp; 

      },
      ( err ) => { 
        this.hayError = true; 
        this.paises = [];
      }

    );
  }
}
