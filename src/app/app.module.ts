import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes:Routes = [
  {path:'about', component: Page2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgxPaginationModule,
    
  ],
  exports: [ NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
