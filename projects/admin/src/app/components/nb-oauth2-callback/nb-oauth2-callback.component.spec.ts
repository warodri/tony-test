import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbOauth2CallbackComponent } from './nb-oauth2-callback.component';

describe('NbOauth2CallbackComponent', () => {
  let component: NbOauth2CallbackComponent;
  let fixture: ComponentFixture<NbOauth2CallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbOauth2CallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbOauth2CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
