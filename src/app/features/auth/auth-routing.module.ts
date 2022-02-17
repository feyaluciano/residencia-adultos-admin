import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/pages/page-auth/auth.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
      path: '', 
      redirectTo: '/auth/login', 
      pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [      
      { path: 'login', component: LoginComponent },            
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class AuthRoutingModule {}
