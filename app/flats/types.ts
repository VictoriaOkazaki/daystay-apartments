export type ChoiceDetails = {
  roomCount: string;
  sleepCount: string;
  minPrice: string;
  maxPrice: string;
};

export type FlatDetails = {
  id: string;
  price: string;
  name: string;
  area: string;
  roomCount: string;
  floor: string;
  maxFloor: string;
  sleepingCount: string;
  gallery: string[];
  adress: string;
  viewFromWindow: string;
  description: string;
  sleepCountDetails: string;
  longitude: number;
  latitude: number;
  conveniences: {
    main: {
      hasLift: boolean;
      hasParking: boolean;
      hasConditioner: boolean;
      hasTV: boolean;
      hasWiFi: boolean;
      hasTextile: boolean;
      hasLaundry: boolean;
      hasIron: boolean;
    };
    kitchen: {
      hasKettle: boolean;
      hasFridge: boolean;
      hasGasStove: boolean;
      hasMicrowave: boolean;
      hasTableWare: boolean;
    };
    toilet: {
      hasHairDryer: boolean;
      hasShower: boolean;
      hasSlippers: boolean;
      hasToiletries: boolean;
    };
  };
};
