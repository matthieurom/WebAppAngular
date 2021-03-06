import { Component, OnInit } from "@angular/core";
import { Weather } from "../../model/Weather";
import { WeatherService } from "../../services/weather.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as WeatherActions from "../../actions/weather.actions";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  weathers: Observable<Weather[]>;
  isScrollable: boolean = false;
  isLoading: boolean = false;
  errorMessage;
  errorInput: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private store: Store<AppState>
  ) {
    this.weathers = store.select("weather");
  }

  ngOnInit() {}

  ngDoCheck() {
    this.checkScrollable();
  }
  checkScrollable() {
    let weatherLength;
    this.store.select("weather").subscribe(w => (weatherLength = w.length));
    if (weatherLength > 4) {
      this.isScrollable = true;
    }
  }

  addWeather(city: string) {
    this.isLoading = true;
    this.weatherService.addWeather(city).subscribe(
      weather => {
        const newWeather: Weather = {
          name: weather.name,
          country: weather.sys.country,
          weather: weather.weather[0].main,
          icon: weather.weather[0].icon,
          infos: {
            humidity: weather.main.humidity,
            pressure: weather.main.pressure,
            temp: Math.round(weather.main.temp - 273),
            temp_max: Math.round(weather.main.temp_max - 273),
            temp_min: Math.round(weather.main.temp_min - 273)
          }
        };

        this.store.dispatch({
          type: WeatherActions.ADD_WEATHER,
          payload: newWeather
        });
        this.isLoading = false;
        this.errorInput = false;
      },
      error => {
        this.errorInput = true;
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }
}
