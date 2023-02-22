import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprofessionnelComponent } from './detailsprofessionnel.component';

describe('DetailsprofessionnelComponent', () => {
  let component: DetailsprofessionnelComponent;
  let fixture: ComponentFixture<DetailsprofessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsprofessionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsprofessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
