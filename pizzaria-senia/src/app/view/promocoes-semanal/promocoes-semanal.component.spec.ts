import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocoesSemanalComponent } from './promocoes-semanal.component';

describe('PromocoesSemanalComponent', () => {
  let component: PromocoesSemanalComponent;
  let fixture: ComponentFixture<PromocoesSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocoesSemanalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocoesSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
