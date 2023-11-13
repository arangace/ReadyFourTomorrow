import React, { useEffect, useState } from "react";
import getData from "../services/getData";
import { UserEvents } from "@/types/types";

type Response = {
  userEvents: UserEvents;
  loaded: boolean;
};

const useFetch = () => {
  const [userEvents, setUserEvents] = useState<UserEvents>([]);
  const [loaded, setloaded] = useState(false);

  const fetchData = async () => {
    const response = (await getData()) as Response;

    if (response) {
      setUserEvents(response.userEvents);
      setloaded(response.loaded);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setloaded(false);
    };
  }, []);

  return { fetchData, userEvents, loaded };
};

export default useFetch;
