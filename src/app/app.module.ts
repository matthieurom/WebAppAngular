import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WeatherListComponent } from "./components/weather-list/weather-list.component";
import { WeatherItemComponent } from "./components/weather-item/weather-item.component";
import { HeaderComponent } from "./components/header/header.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AddWeatherComponent } from "./components/add-weather/add-weather.component";
import { NgxPaginationModule } from "ngx-pagination";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/weather.reducer";
import { RemoveWeatherComponent } from "./components/remove-weather/remove-weather.component";

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent,
    HeaderComponent,
    SettingsComponent,
    AddWeatherComponent,
    RemoveWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ weather: reducer }),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
