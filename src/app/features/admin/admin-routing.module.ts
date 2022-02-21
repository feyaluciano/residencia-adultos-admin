import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/pages/page-auth/auth.component';
import { DashboardComponent } from '../dashboard/pages/page-dashboard/dashboard.component';
import { UsersListComponent } from '../users/pages/users-list/users-list.component';
import { UsersFormComponent } from '../users/pages/users-form/users-form.component';

const routes: Routes = [  
  {
    path: 'admin',
    component: AdminComponent,
    children: [          
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'users', component: UsersListComponent },
      { path: 'users/edit/:IdUser', component: UsersFormComponent }, 
      { path: 'users/new', component: UsersFormComponent },      
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class AdminRoutingModule {}
