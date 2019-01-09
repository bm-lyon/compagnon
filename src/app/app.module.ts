import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

//Les providers
import { ExposService } from './providers/expos.service';

//pour firestore
import * as firebase from 'firebase';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



export const firebaseConfig = {
  apiKey: "AIzaSyCG6E0_pFJtrjlDS_meSp2EDT9vLqt1EDA",
  authDomain: "expos-6f76c.firebaseapp.com",
  databaseURL: "https://expos-6f76c.firebaseio.com",
  projectId: "expos-6f76c",
  storageBucket: "expos-6f76c.appspot.com",
  messagingSenderId: "312134308245"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    ExposService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
