import { getSession, useSession } from "next-auth/react";
import { google } from "googleapis";

export const getCalendar = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { accessToken } = session.user;

  const calendar = google.calendar({ version: "v3", auth: accessToken });

  const calendarData = await calendar.events.list({ calendarId: "primary" });

  return res.status(200).json({ data: calendarData, status: "success" });
};
export default getCalendar;
