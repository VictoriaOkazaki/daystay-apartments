import AdvLeftCard from "./advantage-left-card";

export function AdvColsLeft() {
  return (
    <div className="grid gap-5 lg:gap-[1.8vh] grid-cols-1 lg:grid-cols-2 lg:col-span-2">
      <AdvLeftCard
        spanCol="lg:col-span-2"
        flexCol="lg:flex-row"
        textWidth="w-full lg:w-[65%]"
        imageHeight="30vh"
        imageRatio="379/325"
        imageSrc="/images/advantages/adv-1.png"
        imageAlt="cafes"
        title="Кафе и рестораны на любой вкус и кошелек"
        text="Здесь вы найдете как высококлассные рестораны, так и заведения фастфуда, кофейни, бары, кафе с национальной и другими кухнями мира."
      />
      <AdvLeftCard
        flexCol="flex-col"
        textWidth="w-full"
        imageHeight="26vh"
        imageRatio="344/285"
        imageSrc="/images/advantages/adv-2.png"
        imageAlt="torgovaya"
        title="Ориентация на туристов"
        text="В заведениях и магазинах персонал говорит на английском. Также рядом, в Ичеришечер, находится множество туристических фирм."
      />
      <AdvLeftCard
        flexCol="flex-col"
        textWidth="w-full"
        imageWidth="100%"
        imageRatio="547/214"
        imageSrc="/images/advantages/adv-3.png"
        imageAlt="sweets"
        title="Магазины, где можно купить все"
        text="Сувениры, картины местных художников, одежда, аксессуары, национальные сладости, продукты — вы найдете поблизости все, что вам нужно."
      />
    </div>
  );
}
