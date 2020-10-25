import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coletor } from '../models/coletor';
import { COLETORES } from '../mock';

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

  updateStatusAbertaByMAC(mac_char: string, aberta: boolean) {
    let coletorPosition = COLETORES.findIndex(coletor => coletor.mac_char == mac_char)
    COLETORES[coletorPosition].statusAberta = aberta
  }

  updateStatusTrancadoByMAC(mac_char: string, trancado: boolean) {
    let coletorPosition = COLETORES.findIndex(coletor => coletor.mac_char == mac_char)
    COLETORES[coletorPosition].statusTrancado = trancado
  }

  getColetores(): Observable<Coletor[]> {
    return of(COLETORES);
  }

  getColetorByMAC(mac_char: string): Observable<Coletor> {
    return of(COLETORES.find(coletor => coletor.mac_char === mac_char))
  }
}
