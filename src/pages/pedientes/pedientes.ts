import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models';
import { AgregarPage } from '../agregar/agregar';
import { AgregarPageModule } from '../agregar/agregar.module';

/**
 * Generated class for the PedientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedientes',
  templateUrl: 'pedientes.html',
})
export class PedientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseosProvider: DeseosProvider, public alertCtrl: AlertController ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedientesPage');
  }


  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Nueva lista',
      message: "Nombre de la nueva lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista'
        },
      ],
      buttons: [
        {
          text: 'cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'guardar',
          handler: data => {
            this.navCtrl.push(AgregarPage,{
              data: data.titulo
            });
          }
        }
      ]
    });
    prompt.present();
  }


}
