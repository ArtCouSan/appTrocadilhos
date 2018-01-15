import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AleatorioPage } from '../pages/aleatorios/aleatorios';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AleatorioPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAcf4ULlj7UL5WLrAh-CPOYzyzdqWBKAug",
      authDomain: "trocadilhos-5f404.firebaseapp.com",
      databaseURL: "https://trocadilhos-5f404.firebaseio.com",
      projectId: "trocadilhos-5f404",
      storageBucket: "trocadilhos-5f404.appspot.com",
      messagingSenderId: "78513646200"
    }),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AleatorioPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
