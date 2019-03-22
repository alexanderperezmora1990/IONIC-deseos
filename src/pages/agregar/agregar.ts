import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../models';
import { DeseosProvider } from '../../providers/deseos/deseos';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  
  lista: Lista;
  nombreItem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deseosService:DeseosProvider) {
    
    
    if (this.navParams.get('lista')) {
      this.lista = this.navParams.get('lista')
    } else {
      this.lista= new Lista(this.navParams.get('data')); 
      this.deseosService.agregarLista(this.lista);
    }
    
    
  }

  agregarItem(){
    if (this.nombreItem.length != 0) {
      const ITEM = new ListaItem(this.nombreItem);
      this.lista.items.push(ITEM);
      this.nombreItem = "";
      this.deseosService.guardarStorage();
    }
  }
  
  actualizaTarea(item:ListaItem){
    item.completado = !item.completado;
   
    if (this.lista.items.filter(data => !data.completado).length === 0) {
      
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();

    }else{

      this.lista.terminada = false;
      this.lista.terminadaEn = null;

    }
    
    this.deseosService.guardarStorage();
  }

  remover(index:number){
    this.lista.items.splice(index,1);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
