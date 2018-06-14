import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { CalendarPage } from '../calendar/calendar';
import { MediaPage } from '../media/media';
import { PhotoPage } from '../photo/photo';
import { PrayerPage } from '../prayer/prayer';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1Root: any = MainPage;
  public tab2Root: any = CalendarPage;
  public tab3Root: any = MediaPage;
  public tab4Root: any = PhotoPage;
  public tab5Root: any = PrayerPage;
  public tab6Root: any = AboutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
