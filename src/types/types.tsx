

export interface weatherInterface {
  location: Location;
  current: Current;
  forecast: Forecast;
}

interface Forecast {
  forecastday: Forecastday[];
}

interface Forecastday {
  date: string;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Hour {
  time: string;
  temp_c: number;
  condition: Condition2;
}

interface Condition2 {
  icon: string;
  code: number;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moon_phase: string;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  condition: Condition;
}

interface Current {
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  uv: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}