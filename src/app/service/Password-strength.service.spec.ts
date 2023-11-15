/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasswordStrengthService } from './Password-strength.service';

describe('Service: PasswordStrength', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordStrengthService]
    });
  });

  it('should ...', inject([PasswordStrengthService], (service: PasswordStrengthService) => {
    expect(service).toBeTruthy();
  }));
});
