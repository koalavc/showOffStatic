import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingComponents, RoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { JRLoginService } from './services/jr-login-service';
import { JRPortfolioService } from './services/portfolio/jr-portfolio-service';
import { SearchResultsService } from './services/search-result-service';
import { CanActivateRouteGuard } from './services/can-activate-route.guard';
// import { PortfolioComponent } from './services/portfolio/portfolio_component.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    // PortfolioComponent
  ],
  imports: [
    BrowserModule, RoutingModule,
    FormsModule, HttpModule,
    ReactiveFormsModule, HttpClientModule
  ],

  providers: [ JRLoginService, JRPortfolioService, CanActivateRouteGuard, SearchResultsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
