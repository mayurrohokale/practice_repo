import { CanActivateFn } from '@angular/router';

export const loadAdminGuard: CanActivateFn = (route, state) => {

  const role = localStorage.getItem('role');  
  console.log(role);
  if(role === 'DEMO')
  {
    return true;
  }  
  return false;
};
