import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TrocadilhoItem } from '../../models/trocadilho-item';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-aleatorios',
  templateUrl: 'aleatorios.html'
})
export class AleatorioPage {

  trocadilhos: FirebaseListObservable<TrocadilhoItem[]>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    
    this.trocadilhos = this.database.list('trocadilhos-list');

  }

}
