"use client";

import { ReactElement, useState } from "react";
import FlatsHeading from "./flats-heading";
import FlatsList from "./flats-list";
import { ChoiceDetails } from "./types";
import { flats } from "./flats-data";

export default function Flats({
  sliceStart,
  sliceEnd,
  children,
}: {
  sliceStart?: number;
  sliceEnd?: number;
  children?: ReactElement;
}) {
  const [choices, setChoices] = useState({
    roomCount: "",
    sleepCount: "",
    minPrice: "",
    maxPrice: "",
  });

  const [filteredFlats, setFilteredFlats] = useState(
    flats.slice(sliceStart, sliceEnd)
  );
  const [isFilterError, setIsFilterError] = useState(false);

  const filterFlats = () => {
    setIsFilterError(Object.values(choices).some((value) => value === ""));
    setFilteredFlats(
      flats
        .filter(
          (flat) =>
            flat.roomCount === choices.roomCount &&
            flat.sleepingCount === choices.sleepCount &&
            Number(flat.price) >= Number(choices.minPrice) &&
            Number(flat.price) <= Number(choices.maxPrice)
        )
        .slice(sliceStart, sliceEnd)
    );
  };

  return (
    <section id="flats" className="mt-section flex flex-col">
      <FlatsHeading
        choices={choices}
        setChoices={(newChoices: Partial<ChoiceDetails>) =>
          setChoices((prev) => ({ ...prev, ...newChoices }))
        }
        handleClick={filterFlats}
      />
      <FlatsList filteredFlats={filteredFlats} isFilterError={isFilterError} />
      {children}
    </section>
  );
}

export function scrollToFlatsSection() {
  const elem = document.getElementById("flats");
  elem?.scrollIntoView({ behavior: "smooth" });
}
