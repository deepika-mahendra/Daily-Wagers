import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewWorkHistoryComponent } from './view-work-history/view-work-history.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { AddWorkrequirementComponent } from './add-workrequirement/add-workrequirement.component';
import { WorkrequirementListComponent } from './workrequirement-list/workrequirement-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { pathToFileURL } from 'url';
import { RegistrationComponent } from './registration/registration.component';
import { AdmincardsComponent } from './admincards/admincards.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'admin',component:AdminDashboardComponent,
  children: [
    {
      path:  'home',
      component:  AdmincardsComponent,
      },
    {
    path:  'Add-Employee',
    component:  AddEmployeeComponent,
    },
    {
    path:  'Employee-list',
    component:  EmployeeListComponent,
    },
    {
    path:  'Employer-list',
    component:   EmployerListComponent
    },
       {
    path:  'Add-Employer',
    component:  AddEmployerComponent
    },
    {
    path:  'Add-WorkReq',
    component:  AddWorkrequirementComponent
    },
    {
    path:  'WorkReq-List',
    component:  WorkrequirementListComponent
    }

    ]
  
},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
  children: [
    {
      path:  'registration',
      component:  RegistrationComponent
      },
    {
    path:  'requirement',
    component:  ViewRequirementsComponent
    },
    {
    path:  'profile',
    component:  ViewProfileComponent
    },
    {
    path:  'history',
    component:  ViewWorkHistoryComponent
    }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
