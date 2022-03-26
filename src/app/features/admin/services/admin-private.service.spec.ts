/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminPrivateService } from './admin-private.service';

describe('Service: AdminPrivate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPrivateService]
    });
  });

  it('should ...', inject([AdminPrivateService], (service: AdminPrivateService) => {
    expect(service).toBeTruthy();
  }));
});
