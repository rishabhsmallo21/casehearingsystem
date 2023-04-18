import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminComponent } from './admin/admin.component';
import { ChangehearingComponent } from './changehearing/changehearing.component';
import {HomeComponent} from './home/home.component';
import { JudgeComponent } from './judge/judge.component';
import { JudgelogComponent } from './judgelog/judgelog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { UserComponent } from './user/user.component';
import { UserlogComponent } from './userlog/userlog.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'adminlog',component: AdminlogComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'home',component: HomeComponent},
  {path: 'judge',component: JudgeComponent},
  {path: 'navbar',component: NavbarComponent},
  {path: 'newcase',component: NewcaseComponent},
  {path: 'judgelog',component: JudgelogComponent},
  {path: 'user',component: UserComponent},
  {path: 'user1',component: User1Component},
  {path: 'user2',component: User2Component},
  {path: 'changehearing',component: ChangehearingComponent},
  {path: 'userlog',component: UserlogComponent},
  {path: 'about',component: AboutComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
