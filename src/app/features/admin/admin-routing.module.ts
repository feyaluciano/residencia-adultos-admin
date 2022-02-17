import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/pages/page-auth/auth.component';
import { DashboardComponent } from '../dashboard/pages/page-dashboard/dashboard.component';
import { UsersListComponent } from '../users/pages/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '*', redirectTo: '/admin/dashboard' },        
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'users', component: UsersListComponent },      
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class AdminRoutingModule {}
