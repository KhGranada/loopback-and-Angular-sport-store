import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { AsignarVentaComponent } from './asignar-venta/asignar-venta.component';


@NgModule({
  declarations: [
    AsignarVentaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
