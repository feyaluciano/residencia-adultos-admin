import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyAppStateService {
  public viewed$!: BehaviorSubject<string>;
  constructor() {
    this.viewed$ = new BehaviorSubject("");
  }

  public getHandlerPosters$(): Observable<string> {
    return this.viewed$.asObservable();
  }

}
