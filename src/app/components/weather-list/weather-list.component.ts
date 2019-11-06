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
  p: number = 1;
  listWeathers: Weather[];
  inputCity: string = "";

  constructor(private store: Store<AppState>) {
    this.weathers = store.select("weather");

    console.log("listWeathers :", this.listWeathers);
  }

  ngOnInit() {}

  ngDoCheck() {
    this.weathers.subscribe(w => (this.listWeathers = w));
    this.listWeathers = this.listWeathers.filter(w =>
      w.name.includes(this.inputCity)
    );
  }
}
