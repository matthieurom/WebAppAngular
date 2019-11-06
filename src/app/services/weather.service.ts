import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Weather } from "../model/Weather";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

const API_TOKEN = "4051ce7fe1ef8cb0d6d4bf227e129df3";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeathers() {
    return [
      {
        name: "Paris",
        country: "FR",
        weather: "Clouds",
        icon: "04d",
        infos: {
          humidity: 81,
          pressure: 1017,
          temp: 12,
          temp_max: 12,
          temp_min: 10
        }
      },
      {
        name: "Montpellier",
        country: "FR",
        weather: "Clouds",
        icon: "04d",
        infos: {
          humidity: 63,
          pressure: 1016,
          temp: 18,
          temp_max: 20,
          temp_min: 17
        }
      },
      {
        name: "Nîmes",
        country: "FR",
        weather: "Clouds",
        icon: "04d",
        infos: {
          humidity: 81,
          pressure: 1017,
          temp: 12,
          temp_max: 12,
          temp_min: 10
        }
      }
    ];
  }

  addWeather(city: string): Observable<any> {
    return this.http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_TOKEN}`
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
