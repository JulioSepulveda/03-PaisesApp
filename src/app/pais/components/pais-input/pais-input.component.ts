import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})  

export class PaisInputComponent implements OnInit {

  /* Evento para enviar cuando se pulsa entrer */
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  /* Evento para enviar cada vez que se para de escribir */
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  /* Recogemos el placeholder de la clase que le ha llamado */
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  /* En el OnInit realizamos el envio de lo tecleado. Con pipe realizamos un decalage de 300 ms */
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
    });
  }

  /* asignamos el valor al onEnter */
  buscar() {
   this.onEnter.emit ( this.termino );
  }

  /* Asignamos el valor al debouncer */
  teclaPresionada( event: any ) {
    this.debouncer.next ( this.termino );
  }

}
