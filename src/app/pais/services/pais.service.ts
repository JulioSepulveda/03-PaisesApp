import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  /* Con este parámetro podemos especificar en la URL los campos que queremos recibir de la llamada para así reducir el flujo de datos */
  get httpParams() {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  constructor( private http: HttpClient ) { }

  /* Metodo para realizar la busqueda del termino entre los posibles paises de la API */
  /* Creamos una interfaces recogiendo la respuesta en Postman y mapeandola a typescript https://app.quicktype.io/. De esta forma podemos cambiar el tipo 
     any de la respuesta por nuestra interfaz Country */
  buscarPais ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams }  );
  }

  /* Metodo para realizar la busqueda del termino entre las posibles capitales de la API */
  /* Creamos una interfaces recogiendo la respuesta en Postman y mapeandola a typescript https://app.quicktype.io/. De esta forma podemos cambiar el tipo 
    any de la respuesta por nuestra interfaz Country */
    buscarCapital ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams }  );
  }

  /* Metodo para realizar la busqueda del termino entre las posibles capitales de la API */
  /* Creamos una interfaces recogiendo la respuesta en Postman y mapeandola a typescript https://app.quicktype.io/. De esta forma podemos cambiar el tipo 
    any de la respuesta por nuestra interfaz Country */
    getPaisPorAlpha ( id: string ): Observable<Country> {
      const url = `${ this.apiUrl }/alpha/${ id }`;
  
      return this.http.get<Country>( url );
    }

    /* Metodo para realizar la busqueda del termino entre las posibles capitales de la API */
    /* Creamos una interfaces recogiendo la respuesta en Postman y mapeandola a typescript https://app.quicktype.io/. De esta forma podemos cambiar el tipo 
    any de la respuesta por nuestra interfaz Country */
    buscarPorRegion ( region: string ): Observable<Country[]> {

      const url = `${ this.apiUrl }/region/${ region }`;
  
      return this.http.get<Country[]>( url, { params: this.httpParams } )
              .pipe(tap(console.log));
    }
}
