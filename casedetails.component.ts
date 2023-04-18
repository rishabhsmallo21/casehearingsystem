import { Component } from '@angular/core';

@Component({
  selector: 'app-casedetails',
  templateUrl: './casedetails.component.html',
  styleUrls: ['./casedetails.component.css']
})
export class CasedetailsComponent {

  

  caseName: any;
  caseType: any;
  caseDescription: any;
  hearingDate: any;
  hearingTime: any;
  courtRoom: any;
  cases: any[] = [];

  addCaseDetails() {
    const newCase: any = {
      caseName: this.caseName,
      caseType: this.caseType,
      caseDescription: this.caseDescription,
      hearingDate: this.hearingDate,
      hearingTime: this.hearingTime,
      courtRoom: this.courtRoom,
      status: 'Pending'
    };

    this.cases.push(newCase);

    this.caseName = '';
    this.caseType = '';
    this.caseDescription = '';
    this.hearingDate = null;
    this.hearingTime = '';
    this.courtRoom = '';
  }
}

