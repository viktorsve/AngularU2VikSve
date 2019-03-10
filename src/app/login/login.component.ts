import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Component that handles the login page and form validation. Template changes
 * based on if the user is logged in or not.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  /**
   * Used for validating the form that is connected to the username input field.
   * FormGroup is used to create an instance of our form element that tracks all values.
   * The FormControlName login connects our validators with the input element.
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      login: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('.*[0-9]+.*')
      ]
    ]
  })
  }

  /**
   * Sends the value of our username property as an argument to the login method
   * in the AuthService where it is added to the localStorage. Also changes the
   * current route to the dashboard.
   */
  login(): void {
    this.authService.login(this.username);
    this.router.navigate(['dashboard']);
  }
}
