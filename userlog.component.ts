import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent {
  
  id:string= '12345';
  title:string= 'Billing Dispute with XYZ Company';
  description:string= 'We have not received payment for services rendered last month, and have not been able to reach anyone at XYZ Company to resolve the issue.';
  status:string= 'In Progress';
  date:string= '2023-04-18';
  time:string= '10:30 AM'
  room:string= 'P251';
  
    
}

  


