import { ReactNode } from "react";

export type Layout = {
  children: ReactNode;
};
export type CalendarItem = {
  accessRole?: string;
  defaultReminders?: string[];
  etag?: string;
  items: {
    summary: string;
    start: { dateTime: string; timeZone: string };
    status: string;
  }[];
  kind?: string;
  nextSyncToken?: string;
  summary: string;
  timeZone?: string;
  updated?: string;
  error?: object;
};
export type WeatherForecast = {
  currentConditions: {
    conditions: string;
    temp: number;
  };
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
export type SingleUserEvent = {
  name: string;
  time: string;
};
export type UserEvents = SingleUserEvent[];

export type Token = {
  token: { accessToken: string; id: string };
  account: { access_token: string };
  profile: { id: string };
  session: {
    accessToken: string;
    user: { id: string };
  };
};
export type MeetingInformation = {
  userEvents: UserEvents;
  loaded: boolean;
  showMore?: boolean;
};
export type JwtToken = Pick<Token, "token" | "account" | "profile">;
export type SessionToken = Pick<Token, "session" | "token">;
