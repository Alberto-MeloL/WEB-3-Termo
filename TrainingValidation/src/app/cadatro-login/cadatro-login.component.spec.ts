import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroLoginComponent } from './cadatro-login.component';

describe('CadatroLoginComponent', () => {
  let component: CadatroLoginComponent;
  let fixture: ComponentFixture<CadatroLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadatroLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadatroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
