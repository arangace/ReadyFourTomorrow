import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bodyData = req.body;
  console.log(bodyData);

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${bodyData.lat},${bodyData.long}&days=${bodyData.days}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.forecast.forecastday);
  res.status(200).json(data.forecast.forecastday);
}
