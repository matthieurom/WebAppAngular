import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Weather } from "../../model/Weather";

@Component({
  selector: "app-remove-weather",
  templateUrl: "./remove-weather.component.html",
  styleUrls: ["./remove-weather.component.scss"]
})
export class RemoveWeatherComponent implements OnInit {
  @Output() deleteWeather: EventEmitter<Weather> = new EventEmitter();
  @Input() weather: Weather;
  isSelected: boolean = false;
  weatherToRemove: Weather;

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("weather is :", this.weather);
    this.weatherToRemove = this.weather;
    if (this.isSelected) {
      this.weatherToRemove = undefined;
      this.isSelected = false;
    } else {
      this.isSelected = true;
      this.weatherToRemove = this.weather;
    }

    console.log(
      "weather selected in remove is FINALLY :",
      this.weatherToRemove
    );

    this.deleteWeather.emit(this.weatherToRemove);
  }

  onUnFocus() {
    this.isSelected = false;
    // this.weatherToRemove = undefined;
  }
}
