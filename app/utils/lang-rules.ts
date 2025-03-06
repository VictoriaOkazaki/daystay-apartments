export const roomCountNaming = (count: string | undefined) => {
  if (count === undefined) return;
  if (+count === 1) return "комната";
  if (+count < 5) return "комнаты";
  else return "комнат";
};

export const sleepCountNaming = (count: string | undefined) => {
  if (count === undefined) return;
  if (+count === 1) return "спальное место";
  if (+count < 5) return "спальных места";
  else return "спальных мест";
};

export const daysCountNaming = (count: string | undefined) => {
  if (count === undefined) return;
  if (+count === 1) return "день";
  if (+count < 5) return "дня";
  else return "дней";
};
