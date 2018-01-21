import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TrocadilhoItem } from '../../models/trocadilho-item';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {

  // Variaveis de tela
  titulo = "";
  trocadilho = "";
  resposta = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
        //Pega pelo parametro
        this.titulo = this.navParams.get("titulo");
        this.trocadilho = this.navParams.get("trocadilho");
        this.resposta = this.navParams.get("resposta");
  }

}
