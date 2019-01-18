import { TestBed } from '@angular/core/testing';

import { PhotoCuratedService } from './photo-curated.service';

describe('PhotoCuratedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoCuratedService = TestBed.get(PhotoCuratedService);
    expect(service).toBeTruthy();
  });
});
