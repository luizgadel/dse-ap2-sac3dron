import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';
import { USUARIOS } from '../mock';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarios(): Observable<Usuario[]> {
    return of(USUARIOS);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return of(USUARIOS.find(usuario => usuario.id === id));
  }
}
