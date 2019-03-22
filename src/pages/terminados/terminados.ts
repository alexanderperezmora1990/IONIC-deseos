import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';

/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseosProvider: DeseosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminadosPage');
  }

}
