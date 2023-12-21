// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CanActivateSidebar } from './guards/can-activate-sidebar.guard';

export const routes: Routes = [
  { path: 'onboarding1', component: Onboarding1Component },
  { path: 'onboarding2', component: Onboarding2Component },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [CanActivateSidebar],
  },
  { path: '', redirectTo: '/onboarding1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
