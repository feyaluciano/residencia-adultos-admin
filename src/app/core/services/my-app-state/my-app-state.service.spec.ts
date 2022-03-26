/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyAppStateService } from './my-app-state.service';

describe('Service: MyAppState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAppStateService]
    });
  });

  it('should ...', inject([MyAppStateService], (service: MyAppStateService) => {
    expect(service).toBeTruthy();
  }));
});
