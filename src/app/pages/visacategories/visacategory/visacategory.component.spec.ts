import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisacategoryComponent } from './visacategory.component';

describe('VisacategoryComponent', () => {
  let component: VisacategoryComponent;
  let fixture: ComponentFixture<VisacategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisacategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisacategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
