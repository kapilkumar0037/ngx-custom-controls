import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustomControlsComponent } from './ngx-custom-controls.component';

describe('NgxCustomControlsComponent', () => {
  let component: NgxCustomControlsComponent;
  let fixture: ComponentFixture<NgxCustomControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCustomControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCustomControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
