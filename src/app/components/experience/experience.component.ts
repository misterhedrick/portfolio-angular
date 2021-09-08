import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import * as fromApp from '../../store/app.reducer';
import * as ExperienceActions from './store/experience.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  myExperience: Observable<{ experience: Experience[] }>;
  constructor(
    public experienceService: ExperienceService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.myExperience = this.store.select('experience');
    this.store.dispatch(new ExperienceActions.GetExperience());

    // this.experienceService.getMyExperience().subscribe((data) => {
    //   this.experienceService.myExperience = data;
    // });
  }
}
