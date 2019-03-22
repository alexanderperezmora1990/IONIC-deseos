import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PedientesPage } from '../pages/pedientes/pedientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { DeseosProvider } from '../providers/deseos/deseos';
import { HttpClientModule } from '@angular/common/http';
import { AgregarPage } from '../pages/agregar/agregar';
import { PipesModule } from '../pipes/pipes.module';
import { ListasComponent } from '../components/listas/listas';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PedientesPage,
    TerminadosPage,
    AgregarPage,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    ,HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PedientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeseosProvider
  ]
})
export class AppModule {}
