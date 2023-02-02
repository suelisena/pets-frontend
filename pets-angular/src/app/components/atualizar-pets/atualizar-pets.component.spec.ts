import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPetsComponent } from './atualizar-pets.component';

describe('AtualizarPetsComponent', () => {
  let component: AtualizarPetsComponent;
  let fixture: ComponentFixture<AtualizarPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
