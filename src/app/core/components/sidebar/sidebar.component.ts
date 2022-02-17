import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public templateMenu: MenuItem[] = [
    {
      texto: 'Residentes',
      ruta: '/admin/residentes',
      icono: 'assets/images/icons-menu/residentes.svg',
      divide: false,
    },
    {
      texto: 'Usuarios',
      ruta: '/admin/usuarios',
      icono: 'assets/images/icons-menu/users.svg',
      divide: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
