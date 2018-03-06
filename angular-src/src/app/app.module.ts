import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingComponents, RoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { JRLoginService } from './services/jr-login-service';
import { regService } from './services/reg.service';
import { PortfolioComponent } from './services/portfolio/portfolio_component.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PortfolioComponent
  ],
  imports: [
    BrowserModule, RoutingModule,
    FormsModule, HttpModule,
    ReactiveFormsModule
  ],
  providers: [ JRLoginService, regService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
