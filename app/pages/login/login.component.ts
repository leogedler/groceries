import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { User } from '../../shared/user/user';
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from 'ui/text-field';
import { setHintColor } from "../../utils/hint-util";
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../../shared/auth.service";

@Component({
  selector: "my-app",
  templateUrl: 'pages/login/login.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
})
export class LoginComponent implements OnInit {
  isLoggingIn: boolean = true;
  user: User;
  @ViewChild('container') container: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(
    private authService: AuthService,
    private page: Page,
    private nav: RouterExtensions
  ){
    this.user = new User();
    this.user.email = 'leogedler@hotmail.com';
    this.user.password = '1234'
  }

  ngOnInit(){
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  toggleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
    this.setTextFieldColors();
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color('white') : new Color('#301217'),
      duration: 200
    })
  }

  submit(){
    if(!this.user.isValidEmail()){
      alert('Enter a valid email address.');
      return;
    }

    if(this.isLoggingIn){
      this.login()
    }else{
      this.signUp();
    }
  }

  login(){
    this.authService.login(this.user).subscribe(()=>{
        this.nav.navigate(["/list"], { clearHistory: true });
    },(error)=> alert("Unfortunately we could noy find your account."))
  }

  signUp() {
    this.authService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }

  setTextFieldColors() {
    let emailTextField = <TextField>this.email.nativeElement;
    let passwordTextField = <TextField>this.password.nativeElement;
  
    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;
  
    let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }

}