import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-add-weather",
  templateUrl: "./add-weather.component.html",
  styleUrls: ["./add-weather.component.scss"]
})
export class AddWeatherComponent implements OnInit {
  @Input() isLoading: boolean;
  @Output() addWeather: EventEmitter<any> = new EventEmitter();
  city: string;

  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log("isLoading in add item is :", this.isLoading);
  }

  onSubmit() {
    const city = this.city;

    this.addWeather.emit(city);
    this.city = "";
  }
}
