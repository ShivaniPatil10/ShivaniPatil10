import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { UdashboardComponent } from './udashboard/udashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:UserloginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'udashboard',component:UdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
