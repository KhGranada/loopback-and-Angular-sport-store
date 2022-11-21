import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})

export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router)  { }
    
  ngOnInit(): void {

  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let password = this.fgValidador.controls["password"].value;
    let passwordCifrada = cryptoJS.MD5(password).toString();
    this.servicioSeguridad.Identificar(usuario, passwordCifrada).subscribe((datos:any) => {
        //OK
      //alert("Datos correctos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);

    }, (error: any) => {
      // KO
      alert("Datos Inválidos")
    })

  }

}