import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../models/experience';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  myExperience: Experience[] = [];

  constructor(private http: HttpClient) {}

  getMyExperience() {
    return this.http.get<Experience[]>(environment.API_URL + 'experiences');
  }
}
