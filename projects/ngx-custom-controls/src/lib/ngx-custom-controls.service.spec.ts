import { TestBed } from '@angular/core/testing';

import { NgxCustomControlsService } from './ngx-custom-controls.service';

describe('NgxCustomControlsService', () => {
  let service: NgxCustomControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCustomControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
