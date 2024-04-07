import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDeslogadoComponent } from './header-deslogado.component';

describe('HeaderDeslogadoComponent', () => {
  let component: HeaderDeslogadoComponent;
  let fixture: ComponentFixture<HeaderDeslogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDeslogadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
