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
      elemento:' residentes'
    },
    {
      titulo: 'Usuarios',
      ruta: '/admin/usuarios',
      valor: '10',
      elemento:' usuarios'
    },
    {
      titulo: 'Pagos',
      ruta: '/admin/pagos',
      valor: '5',
      elemento:' pagos'
    },
  ];

  constructor() {}

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
