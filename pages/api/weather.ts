import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bodyData = req.body;
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${bodyData.lat},${bodyData.long}&days=${bodyData.days}`;
    const response = await fetch(url);
    const data = await response.json();
    res
      .status(200)
      .json({ current: data.current, forecast: data.forecast.forecastday });
  } catch (err) {
    res.status(400).json({ message: "could not get weather information" });
    throw new Error("Could not get weather information error: " + err);
  }
}
