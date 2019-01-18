import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoArroundListComponent } from './photo-arround-list.component';

describe('PhotoArroundListComponent', () => {
  let component: PhotoArroundListComponent;
  let fixture: ComponentFixture<PhotoArroundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoArroundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoArroundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
