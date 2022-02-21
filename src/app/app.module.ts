import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AdminModule } from './features/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [       
    BrowserModule,
    CommonModule,
    AppRoutingModule,       
    AdminModule,
    CoreModule,
    RouterModule,         
    HttpClientModule,         
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
