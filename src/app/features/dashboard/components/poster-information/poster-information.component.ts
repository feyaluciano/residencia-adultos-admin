import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyAppStateService } from 'src/app/core/services/my-app-state/my-app-state.service';
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


  @Output() messageEvent = new EventEmitter<string>();

  constructor(private _myAppStateService:MyAppStateService) { }


  sendMessage(poster:string) {    
    this.messageEvent.emit(poster);   
    this._myAppStateService.viewed$.next(poster);
  }

  ngOnInit() {
  }

}
