import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/page-dashboard/dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  imports: [
    CommonModule, 
    CoreModule     
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
