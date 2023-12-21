import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActivateSidebarGuard } from './can-activate-sidebar.guard';

describe('canActivateSidebarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActivateSidebarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
