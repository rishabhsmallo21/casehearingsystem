import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-viewcase',
  templateUrl: './viewcase.component.html',
  styleUrls: ['./viewcase.component.css']
})
export class ViewcaseComponent {

  cases: any[];

  constructor() { 
    this.cases = [];
  }

  ngOnInit(): void {
    // Get cases data from a service or API
    this.cases = [
      { caseId: 1, caseName: 'Case 1', caseType: 'Civil', caseDescription: 'Description of case 1', hearingDate: new Date('2023-05-01'), hearingTime: '10:00 AM', courtroom: 'Courtroom 1', status: 'Open' },
      { caseId: 2, caseName: 'Case 2', caseType: 'Criminal', caseDescription: 'Description of case 2', hearingDate: new Date('2023-05-02'), hearingTime: '11:00 AM', courtroom: 'Courtroom 2', status: 'Closed' },
      { caseId: 3, caseName: 'Case 3', caseType: 'Family', caseDescription: 'Description of case 3', hearingDate: new Date('2023-05-03'), hearingTime: '12:00 PM', courtroom: 'Courtroom 3', status: 'Open' }
    ];
  }
  deleteCase(caseId: string) {
    // Logic to delete case with given ID
  }

  }
  
