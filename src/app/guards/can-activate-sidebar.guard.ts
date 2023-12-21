// src/app/guards/can-activate-sidebar.guard.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanActivateSidebar implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Implement logic to control sidebar visibility based on conditions
    const hideSidebarRoutes = ['/onboarding1', '/onboarding2', '/login'];
    return !hideSidebarRoutes.includes(state.url);
  }
}
