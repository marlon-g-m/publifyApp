import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router:Router,
    private readonly spinner: NgxSpinnerService

    ) { }
  ngOnInit() {

  }
  async loginWithCognito(){
    this.showSpinner();
    try{
      var user = await Auth.signIn(this.email.toString(),this.password.toString());
      console.log('Authentication performed for user=' + this.email + 'password=' + this.password);
      this.hideSpinner();
      var tokens = user.signInUserSession;
      if (tokens != null){
        console.log('usuario autenticado');

        this.router.navigate(['home']);
        alert('logeo completo');

      }
    } catch (error){
      console.log(error);
      this.hideSpinner();
    }
  }
  showSpinner() {
    this.spinner.show();
  }
  hideSpinner() {
    this.spinner.hide();
  }



}
