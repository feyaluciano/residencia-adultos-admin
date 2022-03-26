import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/page-dashboard/dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { PosterInformationComponent } from './components/poster-information/poster-information.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule,
    CommonModule, 
    CoreModule     
  ],
  declarations: [DashboardComponent,PosterInformationComponent]
})
export class DashboardModule { }
