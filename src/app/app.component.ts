import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { BreakpointService } from './services/breakpoint.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public breakpointService: BreakpointService,
    private breakpointObserver: BreakpointObserver
  ) {
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
}
