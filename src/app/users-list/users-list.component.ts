import { Component, OnInit, Input } from '@angular/core';

/**
 * Takes the userlist as an input and sends each array item down to the
 * UserListItemComponent and generates the text color that is used in the UserListItemComponent.
 */
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users: string[];
  switchColor: false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that switches between two return values based on a boolean value that
   * changes every time the toggle button is clicked.
   */
  getColor() {
    if (this.switchColor) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
