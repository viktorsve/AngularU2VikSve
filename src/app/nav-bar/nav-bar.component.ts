import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

/**
 * Component used for displaying the navigation bar and links connected to the
 * login and dashboard routes.
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
