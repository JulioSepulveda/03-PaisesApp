import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  /* Antes de estar inicializado */
  /* Tiene todo lo necesario para subscribirnos a cualquier cambio del URL */
  constructor( private activateRoute: ActivatedRoute, 
               private paisService: PaisService) { }
  
  /* Cuando ya está inicializado */
  ngOnInit(): void {

    /* Nos subscribimos al id para recoger ese dato de los parámetros */
 /*    this.activateRoute.params
      .subscribe( ({ id }) => {
        this.paisService.getPaisPorAlpha( id )
          .subscribe ( pais => {
            console.log(pais);
          });
      }) */

      /* Mejor manera de realizar lo anterior utilizando switchMap */
      /* tap es un disparador secundario. Recibe el obsercablede switchMap */
      this.activateRoute.params
        .pipe(
            switchMap(( { id } ) => this.paisService.getPaisPorAlpha( id )),
            tap( console.log )
        )
        .subscribe( pais => this.pais = pais)
  }

}
