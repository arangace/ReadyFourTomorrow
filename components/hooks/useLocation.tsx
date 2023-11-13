import React, { useState } from "react";
import { Location } from "@/types/types";
import getLocation from "../services/getLocation";
import { updateLocation } from "@/store/weatherSlice";
import { useDispatch } from "react-redux";

const useLocation = () => {
  const [previousLocationInformation, setpreviousLocationInformation] =
    useState<Location | null>(null);
  const dispatch = useDispatch();

  const fetchLocation = async () => {
    const geoLocation = (await getLocation()) as Location | null;
    if (geoLocation) {
      if (geoLocation !== previousLocationInformation) {
        setpreviousLocationInformation(geoLocation);
        dispatch(updateLocation(true));
        return geoLocation;
      }
    } else {
      dispatch(updateLocation(false));
      return null;
    }
  };
  return { fetchLocation };
};

export default useLocation;
