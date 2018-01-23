import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TrocadilhoItem } from '../../models/trocadilho-item';
import { NavParams } from 'ionic-angular/navigation/nav-params';
declare function require(path: string) : any;
var shuffle = require('shuffle-array');

@Component({
  selector: 'page-aleatorios',
  templateUrl: 'aleatorios.html'
})
export class AleatorioPage {

  // Instancia dos arrays
  trocadilhos: FirebaseListObservable<TrocadilhoItem[]>
  items: Array<TrocadilhoItem>;

  constructor(private database: AngularFireDatabase) {
    this.trocadilhos = this.database.list('trocadilhos-list');
      this.trocadilhos.forEach((item) =>{
      this.items = [];
      item.forEach(_item => {
       this.items.push(_item);
      });
      shuffle(this.items);
    });


  }

}
