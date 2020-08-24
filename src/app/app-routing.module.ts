import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {
    path:'', component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},  
      {path: 'grafica1', component: GraficaComponent}  ,
      {path: '' , redirectTo:'/dashboard', pathMatch: 'full'},  
   
    ]
  },



  {path: 'register', component: RegisterComponent},  
  {path: 'login', component: LoginComponent},
  
  {path: '**' , component: NofoundComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
