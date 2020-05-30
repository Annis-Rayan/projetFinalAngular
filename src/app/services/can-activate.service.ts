import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const login = sessionStorage.getItem('user'); // TO CHECK
    if (login) {
      return true;
    } else {
      this.router.navigate(['/error'], {queryParams: {error: 'Identification requise'}});
    }
    return false;
  }
}
