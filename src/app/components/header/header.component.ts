import { Component, HostListener, OnInit } from '@angular/core';
import { faHome, faFilter, faChartBar, faPlusCircle, faAddressCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public transparentNav = true;
  constructor(public breakpointService: BreakpointService) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      console.log('window srolled');
      this.transparentNav = false;
    } else {
      console.log('window at top');
      this.transparentNav = true;
    }
  }
  scrollTo(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

}
