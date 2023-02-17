import { TestBed } from '@angular/core/testing';

import { DocteursService } from './docteurs.service';

describe('DocteursService', () => {
  let service: DocteursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocteursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
