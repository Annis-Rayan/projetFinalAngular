import { TestBed } from '@angular/core/testing';

import { ImageTestService } from './image-test.service';

describe('ImageTestService', () => {
  let service: ImageTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
