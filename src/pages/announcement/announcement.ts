import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ConstantsProvider } from '../../providers/constants/constants';
import { AnnouncementDetailsPage } from '../announcement-details/announcement-details';


@IonicPage()
@Component({
  selector: 'page-announcement',
  templateUrl: 'announcement.html',
})
export class AnnouncementPage {

  title: string;
  posts: any[];

  constructor(private constants:ConstantsProvider, private http: Http, public navCtrl: NavController)//, public navParams: NavParams 
  {
    http.get('https://www.googleapis.com/blogger/v3/blogs/byurl?key=' + constants.getApiKey() + '&url=' + constants.getUrl()).subscribe (response => {
      let data = response.json();
      this.title = data.name;
      this.getPost(data.posts.selfLink);
    });
  }

  getPost(url:string) {
    this.http.get(url + '?key=' + this.constants.getApiKey()).subscribe(response=>{
      let data = response.json ();
      this.posts = data.items;
    });
  }
  
  openPost (post) {
    this.navCtrl.push(AnnouncementDetailsPage,{post: post})
  }

}
