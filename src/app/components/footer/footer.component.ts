import { Component, OnInit } from '@angular/core';
import { faHome, faFilter, faChartBar, faPlusCircle, faAddressCard, faUser, faLaptopCode, faHistory, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faHistory = faHistory;
  faTasks = faTasks;
  
  constructor() { }

  ngOnInit(): void {
  }
  scrollTo(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

}
