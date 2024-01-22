import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loadAdminGuard } from './load-admin.guard';

describe('loadAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
