import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [    
    CommonModule,
    RouterModule    
  ],
   declarations: [NavbarComponent,SidebarComponent],
   exports: [NavbarComponent,SidebarComponent],
})
export class CoreModule { }
