export interface Coletor {
    mac_char: string,
    usuario_id: number,
    altura: number,
    lotacao: number, 
    status: {
        aberta: boolean,
        trancada: boolean
    },
    latitude: number,
    longitude: number;
}
