import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor(public experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getMyExperience().subscribe((data) => {
      this.experienceService.myExperience = data;
    });
  }
}
