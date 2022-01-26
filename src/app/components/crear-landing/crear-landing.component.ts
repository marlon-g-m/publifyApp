import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {ModalService } from 'src/app/service/modal-tarifas.service';

@Component({
  selector: 'crear-landing',
  templateUrl: './crear-landing.component.html',
})
export class CrearLandingComponent implements OnInit {
  public landing:any;




  constructor(private spinner: NgxSpinnerService,private modalService: ModalService,private router: Router) {
    this.landing = {
      titulo:'',
      idLanding:'',
      subtitulo:'',
      descripcion:'',
      email:'',
      plantilla:''

    };
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
    console.log(this.landing);
  }

  ngOnInit():void {
  }

}
