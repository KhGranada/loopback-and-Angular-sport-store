import { Component, OnInit } from '@angular/core';
import { ModeloArticulo } from 'src/app/modelos/articulo.modelo';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-buscar-articulo',
  templateUrl: './buscar-articulo.component.html',
  styleUrls: ['./buscar-articulo.component.css']
})
export class BuscarArticuloComponent implements OnInit {

listadoRegistros: ModeloArticulo[] = [];

  constructor(private articuloServicio: ArticulosService) { }

  ngOnInit(): void {
    this.ObtenerListadoArticulos();
  }

  ObtenerListadoArticulos(){
    this.articuloServicio.ObtenerRegistros().subscribe((datos: ModeloArticulo[]) =>{
      this.listadoRegistros = datos;
    } )
  }
}
