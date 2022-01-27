import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/service/landing.service';
import {ModalService } from 'src/app/service/modal-tarifas.service';
import { Landing } from 'src/models/landing';

@Component({
  selector: 'crear-landing',
  templateUrl: './crear-landing.component.html',
})
export class CrearLandingComponent implements OnInit {
  public landing:any;




  constructor(private spinner: NgxSpinnerService,private modalService: ModalService,private router: Router,private landingService: LandingService) {
    this.landing = {
      titulo:'',
      idLanding:'',
      subtitulo:'',
      descripcion:'',
      email:'',
      plantilla:'',
      url:'',

    } as Landing;

    this.showLoading()
    this.hideLoading()
   }

   private showLoading() {
    this.spinner.show("ngx-spinner-loader");
  }

  private hideLoading() {
    this.spinner.hide("ngx-spinner-loader");
  }
  iniciarAceptarLanding(){
    this.modalService.open('aceptar-landing')
    this.landingService.agregarLanding(this.landing);
  }

  ngOnInit():void {
  }

}
