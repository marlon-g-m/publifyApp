import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/service/landing.service';
import { Landing } from 'src/models/landing';

@Component({
  selector: 'mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
})
export class MisPublicacionesComponent implements OnInit {

  constructor(private landingservice: LandingService) { }


  arregloLanding:Array<Landing> = [];

  ngOnInit() {

  this.arregloLanding =  this.landingservice.getLandings()
  console.log("getlandings",this.arregloLanding);


  }
}
