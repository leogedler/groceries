import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router: RouterExtensions) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(["/login", { clearHistory: true }]);
      return false;
    }
  }
}