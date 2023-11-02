const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      reject("your browser doesn't support geolocation API");
      return null;
    }
  });
};
export default getLocation;
