import { Component, OnInit } from '@angular/core';
import { PostInfo } from 'src/app/core/models/PostInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public postInfo: PostInfo[] = [
    {
      titulo: 'Residentes',
      ruta: '/admin/residentes',
      valor: '20',
      elemento: ' residentes',
    },
    {
      titulo: 'Usuarios',
      ruta: '/admin/usuarios',
      valor: '10',
      elemento: ' usuarios',
    },
    {
      titulo: 'Pagos',
      ruta: '/admin/pagos',
      valor: '5',
      elemento: ' pagos',
    },
  ];

  residentesViewed: number = 0;
  usuariosViewed: number = 0;
  pagosViewed: number = 0;

  constructor() {}

  visto!: string;

  receiveMessage($event: string) {
    this.visto = $event;
    switch (this.visto) {
      case 'Residentes':
        this.residentesViewed++;
        break;
      case 'Usuarios':
        this.usuariosViewed++;
        break;
      default:
        this.pagosViewed++;
        break;
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
      });
    }
  }
}
