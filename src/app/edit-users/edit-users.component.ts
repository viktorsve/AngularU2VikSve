import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * Outputting changes to the DashboardComponent based on what's in the input field
 * and which button is being clicked.
 */
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  @Output() addUser = new EventEmitter();
  @Output() removeUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method for outputting an event with a value that is set using a template reference
   * variable on the input field.
   */
  addedUser(input: string) {
    if (input != "") {
      this.addUser.emit(input);
    }
  }

  /**
   * Method for outputting an event that will remove the last user in the array.
   */
  removedUser() {
      this.removeUser.emit();
  }

}
