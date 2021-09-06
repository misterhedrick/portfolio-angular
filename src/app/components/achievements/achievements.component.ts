import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { AchievementsService } from './achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  faCircle = faCircle;
  constructor(
    public achievementsService: AchievementsService,
    public breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.achievementsService.getMyAchievements().subscribe((data) => {
      this.achievementsService.myAchievements = data;
    });
  }
}
