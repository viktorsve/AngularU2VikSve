import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Component that takes each user in the userlist array as an input and creates
 * a list item for each one. Also sets the text color based on textColor input.
 */
@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
})
export class UserListItemComponent implements OnInit {

  @Input() user : string;
  @Input() textColor : string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Will navigate to a seperate user page corresponding to the text of the
   * list item being clicked.
   */
  navigate($event): void {
    this.router.navigate(['/user', $event.target.innerText]);
  }

}
