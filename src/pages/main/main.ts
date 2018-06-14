import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnouncementPage } from '../announcement/announcement';
import { AboutPage } from '../about/about';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  url: string = 'https://tinyurl.com/yapmv8on';

  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController, private fire:AngularFireAuth ) { 

  }

  openAnnouncementDetailsPage(){
    this.navCtrl.push(AnnouncementPage);
  }

  openAboutPage(){
    this.navCtrl.push(AboutPage);
  }

  public openGoogleFormInBrowser(url: string) {

    const options : InAppBrowserOptions = {
      zoom: 'no'
    }

    const bowser = this.inAppBrowser.create(url,'_self',options);
 }

//  signOut () {
//   this.fire.auth.signOut();
//   this.navCtrl.setRoot( 'HomePage ');
//   // this.navCtrl.parent.parent.pop();
//  }
 

}