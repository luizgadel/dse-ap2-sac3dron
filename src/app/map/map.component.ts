import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColetorService } from '../coletor.service';
import { Coletor } from '../coletor'
import { strict } from 'assert';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;
  infoWindow: google.maps.InfoWindow

  manausGeoCenterCoord = new google.maps.LatLng(-3.0716838, -59.9970428);
  mapOptions: google.maps.MapOptions = {
    center: this.manausGeoCenterCoord,
    zoom: 13,
  };

  constructor(
    private coletorService: ColetorService,
    private usuarioService: UsuarioService
    ) { }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.carregaColetores();
  }

  carregaColetores() {
    this.coletorService.getColetores()
      .subscribe(coletoresList => {
        
        coletoresList.forEach(coletor => {
          
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(coletor.latitude, coletor.longitude),
            title: ''
          })

          marker.addListener("click", () => {
            if (this.infoWindow == null) {
              this.infoWindow = new google.maps.InfoWindow({
                content: this.desenhaJanelaInfo(coletor)
              })
            } else this.infoWindow.setContent(this.desenhaJanelaInfo(coletor))
            
            this.infoWindow.open(marker.getMap(), marker);
          });
          
          marker.setMap(this.map)          
        })
    })
  }

  desenhaJanelaInfo(coletor: Coletor): string {
    let content = ""

    this.usuarioService.getUsuarioById(coletor.usuario_id).subscribe(usuario => {
      content += "<strong> Coletor de " + usuario.nome + "</strong>"
    })
    
    content += "<div> Volume: " + coletor.lotacao*100 + "% cheio</div>"
    content += "<div> Status: " + coletor.status ? "Tampa aberta" : "Tampa fechada" + "</div>"
    
    return content
  }

}
