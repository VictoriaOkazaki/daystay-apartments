import FlatCard from "./flat-card";
import FlatsError from "./flats-error";
import { FlatDetails } from "./types";

export default function FlatsList({
  filteredFlats,
  isFilterError,
}: {
  filteredFlats: FlatDetails[];
  isFilterError: boolean;
}) {
  return (
    <>
      {filteredFlats.length !== 0 ? (
        <ul
          className="grid mt-insideMob lg:mt-inside 
        grid-cols-1 gap-x-[1.7vw] gap-y-[1.5vh] lg:grid-cols-3 lg:gap-x-[8.7vw] lg:gap-y-[3.3vh]"
        >
          {filteredFlats.map((flat) => (
            <FlatCard key={flat.id} flat={flat} />
          ))}
        </ul>
      ) : isFilterError ? (
        <FlatsError>You forgot to set all the filters</FlatsError>
      ) : (
        <FlatsError>
          We have no options for your request. Please try changing the
          parameters to other.
        </FlatsError>
      )}
    </>
  );
}
