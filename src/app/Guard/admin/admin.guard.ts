import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../service/auth-service";
import {SignInComponent} from "../../Auth/sign-in/sign-in.component";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isAuthenticated()) {
      if (this.authService.getRole() == 'ROLE_ADMIN')
        return true;
      this.router.navigate(['/' + state.url], {queryParams: {returnUrl: state.url}});
      alert("BẠN KHÔNG CÓ QUYỀN TRUY CẬP!");
      return false;
    } else {
      this.authService.openDialog(SignInComponent);
      return false;
    }
  }

}
