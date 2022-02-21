import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http/http.service';
@NgModule({
  imports: [    
    CommonModule,
    RouterModule,
    
        
  ],
  providers: [HttpService],
   declarations: [NavbarComponent,SidebarComponent],
   exports: [NavbarComponent,SidebarComponent],
})
export class CoreModule { }
