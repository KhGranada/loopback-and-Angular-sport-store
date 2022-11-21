import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/clientes.modelo';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  id: string = '' ;
  fgValidador: FormGroup = this.fb.group({
    'id':['', Validators. required],
    'nombre':['', Validators. required],
    'apellidos': ['', Validators.required],
    'correo':['', Validators.required],
    'telefono':['', Validators.required],
    'direccion':['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private servicioCliente: ClientesService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
      this.BuscarCliente();
  }

  BuscarCliente(){
    this.servicioCliente.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloCliente) => {
     this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
    });
  }


  EditarCliente(){
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
    c.id = this.id;

    this.servicioCliente.ActualizarCliente(c).subscribe((datos: ModeloCliente) => {
      alert("Cliente editado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert("Error al actualizar el cliente");
    })
  }
}
