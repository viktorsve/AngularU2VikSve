import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor() { }

  /**
   * Boolean function that will return false if there is no localStorage item
   * with the key name user, otherwise it will return true.
   */
  canActivate(): boolean {
    if (localStorage.getItem('user') == null) {
      return false;
    }
    return true;
  }
}
