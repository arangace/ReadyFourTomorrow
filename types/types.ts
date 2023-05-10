export type CalendarItem = {
  accessRole?: string;
  defaultReminders?: string[];
  etag?: string;
  items: { summary: string; start: { dateTime: string; timeZone: string } }[];
  kind?: string;
  nextSyncToken?: string;
  summary: string;
  timeZone?: string;
  updated?: string;
  error?: object;
};
export type WeatherForecast = {
  weather: {
    morningConditions: string;
    eveningConditions: string;
    averageCondition: string;
  };
  rainChance: string;
  snowChance: string;
  temp: number;
  windy: string;
  uv: string;
};
export type UserEvents = {
  name: string;
  time: string;
}[];
