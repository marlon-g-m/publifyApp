import { Injectable } from '@angular/core';
import { Landing } from 'src/models/landing';

@Injectable({ providedIn: 'root' })
export class LandingService {
  constructor() {
    this.recuperarLanding();

  }
  listaLandings = Array<Landing>();



  recuperarLanding() {
    let Landing = {
      'titulo': 'Casas en Viña del mar',
      'idLanding': '123456789',
      'subtitulo': 'Encuentra las mejores casas en viña del mar',
      'descripcion': 'Contáctate con nosotros y has tus sueños realidad',
      'email': 'casasenviña@gmail.com',
      'plantilla': 'casasLanding',
      'url': 'http://localhost:4210/landing-casas?id=123456789'
    } as Landing
    let landing2 = {
      'titulo': ' Departamentos en santiago',
      'idLanding': '14587',
      'subtitulo': 'Arrienda los mejores Departamentos',
      'descripcion': 'Te ayudaremos a buscar tu nuevo hogar',
      'email': 'deptossantaigo@gmail.com',
      'plantilla': 'deptosLanding',
      'url': 'http://localhost:4210/landing-deptos?id=14587'
    } as Landing

    this.listaLandings.push  (landing2,Landing);
  }

  getLandings(){
    return this.listaLandings;

  }
  agregarLanding(landing:Landing){
    this.listaLandings.push(landing)
    console.log("landingns",landing);
    console.log("landingns",this.listaLandings);

  }

}

