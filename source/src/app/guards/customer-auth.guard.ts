import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { User, UserToken } from '../shared/models';

export const customerAuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);

  if (authService.loggedIn()) {
    return true;
  } else {
    return inject(Router).createUrlTree(['/auth/signin']);
  }

  // return inject(AuthenticationService).canActivate(inject(UserToken), route.params['id']);
};
