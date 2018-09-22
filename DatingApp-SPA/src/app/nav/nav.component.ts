import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Login Successfully');
        // this.alertify.success('Logged in successfully');
      },
      error => {
        // this.alertify.error(error);
      },
      () => {
        //  this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    // localStorage.removeItem('user');
    // this.authService.decodedToken = null;
    // this.authService.currentUser = null;
    // this.alertify.message('logged out');
    // this.router.navigate(['/home']);
  }
}