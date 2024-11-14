import { MoveRight } from "lucide-react";
import promo3 from "../../assets/promo3.jpg";

export default function PromoBannerRight() {
  return (
    <div className=" text-white cursor-pointer">
      <div className="h-full relative">
        <img src={promo3} className="" />
        <div className=" absolute z-10 flex flex-col bottom-8 gap-4 pt-4 px-10 ">
          <h2 className="text-cbig font-semibold">CALZE UOMO</h2>
          <p className=" text-[16px] tracking-normal leading-[1.42rem]">
            Fai la scorta! Acquista 5 calze, la meno cara te la regaliamo noi
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
