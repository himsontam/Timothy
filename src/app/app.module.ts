import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { MediaPage } from '../pages/media/media';
import { PhotoPage } from '../pages/photo/photo';
import { PrayerPage } from '../pages/prayer/prayer';
import { AboutPage } from '../pages/about/about';
import { AnnouncementPage } from '../pages/announcement/announcement';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AnnouncementDetailsPage } from '../pages/announcement-details/announcement-details';
import { ConstantsProvider } from '../providers/constants/constants';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';

import * as firebase from 'firebase'; 

const firebaseAuth = {
    apiKey: "AIzaSyACcdM2f70M-QIC3z5qI6U15dXS3okq2-s",
    authDomain: "ecctimothy-6b27a.firebaseapp.com",
    databaseURL: "https://ecctimothy-6b27a.firebaseio.com",
    projectId: "ecctimothy-6b27a",
    storageBucket: "ecctimothy-6b27a.appspot.com",
    messagingSenderId: "557587347354"
  };
  firebase.initializeApp(firebaseAuth);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,
    MainPage,
    AnnouncementPage,
    AnnouncementDetailsPage,
    CalendarPage,
    MediaPage,
    PhotoPage,
    PrayerPage,
    AboutPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,
    MainPage,
    AnnouncementPage,
    AnnouncementDetailsPage,
    CalendarPage,
    MediaPage,
    PhotoPage,
    PrayerPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    ConstantsProvider
  ]
})
export class AppModule {}
