import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointService } from './services/breakpoint.service';
//import { DataService } from './services/data.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DataService } from './services/data.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';

  constructor(
    // private dataService: DataService,
    public breakpointService: BreakpointService,
    private breakpointObserver: BreakpointObserver,
    private overlay: OverlayContainer,
    private dataService: DataService
  ) {
    this.dataService.getMyAchievements().subscribe((data) => {
      this.dataService.myAchievements = data;
    });
    this.dataService.getMyExperience().subscribe((data) => {
      this.dataService.myExperience = data;
    });
    this.dataService.getMyLanguages().subscribe((data) => {
      this.dataService.myLanguages = data;
    });
    // this.dataService.getNewProfileExerciseData();
    this.breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.Handset]) {
          this.breakpointService.handset = true;
          this.breakpointService.xsmall = false;
          this.breakpointService.small = false;
          this.breakpointService.medium = false;
          this.breakpointService.large = false;
          this.breakpointService.xlarge = false;
        }
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.breakpointService.handset = false;
          this.breakpointService.xsmall = true;
          this.breakpointService.small = false;
          this.breakpointService.medium = false;
          this.breakpointService.large = false;
          this.breakpointService.xlarge = false;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.breakpointService.handset = false;
          this.breakpointService.xsmall = false;
          this.breakpointService.small = true;
          this.breakpointService.medium = false;
          this.breakpointService.large = false;
          this.breakpointService.xlarge = false;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.breakpointService.handset = false;
          this.breakpointService.xsmall = false;
          this.breakpointService.small = false;
          this.breakpointService.medium = true;
          this.breakpointService.large = false;
          this.breakpointService.xlarge = false;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.breakpointService.handset = false;
          this.breakpointService.xsmall = false;
          this.breakpointService.small = false;
          this.breakpointService.medium = false;
          this.breakpointService.large = true;
          this.breakpointService.xlarge = false;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.breakpointService.handset = false;
          this.breakpointService.xsmall = false;
          this.breakpointService.small = false;
          this.breakpointService.medium = false;
          this.breakpointService.large = false;
          this.breakpointService.xlarge = true;
        }
      });
  }
  //   ngOnInit(): void {
  //     $(document).ready(function() {
  //       const doc = document.documentElement
  //       doc.style.setProperty('--vh', window.innerHeight/100 + 'px')
  //  });
  //   }
}
