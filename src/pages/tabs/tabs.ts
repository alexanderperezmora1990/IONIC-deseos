import { Component } from '@angular/core';


import { PedientesPage } from '../pedientes/pedientes';
import { TerminadosPage } from '../terminados/terminados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PedientesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
