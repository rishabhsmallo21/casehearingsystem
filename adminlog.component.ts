import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent {
  newCase: boolean = false;
  changeHearing: boolean = false;

  constructor() { }

  showNewCaseForm() {
    this.newCase = true;
    this.changeHearing = false;
  }

  showChangeHearingForm() {
    this.changeHearing = true;
    this.newCase = false;
  }
}

