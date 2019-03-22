import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../../models/index';

/*
  Generated class for the DeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeseosProvider {
  
  listas: Lista[] = [];
  constructor(public http: HttpClient) {
    this.cargarStorage();
  }

  agregarLista(lista:Lista){
    this.listas.push(lista)
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  borrarListaStorage( lista:Lista ){
    this.listas = this.listas.filter(dataLista => dataLista.id != lista.id);
    this.guardarStorage();
  }

  cargarStorage(){

    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
    
  }

}
