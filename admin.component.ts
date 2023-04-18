import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor( private _router:Router ,private myservice:MyserviceService){}
  name:any;
  password:any;
  falseValue = false
  
  checkInfo(){
    if(this.name == "admin" && this.password =="admin"){
      this._router.navigateByUrl('adminlog') 
    }
    else{
      this.falseValue = true;
      
    }
  }

}
