export const roomCountNaming = (count: string | undefined, locale: string) => {
  if (count === undefined) return;
  if (locale === "ru") {
    if (+count === 1) return "комната";
    if (+count < 5) return "комнаты";
    else return "комнат";
  }
  if (locale === "en") {
    if (+count === 1) return "room";
    else return "rooms";
  }
};

export const sleepCountNaming = (count: string | undefined, locale: string) => {
  if (count === undefined) return;
  if (locale === "ru") {
    if (+count === 1) return "спальное место";
    if (+count < 5) return "спальных места";
    else return "спальных мест";
  }
  if (locale === "en") {
    if (+count === 1) return "sleeping place";
    else return "sleeping places";
  }
};

export const daysCountNaming = (count: string | undefined, locale: string) => {
  if (count === undefined) return;
  if (locale === "ru") {
    if (+count === 1) return "день";
    if (+count < 5) return "дня";
    else return "дней";
  }
  if (locale === "en") {
    if (+count === 1) return "day";
    else return "days";
  }
};
