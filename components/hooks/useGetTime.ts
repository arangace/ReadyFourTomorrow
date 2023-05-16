const getTime = () => {
  const currentDate = new Date();
  currentDate.setHours(24, 0, 0, 0);

  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const startTime = currentDate.toISOString();
  const endTime = tomorrowDate.toISOString();
  return {
    startTime: startTime,
    endTime: endTime,
  };
};

export default getTime;
