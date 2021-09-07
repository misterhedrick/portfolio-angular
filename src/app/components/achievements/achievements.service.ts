import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from '../../models/achievement';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  constructor(private http: HttpClient) {}

  getMyAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(environment.API_URL + 'achievements');
  }
}
