export const roomCountNaming = (count: string) => {
  if (+count === 1) return "комната";
  if (+count < 5) return "комнаты";
  else return "комнат";
};

export const sleepCountNaming = (count: string) => {
  if (+count === 1) return "спальное место";
  if (+count < 5) return "спальных места";
  else return "спальных мест";
};
