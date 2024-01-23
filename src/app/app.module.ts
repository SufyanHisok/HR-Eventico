import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Navbars/top-navbar/top-navbar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './main/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { DashboardViewComponent } from './main/Dashboard/dashboard-view/dashboard-view.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OnboardingComponent } from './main/onboarding/onboarding.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomeComponent,
    SidenavComponent,
    DashboardViewComponent,
    OnboardingComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
