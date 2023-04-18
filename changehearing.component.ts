import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-changehearing',
  templateUrl: './changehearing.component.html',
  styleUrls: ['./changehearing.component.css']
})
export class ChangehearingComponent {

  case1: any[] = [];
  hearingDate: string = '';
  hearingTime: string = '';
  courtroom: string = '';
  caseid: string = '';

  onSubmit() {
    // TODO: Update hearing time and date in the database
    console.log(this.case1.push({ caseid: this.caseid, hearingDate: this.hearingDate, hearingTime: this.hearingTime, courtroom: this.courtroom }));
  }
}

