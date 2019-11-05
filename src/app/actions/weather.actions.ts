// Section 1
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Weather } from "../model/Weather";

// Section 2
export const ADD_WEATHER = "[WEATHER] Add";
export const REMOVE_WEATHER = "[WEATHER] Remove";
export const ADD_WEATHER_REMOVE = "[WHEATHER] Remove";

// Section 3
export class AddWeather implements Action {
  readonly type: string = ADD_WEATHER;

  constructor(public payload: Weather) {}
}

export class RemoveWeather implements Action {
  readonly type: string = REMOVE_WEATHER;

  constructor(public payload: Weather) {}
}

export class AddWeatherToRemove implements Action {
  readonly type: string = ADD_WEATHER_REMOVE;

  constructor(public payload: Weather) {}
}

// Section 4
export type Actions = AddWeather | RemoveWeather;
