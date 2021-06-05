import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  handset: boolean = false;
  xsmall: boolean = false; //max 599px
  small: boolean = false; //max 959px
  medium: boolean = false; //max 1270px 
  large: boolean = false; 
  xlarge: boolean = false;
  constructor() { }
}
