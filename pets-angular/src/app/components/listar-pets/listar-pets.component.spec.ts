import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPetsComponent } from './listar-pets.component';

describe('ListarPetsComponent', () => {
  let component: ListarPetsComponent;
  let fixture: ComponentFixture<ListarPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
