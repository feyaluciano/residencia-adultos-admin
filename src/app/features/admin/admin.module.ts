import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/app/core/core.module';
import { UsersListComponent } from '../users/pages/users-list/users-list.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    AdminRoutingModule,
    DashboardModule,
    UsersModule,
  ],
  declarations: [AdminComponent],
  exports: [  ]
})
export class AdminModule { }
