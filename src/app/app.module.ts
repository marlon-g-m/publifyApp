import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import Amplify,{Auth} from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IndexComponent } from './components/index/index.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeNavbarComponent } from './components/navbars/home-navbar/home-navbar.component';
import { CrearLandingComponent } from './components/crear-landing/crear-landing.component';
import { MisPublicacionesComponent } from './components/mis-publicaciones/mis-publicaciones.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { VisitasComponent} from './components/estadistica/visitas/visitas.component';
import { ClientesComponent} from './components/estadistica/clientes/clientes.component';
import { ModalAceptarLandingComponent } from './components/modals/aceptar-landing/modal.component';
import { RedesSocialesComponent } from './components/estadistica/redes-sociales/redes-sociales.component';

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
    HomeComponent,
    IndexComponent,
    IndexNavbarComponent,
    IndexDropdownComponent,
    SidebarComponent,
    HomeNavbarComponent,
    CrearLandingComponent,
    MisPublicacionesComponent,
    EstadisticaComponent,VisitasComponent,ClientesComponent,RedesSocialesComponent,
    ModalAceptarLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
