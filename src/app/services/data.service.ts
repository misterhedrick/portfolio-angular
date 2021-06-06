import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from '../models/achievement';
import { Experience } from '../models/experience';
import { Language } from '../models/language';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  myAchievements: Achievement[] = [];
  myExperience: Experience[] = [];
  myLanguages: Language[] = [];
  constructor(private http: HttpClient) {
    this.getMyAchievements().subscribe(data => {
      this.myAchievements = data;
    });
    this.getMyExperience().subscribe(data => {
      this.myExperience = data;
    });
    this.getMyLanguages().subscribe(data => {
      this.myLanguages = data;
    });
  }

  getMyAchievements() : Observable<Achievement[]> {
    return this.http.get<Achievement[]>(environment.API_URL + 'achievements');
  }

  getMyExperience() {
    return this.http.get<Experience[]>(environment.API_URL + 'experiences');
  }

  getMyLanguages() : Observable<Language[]> {
    return this.http.get<Language[]>(environment.API_URL + 'languages');
  }
}
