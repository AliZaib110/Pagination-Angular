import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import {CommonModule} from "@angular/common";

import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { Pipe, PipeTransform } from '@angular/core';
const appRoutes:Routes = [
  {path:'about', component: Page2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule    
  ],
  exports: [ NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
