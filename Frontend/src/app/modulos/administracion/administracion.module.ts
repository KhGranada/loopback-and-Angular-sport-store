import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearArticuloComponent } from './articulos/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './articulos/editar-articulo/editar-articulo.component';
import { EliminarArticuloComponent } from './articulos/eliminar-articulo/eliminar-articulo.component';
import { BuscarArticuloComponent } from './articulos/buscar-articulo/buscar-articulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    CrearArticuloComponent,
    EditarArticuloComponent,
    EliminarArticuloComponent,
    BuscarArticuloComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
