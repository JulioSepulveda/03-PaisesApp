import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//Módulo con las rutas de todos los componentes de la App. De esta forma está más ordenado el movimiento entre páginas
const routes: Routes = [
    //Ruta principal de nuestra App
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    //Ruta por región
    {
        path: 'region',
        component: PorRegionComponent,
    },
    //Ruta por capital
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    //Ruta por texto (por pais). Al ponerle los : hacemos que sea un path dinámico (buscando por el texto que pongan en el buscador)
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    //Cualquier otra ruta
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}