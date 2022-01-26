import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal-tarifas.service';
import { NgxSpinnerService } from 'ngx-spinner';
//import { TarifasService } from 'src/app/service/tarifas-api.service';
//import { TablasDataService } from 'src/app/service/tablas-data.service';
//import { ObservableBackgroundTaskMonitorService } from 'src/app/service/monitor-tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-aceptar-landing',
  templateUrl: './modal.component.html',
})
export class ModalAceptarLandingComponent implements OnInit {
  show_modal = false;
  id = 'aceptar-landing';

  constructor(
    private modalService: ModalService,private router: Router,private spinner: NgxSpinnerService
    //private tarifasService: TarifasService,
    //private tablasData: TablasDataService,
    //private tasksService: ObservableBackgroundTaskMonitorService
  )
  {
    this.showLoading()
    this.hideLoading()
  }
  private showLoading() {
    this.spinner.show("ngx-spinner-loader");
  }

  private hideLoading() {
    this.spinner.hide("ngx-spinner-loader");
  }

  open() {
    this.show_modal = true;
  }

  close() {
    this.show_modal = false;
  }

  action() {
    this.showLoading()
    this.router.navigate(['/', 'mis-publicaciones']);
    this.close()
    //const tarifas = this.tablasData.getData('aprobadas')
    //const results = this.tarifasService.liberarTarifaAprobada(tarifas)
    //this.tasksService.addTasks(results, 'Liberar tarifa aprobada', 'La tarifa ha sido LIBERADA', 'Error al liberar la tarifa')
  }

  ngOnInit() {
    this.modalService.add(this);
  }

}
