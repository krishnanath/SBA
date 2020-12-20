import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisacategoriesComponent } from './visacategories.component';

describe('VisacategoriesComponent', () => {
  let component: VisacategoriesComponent;
  let fixture: ComponentFixture<VisacategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisacategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisacategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
