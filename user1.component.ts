import { Component } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {

  
  id:string= '54321';
  title:string= 'Product Return Request for Order #7890123';
  description:string= 'The product I received is not as described on your website, and I would like to return it for a refund.';
  status:string= 'Open';
  date:string= '2023-04-18';
  time:string= '2:15 PM';
  room:string= 'C101';
}
