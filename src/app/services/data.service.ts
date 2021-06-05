import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from '../models/achievement';
import { Experience } from '../models/experience';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected REST_URL: string = 'http://localhost:8080';
  myAchievements: Achievement[] = [];
  myExperience: Experience[] = [];
  myLanguages: Language[] = [];
  constructor(private http: HttpClient) {
    this.getMyAchievements().subscribe(data => {
      this.myAchievements = data;
    });
    this.getMyExperience();
    this.getMyLanguages().subscribe(data => {
      this.myLanguages = data;
    });
  }

  getMyAchievements() : Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.REST_URL + '/achievements');
  }

  getMyExperience() {
    this.myExperience = [
      {
        dates: 'June 2019 - Present',
        title: 'Software Engineer',
        employer: 'CoreLogic',
        highlights: [
          'Building responsive front ends using Angular connecting to .Net Core and Springboot Endpoints',
          'Building rest API’s using .Net Core and Springboot',
          'Leading a POC working with Raspberry Pi’s and creating Google Assistant Commands to learn Ping Pong',
        ],
      },
      {
        dates: 'Sept 2017 - June 2019',
        title: 'Senior Front-End Developer',
        employer: 'Old Dominion Freight Line',
        highlights: [
          'Building responsive front ends using CSS Frameworks such as Foundation and Bootstrap',
          'Collaborated with diverse programming teams to prototype and solve complex business problems',
          'Created containerized Docker front end UIs',
          'Developed Angular Front-end for the application using Angular controllers, partial views and routers and services',
          'Created responsive user interfaces that engage customers across different devices and resolutions'
        ],
      },
      {
        dates: 'Feb 2012 - Sept 2017',
        title: 'Full Stack Developer',
        employer: 'Old Dominion Freight Line',
        highlights: [
          'Designed and developed a web based toolset to create, review, and analyze freight shipments using J2EE',
          'Production support including analyzing and repairing defects',
          'Developed, tested, and designed software using Agile Scrum methodologies',
          'Helped transition external website from JSP/WebSphere to JSF/WebLogic',
          'Developed java functions for odmove.com and odfl.com Front-end'
        ],
      },
      {
        dates: 'Mar 2010 - Feb 2012',
        title: 'Edi Specialist',
        employer: 'Old Dominion Freight Line',
        highlights: [
          'Custom setups and mapping EDI Data',
          'Interact directly with customers for communications solutions',
          'Migrate all EDI setups over to Extol software'
        ],
      },
    ];
  }

  getMyLanguages() : Observable<Language[]> {
    return this.http.get<Language[]>(this.REST_URL + '/languages');
  }
}
