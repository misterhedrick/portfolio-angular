import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { LanguagesService } from './languages.service';
import { Language } from 'src/app/models/language';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  myLanguages: Language[];
  myLanguagesSub = new Subject<Language[]>();
  constructor(
    public languagesService: LanguagesService,
    public breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.myLanguagesSub.subscribe((data) => {
      this.myLanguages = data;
    });
    this.languagesService.getMyLanguages().subscribe((data) => {
      this.myLanguagesSub.next(data);
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('moving item');
    moveItemInArray(this.myLanguages, event.previousIndex, event.currentIndex);
  }
}
