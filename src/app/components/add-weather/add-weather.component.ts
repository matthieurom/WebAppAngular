import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-weather",
  templateUrl: "./add-weather.component.html",
  styleUrls: ["./add-weather.component.scss"]
})
export class AddWeatherComponent implements OnInit {
  @Output() addWeather: EventEmitter<any> = new EventEmitter();
  city: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const city = this.city;

    this.addWeather.emit(city);
    this.city = "";
  }
}
