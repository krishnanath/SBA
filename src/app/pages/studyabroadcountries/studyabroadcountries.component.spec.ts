import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyabroadcountriesComponent } from './studyabroadcountries.component';

describe('StudyabroadcountriesComponent', () => {
  let component: StudyabroadcountriesComponent;
  let fixture: ComponentFixture<StudyabroadcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyabroadcountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyabroadcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
