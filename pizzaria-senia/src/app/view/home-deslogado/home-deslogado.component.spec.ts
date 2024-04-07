import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeslogadoComponent } from './home-deslogado.component';

describe('HomeDeslogadoComponent', () => {
  let component: HomeDeslogadoComponent;
  let fixture: ComponentFixture<HomeDeslogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDeslogadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
