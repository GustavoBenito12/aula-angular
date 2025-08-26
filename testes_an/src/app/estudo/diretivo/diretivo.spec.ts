import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretivo } from './diretivo';

describe('Diretivo', () => {
  let component: Diretivo;
  let fixture: ComponentFixture<Diretivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
