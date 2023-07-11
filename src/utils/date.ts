export const getCurrentYear = (): number => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export const convertToMinutes = (timestamp: number) => {
  return Math.round(timestamp / 60000);
};