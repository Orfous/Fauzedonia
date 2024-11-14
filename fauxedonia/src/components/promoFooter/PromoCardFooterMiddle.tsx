import { Gift, MoveRight } from "lucide-react";

const colorVariants = {
  purple: "bg-lpurple",
  beige: "bg-beige",
  lime: "bg-lgreen",
} as const;

const textColorVariants = {
  white: "text-white",
  black: "text-black",
} as const;

export default function PromoCardFooterMiddle({
  color,
  textColor,
}: {
  color: keyof typeof colorVariants;
  textColor: keyof typeof textColorVariants;
}) {
  return (
    <div
      className={`${colorVariants[color]} ${textColorVariants[textColor]} p-10 gap-[3.125rem] flex flex-col justify-between flex-1`}
    >
      <div>
        <div className="flex items-start flex-row gap-[0.625rem] mb-4">
          <Gift />
          <p className="text-smsy font-semibold w-auto">GIFT CARD</p>
        </div>
        <p className="text-base">
          Il regalo perfetto che con passa mai di moda.
        </p>
      </div>
      <div>
        <div className="inline-flex flex-row gap-4 justify-start align-middle whitespace-nowrap font-semibold">
          <p>ACQUISTA ORA</p>
          <MoveRight className="w-10" />
        </div>
      </div>
    </div>
  );
}
