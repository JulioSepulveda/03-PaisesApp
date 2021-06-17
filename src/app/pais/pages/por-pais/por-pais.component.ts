import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

/* Lo especificado en los styles hace que se pueda pinchar en las sugerencias del buscador */
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean = false; 
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    /* Para que se ejecute algo del tipo Observable (es lo que devuelve el método buscarPais del servico) tenemos que implementar el método suscribe */
    /* En el subscribe tenemos dos posibles salidas: 1 resp -> funciona correctamente; 2 err -> no devuelve nada */
    this.paisService.buscarPais( this.termino ).subscribe( 
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

  /* En este método incluimos sugerencias personalizadas a medida que escriben en el buscador */
  /* splice lo que hace es limitar la cantidad de respuesta. En este caso solo 3 países */
  sugerencias ( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
      .subscribe ( 
        paises => this.paisesSugeridos = paises.splice(0,5), 
        (err) => this.paisesSugeridos = []
      );
      
      
    
  }
}
