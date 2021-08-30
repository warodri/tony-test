import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbOauth2LoginComponent } from './nb-oauth2-login.component';

describe('NbOauth2LoginComponent', () => {
  let component: NbOauth2LoginComponent;
  let fixture: ComponentFixture<NbOauth2LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbOauth2LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbOauth2LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
