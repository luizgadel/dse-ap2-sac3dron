import { Coletor } from './models/coletor'
import { Usuario } from './models/usuario';

export const COLETORES: Coletor[] = [
  { mac_char: "home_mike", usuario_id: 1, altura: 40.0, lotacao: 0, statusAberta: false, statusTrancado: false, latitude: -3.0218991, longitude: -59.9450322},
  { mac_char: "home_vyct", usuario_id: 2, altura: 50.0, lotacao: 0, statusAberta: false, statusTrancado: false, latitude: -3.0715437, longitude: -59.9714752},
  { mac_char: "home_luiz", usuario_id: 3, altura: 60.0, lotacao: 0, statusAberta: true, statusTrancado: false, latitude: -3.1145886, longitude: -59.9969917},
  { mac_char: "uea_est", usuario_id: 4, altura: 70.0, lotacao: 1, statusAberta: false, statusTrancado: true, latitude: -3.091583, longitude: -60.0198654},
]

export const USUARIOS: Usuario[] = [
  { id: 1, email: "mfp.eng16@uea.edu.br", nome: "MF Pinto "},
  { id: 2, email: "vln.eng16@uea.edu.br", nome: "VL Negreiros"},
  { id: 3, email: "lpgds.egn16@uea.edu.br", nome: "LP Gadelha"},
  { id: 4, email: "-", nome: "UEA-EST"},
]