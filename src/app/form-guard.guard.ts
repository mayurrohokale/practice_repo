import { Component } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const formGuardGuard: CanActivateFn = (route, state) => {
  console.log(Component);
  return true;
};
