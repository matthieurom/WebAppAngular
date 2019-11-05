import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherListComponent } from "./components/weather-list/weather-list.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
  {
    path: "",
    component: WeatherListComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
