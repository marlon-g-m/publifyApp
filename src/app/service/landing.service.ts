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
      'url': 'http://localhost:4210/landing-casas?id=123456789',
      'visitas': '8'
    } as Landing
    let landing2 = {
      'titulo': ' Departamentos en santiago',
      'idLanding': '14587',
      'subtitulo': 'Arrienda los mejores Departamentos',
      'descripcion': 'Te ayudaremos a buscar tu nuevo hogar',
      'email': 'deptosantiago@gmail.com',
      'plantilla': 'deptosLanding',
      'url': 'http://localhost:4210/landing-deptos?id=14587',
      'visitas': '15'
    } as Landing
    let landing3 = {
      'titulo': ' Vendemos Tu casa',
      'idLanding': '54598',
      'subtitulo': 'Contactanos para asesorarte',
      'descripcion': 'Vender tu casa nunca fue tan facil con nosotros',
      'email': 'vendetucasa@hotmail.cl',
      'plantilla': 'asesoriaLanding',
      'url': 'http://localhost:4210/landing-casas?id=123456789',
      'visitas': '54'
    } as Landing
    let landing4 = {
      'titulo': 'Arriendos en Viña del mar',
      'idLanding': '458975',
      'subtitulo': 'Arrienda los mejores Departamentos',
      'descripcion': 'Disfruta en los mejores espacios',
      'email': 'arriendaenviña@gmail.com',
      'plantilla': 'deptosLanding',
      'url': 'http://localhost:4210/landing-deptos?id=14587',
      'visitas': '45'
    } as Landing
    let landing5 = {
      'titulo': ' Departamentos en La Serena',
      'idLanding': '852468',
      'subtitulo': 'Los mejores precios de la serena',
      'descripcion': 'Te ayudaremos a buscar tu nuevo hogar',
      'email': 'serenadeptos@hotmail.cl',
      'plantilla': 'deptosLanding',
      'url': 'http://localhost:4210/landing-deptos?id=14587',
      'visitas': '14'
    } as Landing
    let landing6 = {
      'titulo': 'Encuentra los Mejores Arriendos',
      'idLanding': '785656',
      'subtitulo': 'Arriendar nunca fue tan facil',
      'descripcion': 'asesorate y consigue tu nuevo espacio',
      'email': 'arriendofacil@gmail.com',
      'plantilla': 'casasLanding',
      'url': 'http://localhost:4210/landing-casas?id=123456789',
      'visitas': '8'
    } as Landing
    let landing7 = {
      'titulo': ' Departamentos en santiago',
      'idLanding': '14587',
      'subtitulo': 'Arrienda los mejores Departamentos',
      'descripcion': 'Te ayudaremos a buscar tu nuevo hogar',
      'email': 'deptosantiago@gmail.com',
      'plantilla': 'deptosLanding',
      'url': 'http://localhost:4210/landing-deptos?id=14587',
      'visitas': '15'
    } as Landing

    this.listaLandings.push  (landing4,landing3,landing2,Landing,landing5,landing6,landing7);
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

