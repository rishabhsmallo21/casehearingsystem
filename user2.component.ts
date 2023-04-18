import { Component } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {
   id:string= '9876';
  title:string= 'Noise Complaint from Neighbors';
  description:string= 'The neighbors are playing loud music and I can\'t sleep.';
  status:string= 'Closed';
  date:string= '2023-01-12';
  time:string= '3:15 PM';
  room:string= 'L502';
}
