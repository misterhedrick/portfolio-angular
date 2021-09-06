import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { LanguagesService } from './languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  constructor(
    public languagesService: LanguagesService,
    public breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.languagesService.getMyLanguages().subscribe((data) => {
      this.languagesService.myLanguages = data;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('moving item');
    moveItemInArray(
      this.languagesService.myLanguages,
      event.previousIndex,
      event.currentIndex
    );
  }
}
