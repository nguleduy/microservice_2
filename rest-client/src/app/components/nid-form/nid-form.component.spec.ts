import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidFormComponent } from './nid-form.component';

describe('NidFormComponent', () => {
  let component: NidFormComponent;
  let fixture: ComponentFixture<NidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
