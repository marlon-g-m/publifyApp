import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { CrearLandingComponent } from './components/crear-landing/crear-landing.component';
import { MisPublicacionesComponent } from './components/mis-publicaciones/mis-publicaciones.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { VisitasComponent } from './components/estadistica/visitas/visitas.component';
import { ClientesComponent } from './components/estadistica/clientes/clientes.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component : LoginComponent},
  {path:'sign-up',component : SignUpComponent},
  {path:'home',component : HomeComponent},
  {path:'index',component :IndexComponent },
  {path:'crear-landing',component : CrearLandingComponent},
  {path:'mis-publicaciones',component : MisPublicacionesComponent},
  {path:'estadistica',component : EstadisticaComponent},
  {path:'visitas',component : VisitasComponent},
  {path:'clientes',component : ClientesComponent},
  {path:'redes',component : VisitasComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
