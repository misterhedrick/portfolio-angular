import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../models/language';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  myLanguages: Language[] = [];

  constructor(private http: HttpClient) {}

  getMyLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(environment.API_URL + 'languages');
  }
}
