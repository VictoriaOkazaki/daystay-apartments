import MyImage from "@/app/my-image";
import { ReactNode } from "react";

export default function FlatConvenience({
  children,
  has,
}: {
  children: ReactNode;
  has: boolean;
}) {
  return (
    <li className="flex gap-[0.83vw] items-center">
      <MyImage
        width="0.62vw"
        aspectRatio={has ? "15 / 11" : "1"}
        src={has ? "/images/check.svg" : "/images/red-cross.svg"}
        alt={has ? "check" : "cross"}
      />
      <span className="text-xl">{children}</span>
    </li>
  );
}
