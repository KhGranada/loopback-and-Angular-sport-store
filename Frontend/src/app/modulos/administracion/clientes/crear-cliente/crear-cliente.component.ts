import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/clientes.modelo';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  fgValidador: FormGroup = this.fb.group({
    'nombre':['', Validators. required],
    'apellidos': ['', Validators.required],
    'correo':['', Validators.required],
    'telefono':['', Validators.required],
    'direccion':['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private servicioCliente: ClientesService,
    private router: Router){ }

  ngOnInit(): void {
      
  }

  GuardarCliente(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;

    let c = new ModeloCliente();
    c.nombre = nombre;
    c.apellidos = apellidos;
    c.correo = correo;
    c.telefono = telefono;
    c.direccion = direccion;

    this.servicioCliente.CrearCliente(c).subscribe((datos: ModeloCliente) => {
      alert("Cliente almacenado correctamente");
      this.router.navigate(["/administracion/clientes"]);
    }, (error: any) => {
      alert("Error almacenando el cliente");
    })
  }

}
