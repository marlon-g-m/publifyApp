import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Amplify,{Auth} from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

Amplify.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'us-east-2',
    userPoolId: 'us-east-2_ivmDNjIuS',
    userPoolWebClientId: '6o8oo1kiq8r5i5bntral2l3mcd',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }
});

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
