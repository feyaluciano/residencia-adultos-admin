import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //CUANDO INGRESO A misutio.com.ar/ redirige a /auth/login  POR LO TANTO CARGA EL MODULO auth (ver este modulo y su routing)
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
    //   path: 'public',
    // loadChildren: () => import('./features/public/public.module').then(
    //   m => m.PublicModule
    //   ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
})
export class AppRoutingModule {}
