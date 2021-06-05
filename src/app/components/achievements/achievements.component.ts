import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  faCircle = faCircle;
  constructor(public dataService: DataService, public breakpointService: BreakpointService) { }

  ngOnInit(): void {
  }

}
