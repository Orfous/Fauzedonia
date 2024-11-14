import { MoveRight } from "lucide-react";
import promo1 from "../../assets/promo1.jpg";

export default function PromoBannerLeft() {
  return (
    <div className="text-white cursor-pointer">
      <div className="h-full relative">
        <img src={promo1} className="" />
        <div className=" absolute z-10 flex flex-col bottom-8 gap-4 pt-4 px-10 ">
          <h2 className="text-cbig font-semibold">LEGGINGS</h2>
          <p className=" text-[16px] tracking-normal leading-[1.42rem]">
            Scopri la promozione: acquista 3 laeggings, il meno caro lo paghi la
            meta
          </p>
          <div
            className=" flex flex-row gap-6 text-[16px] leading-[22px] font-semibold
          group"
          >
            <p className="">ACQUISTA ORA</p>
            <MoveRight className="group-hover:translate-x-4 duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
