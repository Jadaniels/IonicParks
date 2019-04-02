import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {Injectable} from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { template } from '@angular/core/src/render3';
import { ParkData } from './providers/park-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // templateUrl: 'app.html',
  providers: [ ParkData ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public parkData: ParkData
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.parkData.load();
  }
}
