import { Component,Input } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { IonicPage, NavController, NavParams, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../../pages/agregar/agregar';
import { Lista } from '../../models';
/**
 * Generated class for the ListasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listas',
  templateUrl: 'listas.html'
})
export class ListasComponent {

  text: string;
  @Input() estado: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public deseosProvider: DeseosProvider, public alertCtrl:AlertController) {
  
  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push(AgregarPage,{
      data: lista.titulo,
      lista: lista
    })
  }

  editarLista(lista: Lista, slidingItem: ItemSliding){
    slidingItem.close();

        const alerta = this.alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Guardar',
                handler: data => {
                    
                    if( data.titulo.length === 0 ){
                        return;
                    }

                    lista.titulo = data.titulo;
                    this.deseosProvider.guardarStorage();
                }
            }]
        });

    alerta.present();
    
  }
  

  borrarLista(lista:Lista){
    this.deseosProvider.borrarListaStorage(lista);
  }

}
