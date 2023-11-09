import { WeatherForecast } from "@/types/types";

const getWeatherForecast = (weatherReport: WeatherForecast) => {
  const weatherForecast = `Here's tomorrows weather forecast. ${
    weatherReport.weather.averageCondition
  }.
  ${weatherReport.snowChance !== "none" ? weatherReport.snowChance : ""}
  With an average day temperature of ${weatherReport.temp} °C
  . ${weatherReport.weather.morningConditions} in the morning,
   and ${weatherReport.weather.eveningConditions} in the evening.
  ${
    weatherReport.weather.morningConditions.includes("rain") ||
    weatherReport.weather.eveningConditions.includes("rain")
      ? "It is recommended to bring an umbrella"
      : ""
  }
  ${
    weatherReport.windy === "It will be windy."
      ? `${weatherReport.windy.slice(0, -1)}, so do take extra care`
      : ""
  }
  ${`Lastly, ${weatherReport.uv} Have a good day!`}`;
  return weatherForecast;
};
export default getWeatherForecast;
