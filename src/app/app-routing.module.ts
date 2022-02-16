import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[  
  //CUANDO INGRESO A misutio.com.ar/ redirige a /auth/login  POR LO TANTO CARGA EL MODULO auth (ver este modulo y su routing)  
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(
      m => m.AdminModule
      ),    
  }]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
})
export class AppRoutingModule { }
