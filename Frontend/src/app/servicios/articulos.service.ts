import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloArticulo } from '../modelos/articulo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
url = 'http://localhost:3000';
token: String = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloArticulo[]>{
    return this.http.get<ModeloArticulo[]>(`${this.url}/articulos`)
  }

  ObtenerRegistrosPorId(id: string): Observable<ModeloArticulo>{
    return this.http.get<ModeloArticulo>(`${this.url}/articulos/${id}`)
  }

  CrearArticulo(articulo: ModeloArticulo): Observable<ModeloArticulo>{
    return this.http.post<ModeloArticulo>(`${this.url}/articulos`, articulo,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarArticulo(articulo: ModeloArticulo): Observable<ModeloArticulo>{
    return this.http.put<ModeloArticulo>(`${this.url}/articulos/${articulo.id}`, articulo,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarArticulo(id: string): Observable <any> {
    return this.http.delete(`${this.url}/articulos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
