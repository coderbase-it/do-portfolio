import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Social } from '../models/social';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private http: HttpClient) { }

  getSocialAccounts() {
    return this.http.get<Social[]>('assets/json/socials.json');
  }
}
