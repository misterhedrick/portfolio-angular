import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Achievement } from 'src/app/models/achievement';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { AchievementsService } from './achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  faCircle = faCircle;
  myAchievements: Observable<{ achievements: Achievement[] }>;
  constructor(
    public achievementsService: AchievementsService,
    public breakpointService: BreakpointService,
    private store: Store<{ myAchievements: { achievements: Achievement[] } }>
  ) {}

  ngOnInit(): void {
    this.myAchievements = this.store.select('myAchievements');
    // this.achievementsService.getMyAchievements().subscribe((data) => {
    //   this.achievementsService.myAchievements = data;
    // });
  }
}
