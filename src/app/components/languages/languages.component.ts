import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor(public dataService: DataService, public breakpointService: BreakpointService) { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('moving item');
    moveItemInArray(this.dataService.myLanguages, event.previousIndex, event.currentIndex);
  }

}
