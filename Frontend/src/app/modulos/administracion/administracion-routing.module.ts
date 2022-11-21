import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarArticuloComponent } from './articulos/buscar-articulo/buscar-articulo.component';
import { CrearArticuloComponent } from './articulos/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './articulos/editar-articulo/editar-articulo.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path: 'crear-cliente',
    component: CrearClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent,
    canActivate:[ValidadorSesionGuard]
    },
    {
      path: 'listar-clientes',
      component: BuscarClienteComponent,
    canActivate:[ValidadorSesionGuard]

    },
    {
      path: 'crear-articulo',
      component: CrearArticuloComponent,
    canActivate:[ValidadorSesionGuard]

    },
    {
      path: 'listar-articulos',
      component: BuscarArticuloComponent,
    canActivate:[ValidadorSesionGuard]

    },
    {
      path: 'editar-articulo/:id',
      component: EditarArticuloComponent,
    canActivate:[ValidadorSesionGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
