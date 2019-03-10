import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string;

  constructor() { }

  /**
   * Returns the key value of the user item.
   */
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  /**
   * Creates a user item and sets the key value to the user parameter and sets the loggedUser
   * property to the user parameter.
   */
  login(user) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  /**
   * Clears all items from the localStorage and sets the loggedUser property to
   * undefined.
   */
  logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
