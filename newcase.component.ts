import { Component } from '@angular/core';
import { Router, RouterEvent,  RouterLinkActive } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.css']
})
export class NewcaseComponent {
  formData: any = {};

  constructor() { }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.formData);
  }
}


