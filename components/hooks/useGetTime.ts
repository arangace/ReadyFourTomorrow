const getTime = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();
  const tomorrowDate = new Date(
    currentDate.getTime() + 24 * 60 * 60 * 1000
  ).toISOString();
  return {
    startTime: formattedDate,
    endTime: tomorrowDate,
  };
};

export default getTime;
