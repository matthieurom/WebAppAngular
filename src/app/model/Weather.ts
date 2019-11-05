export interface Weather {
  name: string;
  country: string;
  weather: string;
  icon: string;
  infos: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}
