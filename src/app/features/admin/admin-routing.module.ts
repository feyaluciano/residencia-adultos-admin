import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/pages/page-auth/auth.component';
import { DashboardComponent } from '../dashboard/pages/page-dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '*', redirectTo: '/admin/auth' },
      { path: 'auth', component: AuthComponent },      
      { path: 'dashboard', component: DashboardComponent },      
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class AdminRoutingModule {}
