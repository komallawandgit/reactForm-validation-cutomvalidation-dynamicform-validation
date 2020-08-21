import { TestBed, inject } from '@angular/core/testing';

import { ValidationSERviceService } from './validation-service.service';

describe('ValidationSERviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationSERviceService]
    });
  });

  it('should be created', inject([ValidationSERviceService], (service: ValidationSERviceService) => {
    expect(service).toBeTruthy();
  }));
});
