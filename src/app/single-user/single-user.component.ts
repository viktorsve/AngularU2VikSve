import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Component used for assigning and displaying seperate user pages.
 */
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: string;

  constructor(private route: ActivatedRoute) { }

  /**
   * Sets the user property to the current value of the route parameter named id.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.user = params.id;
    })
  }

}
