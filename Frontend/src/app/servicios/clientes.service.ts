import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/clientes.modelo';
import { SeguridadService } from './seguridad.service';


@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  url = 'http://localhost:3000';
  token: String = '';
    constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
      this.token = this.seguridadServicio.ObtenerToken();
    }


  ObtenerRegistros(): Observable<ModeloCliente[]>{
    return this.http.get<ModeloCliente[]>(`${this.url}/clientes`)
  }

  ObtenerRegistrosPorId(id: string): Observable<ModeloCliente>{
    return this.http.get<ModeloCliente>(`${this.url}/clientes/${id}`)
  }

  CrearCliente(cliente: ModeloCliente): Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(`${this.url}/clientes`, cliente,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarCliente(cliente: ModeloCliente): Observable<ModeloCliente>{
    return this.http.put<ModeloCliente>(`${this.url}/clientes/${cliente.id}`, cliente,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarCliente(id: string): Observable <any> {
    return this.http.delete(`${this.url}/clientes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
