import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const { param } = req.query;
  //   console.log(param);
  //   const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   res.status(200).json(param);
  const { q, days } = req.query;

  // Parse the latitude and longitude from the 'q' parameter

  // Use the latitude, longitude, and number of days in your business logic
  // ...

  const data = { result: "success", q };
  res.status(200).json(data);
}
