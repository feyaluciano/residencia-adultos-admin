import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster-information',
  templateUrl: './poster-information.component.html',
  styleUrls: ['./poster-information.component.css']
})
export class PosterInformationComponent implements OnInit {

  @Input() titulo!: string | undefined;
  @Input() ruta!: string | undefined;
  @Input() valor!: string | undefined;
  @Input() elemento!: string | undefined;

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
