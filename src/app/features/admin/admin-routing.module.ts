import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes:Routes=[  
  //CUANDO INGRESO A misutio.com.ar/ redirige a /auth/login  POR LO TANTO CARGA EL MODULO auth (ver este modulo y su routing)
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../auth/auth.module').then(
  //     m => m.AuthModule
  //     ),    
  // }
  {
  
    path: '',
  component: AdminComponent,
  children: [ 
    {path:'*',redirectTo:"auth"},                    
    { path: 'auth', component: AuthComponent   },
    { path: 'dashboard', component: DashboardComponent   },
  ]
}
]


@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AdminRoutingModule { }
