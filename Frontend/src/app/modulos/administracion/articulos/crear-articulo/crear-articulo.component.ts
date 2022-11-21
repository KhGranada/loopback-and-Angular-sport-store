import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloArticulo } from 'src/app/modelos/articulo.modelo';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'referencia':['', Validators. required],
    'nombre': ['', Validators.required],
    'precio':['', Validators.required],
    'marca':['', Validators.required],
    'stock':['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private servicioArticulo: ArticulosService,
    private router: Router){ }

  ngOnInit(): void {
      
  }

  GuardarProducto(){
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

    this.servicioArticulo.CrearArticulo(p).subscribe((datos: ModeloArticulo) => {
      alert("Producto almacenado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert("Error almacenando el producto");
    })
  }

}
