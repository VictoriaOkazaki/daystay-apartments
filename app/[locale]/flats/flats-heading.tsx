import FlatsDropDownItem from "./flats-dropdown-item";
import FLatsPriceRange from "./flats-price-range";
import FlatsCircleButton from "./flats-search-btn";
import { ChoiceDetails } from "./types";
import SearchIcon from "../icons/search-icon";
import { useTranslations } from "next-intl";

export default function FlatsHeading({
  choices,
  setChoices,
  handleClick,
}: {
  choices: ChoiceDetails;
  setChoices: (newValue: Partial<ChoiceDetails>) => void;
  handleClick: () => void;
}) {
  const roomCountVariants = ["1", "2", "3"];
  const sleepCountVariants = ["1", "2", "3", "4", "5"];

  const t = useTranslations("HomePage.flats");

  return (
    <div className="bg-bg2 p-[4.27vw] lg:p-[2.08vw] rounded-radius-mob lg:rounded-radius">
      <h2 className="font-prata text-2xl lg:text-5xl">
        {t("headingTitle1")}{" "}
        <span className="font-marck-script">{t("headingTitle2")}</span>{" "}
        {t("headingTitle3")}
      </h2>
      <div className="w-full flex flex-col gap-[3vh] lg:gap-0 lg:flex-row justify-between items-start mt-[4.4vh]">
        <FlatsDropDownItem
          variants={roomCountVariants}
          variantTitle={t("variant1")}
          choice={choices.roomCount}
          setChoice={(newRoomCount: string) =>
            setChoices({
              roomCount: newRoomCount,
            })
          }
        />
        <FlatsDropDownItem
          variants={sleepCountVariants}
          variantTitle={t("variant2")}
          choice={choices.sleepCount}
          setChoice={(newSleepCount: string) =>
            setChoices({ sleepCount: newSleepCount })
          }
        />
        <FLatsPriceRange
          choiceMinPrice={choices.minPrice}
          choiceMaxPrice={choices.maxPrice}
          setChoiceMinPrice={(newMinPrice: string) =>
            setChoices({ minPrice: newMinPrice })
          }
          setChoiceMaxPrice={(newMaxPrice) =>
            setChoices({ maxPrice: newMaxPrice })
          }
        />
        <FlatsCircleButton
          handleClick={handleClick}
          renderChildIcon={(isHovered) => <SearchIcon isHovered={isHovered} />}
        >
          {t("searchBtn")}
        </FlatsCircleButton>
      </div>
    </div>
  );
}
