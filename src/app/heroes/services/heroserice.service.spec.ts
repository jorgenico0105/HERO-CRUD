import { TestBed } from '@angular/core/testing';

import { HerosericeService } from './heroserice.service';

describe('HerosericeService', () => {
  let service: HerosericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerosericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
