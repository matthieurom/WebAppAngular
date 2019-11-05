import { Component, OnInit } from "@angular/core";
import { Weather } from "../../model/Weather";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";

@Component({
  selector: "app-weather-list",
  templateUrl: "./weather-list.component.html",
  styleUrls: ["./weather-list.component.scss"]
})
export class WeatherListComponent implements OnInit {
  weathers: Observable<Weather[]>;

  constructor(private store: Store<AppState>) {
    this.weathers = store.select("weather");
    console.log("weathers is :", this.weathers);
    const getWeathers = store.select(state => state.weather);
    console.log("GetWeather : ", getWeathers);
  }

  ngOnInit() {}
}
