import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coletor } from './coletor';
import { COLETORES } from './mock';

@Injectable({
  providedIn: 'root'
})
export class ColetorService {

  constructor() { }

  updateLotacaoByMAC(mac_char: string, dist: number) {
    let coletorPosition = COLETORES.findIndex(coletor => coletor.mac_char == mac_char)
    let altura = COLETORES[coletorPosition].altura
    COLETORES[coletorPosition].lotacao = 1 - dist/altura 
  }

  updateStatusByMAC(mac_char: string, aberta: boolean, trancado: boolean) {
    
  }

  getColetores(): Observable<Coletor[]> {
    return of(COLETORES);
  }

  getColetorByMAC(mac_char: string): Observable<Coletor> {
    return of(COLETORES.find(coletor => coletor.mac_char === mac_char))
  }
}
