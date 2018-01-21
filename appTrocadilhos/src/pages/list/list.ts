import { Component , ViewChild} from '@angular/core';
import { Nav, NavController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TrocadilhoItem } from '../../models/trocadilho-item';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  // Declara arrays
  trocadilhos: FirebaseListObservable<TrocadilhoItem[]>;
  items: Array<TrocadilhoItem>;

  // Constroi aplicação
  constructor(private database: AngularFireDatabase, public nav: NavController) {
    // Pega dados do banco
    this.trocadilhos = this.database.list('trocadilhos-list');
    this.initializeItems();
  }

  // Transforma list firebase em array
  initializeItems() {
    this.trocadilhos.forEach((item) =>{
      this.items = [];
      item.forEach(_item => {
       this.items.push(_item);
      });
    });
  }

  // Pega o item para lista - Original do ionic
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // Seleciona e apresenta o trocadilho
  selectTrocadilho(item: TrocadilhoItem){
    this.nav.push(CardPage, {titulo: item.titulo, trocadilho: item.trocadilho, resposta: item.resposta});
  }

}
  

