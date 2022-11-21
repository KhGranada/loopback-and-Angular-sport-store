import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloArticulo } from 'src/app/modelos/articulo.modelo';
import { ArticulosService } from 'src/app/servicios/articulos.service';
import { BuscarArticuloComponent } from '../buscar-articulo/buscar-articulo.component';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit{
id: string = '' ;
  fgValidador: FormGroup = this.fb.group({
    'id':['', Validators. required],
    'referencia':['', Validators. required],
    'nombre': ['', Validators.required],
    'precio':['', Validators.required],
    'marca':['', Validators.required],
    'stock':['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private servicioArticulo: ArticulosService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
      this.BuscarArticulo();
  }

  BuscarArticulo(){
    this.servicioArticulo.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloArticulo) => {
     this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["referencia"].setValue(datos.referencia);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["marca"].setValue(datos.marca);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["stock"].setValue(datos.stock);
    });
  }


  EditarProducto(){
    let referencia = this.fgValidador.controls["referencia"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let marca = this.fgValidador.controls["marca"].value;
    let stock = this.fgValidador.controls["stock"].value;

    let p = new ModeloArticulo();
    p.referencia = referencia;
    p.nombre = nombre;
    p.precio = precio;
    p.marca = marca;
    p.stock = stock;
    p.id = this.id;

    this.servicioArticulo.ActualizarArticulo(p).subscribe((datos: ModeloArticulo) => {
      alert("Producto editado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert("Error al actualizar el producto");
    })
  }
}


