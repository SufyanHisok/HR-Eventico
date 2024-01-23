import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { DashboardViewComponent } from './main/Dashboard/dashboard-view/dashboard-view.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  {path: "dashboard", component: DashboardViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
