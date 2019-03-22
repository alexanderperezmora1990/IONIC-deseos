import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedientesPage } from './pedientes';

@NgModule({
  declarations: [
    PedientesPage,
  ],
  imports: [
    IonicPageModule.forChild(PedientesPage),
  ],
})
export class PedientesPageModule {}
