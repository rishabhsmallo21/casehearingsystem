import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { JudgeComponent } from './judge/judge.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { JudgelogComponent } from './judgelog/judgelog.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { ChangehearingComponent } from './changehearing/changehearing.component';
import { ViewcaseComponent } from './viewcase/viewcase.component';
import { CasedetailsComponent } from './casedetails/casedetails.component';
import { UpdatecasestatusComponent } from './updatecasestatus/updatecasestatus.component';
import { UserlogComponent } from './userlog/userlog.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    JudgeComponent,
    UserComponent,
    HomeComponent,
    NavbarComponent,
    AdminlogComponent,
    JudgelogComponent,
    NewcaseComponent,
    ChangehearingComponent,
    ViewcaseComponent,
    CasedetailsComponent,
    UpdatecasestatusComponent,
    UserlogComponent,
    User1Component,
    User2Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
