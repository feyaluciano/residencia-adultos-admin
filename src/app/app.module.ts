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
    AdminModule,
    CoreModule,
    RouterModule,     
    AppRoutingModule,   
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
