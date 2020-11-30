import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../service/auth-service';
import {SignInComponent} from '../Auth/sign-in/sign-in.component';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  openDialogSignIn(): void {
    this.authService.openDialog(SignInComponent);
  }

  logOut() {
    this.authService.logOut().subscribe(result => {
      sessionStorage.clear();
      sessionStorage.setItem('user', 'anonymous');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    })
  }

}
