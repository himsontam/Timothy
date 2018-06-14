import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-announcement-details',
  templateUrl: 'announcement-details.html',
})
export class AnnouncementDetailsPage {

  private post;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
