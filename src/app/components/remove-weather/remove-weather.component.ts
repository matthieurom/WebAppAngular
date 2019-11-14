import { Component, OnInit, Input } from "@angular/core";
import { Weather } from "../../model/Weather";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as WeatherActions from "../../actions/weather.actions";

@Component({
  selector: "app-remove-weather",
  templateUrl: "./remove-weather.component.html",
  styleUrls: ["./remove-weather.component.scss"]
})
export class RemoveWeatherComponent implements OnInit {
  @Input() weather: Weather;
  isSelected: boolean = false;
  weatherToRemove: Weather;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onClick() {
    this.weatherToRemove = this.weather;
    if (this.isSelected) {
      this.weatherToRemove = undefined;
      this.isSelected = false;
    } else {
      this.isSelected = true;
      this.weatherToRemove = this.weather;
    }
  }

  onUnFocus() {
    this.isSelected = false;
  }

  removeCity() {
    this.store.dispatch({
      type: WeatherActions.REMOVE_WEATHER,
      payload: this.weatherToRemove
    });
  }
}
