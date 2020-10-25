import { Component, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage, IMqttServiceOptions } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { ColetorService } from './coletor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'angular-gmap';
  mac_coletor_ativo = "home_mike"

  subscription_dist: Subscription
  subscription_lockedTray: Subscription
  subscription_openTray: Subscription
  
  topic_basic_url = "dse/vyctor_mikael_luiz/00:04:df:2c:70:54"
  
  constructor(
    private mqttService: MqttService,
    private coletorService: ColetorService,
    ) {}

  ngOnInit() {
    console.log("subscribing to topics: ")

    
    this.subscription_dist = this.mqttService.observeRetained(this.topic_basic_url + "/dist")
      .subscribe((Message: IMqttMessage) => {
        let dist = +Message.payload.toString()
        console.log("Payload recebida: " + dist)
        this.coletorService.updateLotacaoByMAC(this.mac_coletor_ativo, dist)
    });

    this.subscription_lockedTray = this.mqttService.observeRetained(this.topic_basic_url + "/locked")
      .subscribe((Message: IMqttMessage) => {
        let trancado = (Message.payload.toString() == "True")? "Sim": "Não"
        console.log("Coletor trancado? " + trancado)
      })

    this.subscription_openTray = this.mqttService.observeRetained(this.topic_basic_url + "/tray_open")
      .subscribe((Message: IMqttMessage) => {
        let tampaAberta = (Message.payload.toString() == "True")? "Sim": "Não"
        console.log("Tampa aberta? " + tampaAberta)
      })
  }

  ngOnDestroy(): void {
    this.subscription_dist.unsubscribe();
    this.subscription_lockedTray.unsubscribe();
    this.subscription_openTray.unsubscribe();
  }
}
