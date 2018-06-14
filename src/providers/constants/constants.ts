
  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsProvider {
  private url = 'https://ecctimothyannouncement.blogspot.com/';
  private apikey = 'AIzaSyCTDctKleCyMgl-LIp-HD5xaqzyeXWayPM';

  constructor() {}
  
  getUrl() {
    return '' + this.url;
  }
  getApiKey() {
    return '' + this.apikey;
  }
}
