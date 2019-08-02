import { TestBed } from '@angular/core/testing';

import { MensajesgrupoService } from './mensajesgrupo.service';

describe('MensajesgrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensajesgrupoService = TestBed.get(MensajesgrupoService);
    expect(service).toBeTruthy();
  });
});
