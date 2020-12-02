import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidListComponent } from './nid-list.component';

describe('NidListComponent', () => {
  let component: NidListComponent;
  let fixture: ComponentFixture<NidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
