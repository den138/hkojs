import { DataType, Lang } from '../enum';
import { callHkoApi } from '../hkoApi/api';

export async function getLocalWeatherForecast(
  lang: Lang
): Promise<localWeatherForecast> {
  return await callHkoApi(DataType.FLW, Lang.EN);
}

export interface localWeatherForecast {
  generalSituation: string;
  tcInfo: string;
  fireDangerWarning: string;
  forecastPeriod: string;
  forecastDesc: string;
  outlook: string;
  updateTime: string;
}
