import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWeatherComponent } from './remove-weather.component';

describe('RemoveWeatherComponent', () => {
  let component: RemoveWeatherComponent;
  let fixture: ComponentFixture<RemoveWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
