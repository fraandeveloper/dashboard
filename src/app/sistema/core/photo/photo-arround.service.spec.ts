import { TestBed } from '@angular/core/testing';

import { PhotoArroundService } from './photo-arround.service';

describe('PhotoArroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoArroundService = TestBed.get(PhotoArroundService);
    expect(service).toBeTruthy();
  });
});
