import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCuratedLisComponent } from './photo-curated-lis.component';

describe('PhotoCuratedLisComponent', () => {
  let component: PhotoCuratedLisComponent;
  let fixture: ComponentFixture<PhotoCuratedLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCuratedLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCuratedLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
