import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent {
  constructor( private _router:Router ,private myservice:MyserviceService){}
  name:any;
  password:any;
  falseValue = false
  
  checkInfo(){
    if(this.name == "judge" && this.password =="judge"){
      this._router.navigateByUrl('judgelog') 
    }
    else{
      this.falseValue = true;
      
    }
  }
}

