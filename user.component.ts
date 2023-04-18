import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor( private _router:Router ,private myservice:MyserviceService){}
  name:any;
  password:any;
  falseValue = false
  
  checkInfo(){
    if(this.name == "user" && this.password =="user"){
      this._router.navigateByUrl('userlog') 
    }
    else if (this.name == "user1" && this.password =="user1"){
      this._router.navigateByUrl('user1') 
    }
    else if (this.name == "user2" && this.password =="user2"){
      this._router.navigateByUrl('user2')
    }
    else{
      this.falseValue = true;
      
    }
}
}