import { Component, OnInit, Input } from "@angular/core";
import { Weather } from "../../model/Weather";

@Component({
  selector: "app-weather-item",
  templateUrl: "./weather-item.component.html",
  styleUrls: ["./weather-item.component.scss"]
})
export class WeatherItemComponent implements OnInit {
  @Input() weather: Weather;

  constructor() {}

  ngOnInit() {}

  getImgUrl(param: string) {
    return "http://openweathermap.org/img/w/" + param + ".png";
  }
}
