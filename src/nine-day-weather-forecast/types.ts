export interface NineDayWeatherForecast {
  /** general situation */
  generalSituation: string;
  /** weather forecast */
  weatherForecast: WeatherForecast[];
  /** update time */
  updateTime: string;
  /** soil temperature */
  soilTemp: SoilTemp[];
  /** sea surface temperature */
  seaTemp: SeaTemp;
}

export interface WeatherForecast {
  /** forecast date */
  forecastDate: string;
  /** forecast weather */
  forecastWeather: string;
  /** forecast maximum temperature */
  forecastMaxtemp: Measurement;
  /** forecast minimum temperature */
  forecastMintemp: Measurement;
  /** week */
  week: string;
  /** forecast wind */
  forecastWind: string;
  /** forecast maximum relative humidity */
  forecastMaxrh: Measurement;
  /** forecast minimum relative humidity */
  forecastMinrh: Measurement;
  /** forecast weather icon */
  ForecastIcon: number;
  /** probability of significant rain */
  PSR: 'High' | 'Medium High' | 'Medium' | 'Medium' | 'Low';
}

export interface Measurement {
  /** unit */
  unit: string;
  /** value */
  value: number;
}

export interface SeaTemp extends Measurement {
  /** location */
  place: string;
  /** record time */
  recordTime: string;
}

export interface SoilTemp extends Measurement {
  /** location */
  place: string;
  /** record time */
  recordTime: string;
  /** depth */
  depth: Measurement;
}
