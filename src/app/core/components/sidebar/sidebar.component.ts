import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';
import { MyAppStateService } from '../../services/my-app-state/my-app-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  public posterViewed!: string;

  public templateMenu: MenuItem[] = [
    {
      texto: 'Residentes',
      ruta: '/admin/residentes',
      icono: 'assets/images/icons-menu/residentes.svg',
      divide: false,
    }
    
  ];

  constructor(private _myAppStateService:MyAppStateService ) {
    this._myAppStateService.getHandlerPosters$().subscribe((poster) => {
      this.posterViewed=poster;
    });
  }

  ngOnInit() {}
}
