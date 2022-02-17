import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AuthModule } from '../auth/auth.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    AdminRoutingModule,
    DashboardModule,
    AuthModule
  ],
  declarations: [AdminComponent],
  exports: []
})
export class AdminModule { }
