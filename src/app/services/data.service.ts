import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from '../models/achievement';
import { Experience } from '../models/experience';
import { Language } from '../models/language';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  myAchievements: Achievement[] = [];
  myExperience: Experience[] = [];
  myLanguages: Language[] = [];
  apiURL = environment.API_URL;
  constructor(private http: HttpClient) {}

  getMyAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.apiURL + 'achievements');
  }

  getMyExperience() {
    return this.http.get<Experience[]>(this.apiURL + 'experiences');
  }

  getMyLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiURL + 'languages');
  }

  setApiURL(url: string) {
    this.apiURL = url;
  }
}
