import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPictureComponent } from './zoom-picture.component';

describe('ZoomPictureComponent', () => {
  let component: ZoomPictureComponent;
  let fixture: ComponentFixture<ZoomPictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomPictureComponent]
    });
    fixture = TestBed.createComponent(ZoomPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
