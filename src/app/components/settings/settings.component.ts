import { Component, OnInit } from "@angular/core";
import { Weather } from "../../model/Weather";
import { WeatherService } from "../../services/weather.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as WeatherActions from "../../actions/weather.actions";
import { Action } from "rxjs/internal/scheduler/Action";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  weathers: Observable<Weather[]>;

  constructor(
    private weatherService: WeatherService,
    private store: Store<AppState>
  ) {
    this.weathers = store.select("weather");
    console.log("weathers in settings is :", this.weathers);
  }

  ngOnInit() {}

  addWeather(city: string) {
    this.weatherService.addWeather(city).subscribe(weather => {
      console.log(weather);
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

      console.log("New weather form api is : ", newWeather);
      this.store.dispatch({
        type: WeatherActions.ADD_WEATHER,
        payload: newWeather
      });
    });
  }

  deleteWeather(weather: Weather) {
    console.log("REMOVE IS CLICKED");
    console.log("IN DELETE WEATHER :", weather);
    // this.store.dispatch({
    //   type: WeatherActions.REMOVE_WEATHER,
    //   payload: weather
    // });
  }
}
