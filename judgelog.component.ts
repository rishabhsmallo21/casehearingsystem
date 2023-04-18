import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-judgelog',
  templateUrl: './judgelog.component.html',
  styleUrls: ['./judgelog.component.css']
})
export class JudgelogComponent {
  
    
    viewcase1: boolean = false;
    casedetails1: boolean = false;
    updatecasestatus1: boolean = false;
    constructor() { }
    viewcase() {
    this.viewcase1 = true;
    this.casedetails1 = false;
    this.updatecasestatus1 = false;
    }
    
    casedetails() {
    this.casedetails1 = true;
    this.viewcase1 = false;
    this.updatecasestatus1 = false;
    }
    
    updatecasestatus(){
    this.updatecasestatus1 = true;
    this.viewcase1 = false;
    this.casedetails1 = false;
    }
    cases: any[] = [
      { caseName: 'Case A', hearingTime: '10:00 AM', courtroom: 'Courtroom 1', status: 'In Progress', caseId: 1 },
      { caseName: 'Case B', hearingTime: '11:00 AM', courtroom: 'Courtroom 2', status: 'Pending', caseId: 2 },
      { caseName: 'Case C', hearingTime: '02:00 PM', courtroom: 'Courtroom 3', status: 'Completed', caseId: 3 },
      ];
    deleteCase(caseId: number): void {
    const index = this.cases.findIndex(c => c.caseId === caseId);
    if (index !== -1) {
    this.cases.splice(index, 1);
    }
    }
    }