import { Action } from "@ngrx/store";
import { Weather } from "../model/Weather";
import * as WeatherActions from "./../actions/weather.actions";

const initialState: Weather[] = [
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

export function reducer(state = initialState, action: WeatherActions.Actions) {
  let newWeather;
  switch (action.type) {
    case WeatherActions.ADD_WEATHER:
      return [...state, action.payload];
    case WeatherActions.REMOVE_WEATHER:
      console.log("STATE IS IN REDUCER :", state);
      newWeather = state.filter(
        weather => weather.name !== action.payload.name
      );
      console.log("neweather in reducer is ", newWeather);
      let weatherNew = [];
      newWeather.map(w => weatherNew.push(w));
      console.log("with map  :", weatherNew[1]);
      return [...newWeather];
    // case WeatherActions.ADD_WEATHER_REMOVE:
    //   return [...state, weatherToRemove: action.payload];
    default:
      return state;
  }
}
