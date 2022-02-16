import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent,SidebarComponent]
})
export class CoreModule { }
