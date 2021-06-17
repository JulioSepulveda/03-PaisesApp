import { Component, OnInit } from '@angular/core';

/* lo indicado en el atributo styles hace que el ratón cambie a una mano cuando este encima de cualquiera de los botones del sidebar */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    ` li { cursor: pointer } `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
