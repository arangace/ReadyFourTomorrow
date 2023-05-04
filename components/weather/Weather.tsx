import React, { useEffect, useState } from "react";
type Location = {
  lat: number;
  long: number;
};
const Weather = () => {
  const [location, setLocation] = useState<Location>();
  const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationEnabled(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        setLocationEnabled(true);
      },
      (error) => {
        setLocationEnabled(false);
        console.log(error);
      }
    );
  }, [locationEnabled]);
  useEffect(() => {
    const getWeather = async () => {
      if (location) {
        console.log(location);
        console.log(process.env.WEATHER_API_KEY);
        const query = `?q=${location.lat},${location.long}&days=2`;
        const response = await fetch(`/api/weather${query}`);
        const weatherData = await response.json();
        console.log(weatherData);
      }
    };
    getWeather();
  }, [location]);

  return (
    <div>
      Weather
      {locationEnabled ? "" : "Location disbled, please enable location"}
      {location && (
        <div>
          {location.lat} {location.long}
        </div>
      )}
    </div>
  );
};

export default Weather;
