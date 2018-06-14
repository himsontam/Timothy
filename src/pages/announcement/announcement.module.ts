import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementPage } from './announcement';

@NgModule({
  declarations: [
    AnnouncementPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementPage),
  ],
})
export class AnnouncementPageModule {}
