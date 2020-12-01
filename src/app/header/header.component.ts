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
  menuTabPrevious: any = null;

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

  setColorMenu(name: string, stt: number) {
    if (null != this.menuTabPrevious)
      this.menuTabPrevious.classList.remove("ac");
    const ele = document.getElementsByName(name)[stt];
    ele.className = "ac";
    this.menuTabPrevious = ele;
  }

}
