import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [    
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  declarations: [UsersListComponent,UsersFormComponent]
})
export class UsersModule { }
