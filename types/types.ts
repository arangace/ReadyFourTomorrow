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
