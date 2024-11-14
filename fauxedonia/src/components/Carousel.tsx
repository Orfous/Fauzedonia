import { ChevronLeft, ChevronRight } from "lucide-react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.jpg";

export default function Carousel() {
  return (
    <div className="pl-10 -mx-1 pt-10">
      <div className=" text-[40px] leading-9 pb-10">I piu venduti</div>
      <div className=" flex flex-row w-[calc(100% + 3px)] overflow-x-auto gap-2">
        <div className=" flex-none max-w-[19vw] cursor-pointer group">
          <div className="relative">
            <img src={car1} />
            <div
              className="absolute flex flex-col pt-[190px] gap-20 w-full top-0
             h-full hidden group-hover:inline-block"
            >
              <div className="flex flex-row justify-between">
                <ChevronLeft absoluteStrokeWidth strokeWidth={1} />
                <ChevronRight absoluteStrokeWidth strokeWidth={1} />
              </div>
              <div className="flex flex-col group-hover:mt-20 px-4 pt-4 pb-2 gap-4 w-full h-full text-center text-[14px] bg-lgraybg">
                <p className="font-semibold">SELEZIONA TAGLIA</p>
                <p className="text-lgray hover:text-black">TAGLIA UNICA</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 items-stretch justify-start pt-4 pr-5 pl-4
          mb-16 text-[14px] w-[calc(19vw - 40px)]"
          >
            <p className="z-10">Calzini a Costine con Borchie</p>
            <p className="font-semibold z-10">$6.00</p>
          </div>
        </div>
        <div className=" flex-none max-w-[19vw] cursor-pointer group">
          <div className="relative">
            <img src={car2} />
            <div
              className="absolute flex flex-col pt-[190px] gap-20 w-full top-0
             h-full hidden group-hover:inline-block"
            >
              <div className="flex flex-row justify-between">
                <ChevronLeft absoluteStrokeWidth strokeWidth={1} />
                <ChevronRight absoluteStrokeWidth strokeWidth={1} />
              </div>
              <div className="flex flex-col group-hover:mt-20 px-4 pt-4 pb-2 gap-4 w-full h-full text-center text-[14px] bg-lgraybg">
                <p className="font-semibold">SELEZIONA TAGLIA</p>
                <p className="text-lgray hover:text-black">TAGLIA UNICA</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 items-stretch justify-start pt-4 pr-5 pl-4
          mb-16 text-[14px] w-[calc(19vw - 40px)]"
          >
            <p className="z-10">Calzini a Cashmere Bambino</p>
            <p className="font-semibold z-10">$4.00</p>
          </div>
        </div>
        <div className=" flex-none max-w-[19vw] cursor-pointer group">
          <div className="relative">
            <img src={car3} />
            <div
              className="absolute flex flex-col pt-[190px] gap-20 w-full top-0
             h-full hidden group-hover:inline-block"
            >
              <div className="flex flex-row justify-between">
                <ChevronLeft absoluteStrokeWidth strokeWidth={1} />
                <ChevronRight absoluteStrokeWidth strokeWidth={1} />
              </div>
              <div className="flex flex-col group-hover:mt-20 px-4 pt-4 pb-2 gap-4 w-full h-full text-center text-[14px] bg-lgraybg">
                <p className="font-semibold">SELEZIONA TAGLIA</p>
                <p className="text-lgray hover:text-black">TAGLIA UNICA</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 items-stretch justify-start pt-4 pr-5 pl-4
          mb-16 text-[14px] w-[calc(19vw - 40px)]"
          >
            <p className="z-10">Calze Soft</p>
            <p className="font-semibold z-10">$9.00</p>
          </div>
        </div>
        <div className=" flex-none max-w-[19vw] cursor-pointer group">
          <div className="relative">
            <img src={car4} />
            <div
              className="absolute flex flex-col pt-[190px] gap-20 w-full top-0
             h-full hidden group-hover:inline-block"
            >
              <div className="flex flex-row justify-between">
                <ChevronLeft absoluteStrokeWidth strokeWidth={1} />
                <ChevronRight absoluteStrokeWidth strokeWidth={1} />
              </div>
              <div className="flex flex-col group-hover:mt-20 px-4 pt-4 pb-2 gap-4 w-full h-full text-center text-[14px] bg-lgraybg">
                <p className="font-semibold">SELEZIONA TAGLIA</p>
                <p className="text-lgray hover:text-black">TAGLIA UNICA</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 items-stretch justify-start pt-4 pr-5 pl-4
          mb-16 text-[14px] w-[calc(19vw - 40px)]"
          >
            <p className="z-10">Calze Soft</p>
            <p className="font-semibold z-10">$9.00</p>
          </div>
        </div>
        <div className=" flex-none max-w-[19vw] cursor-pointer group">
          <div className="relative">
            <img src={car5} />
            <div className="absolute top-4 left-4 bg-bone px-[6px] py-[2px] rounded-[20px] text-[12px] font-semibold">
              CON CASHMERE
            </div>
            <div
              className="absolute flex flex-col pt-[190px] gap-20 w-full top-0
             h-full hidden group-hover:inline-block"
            >
              <div className="flex flex-row justify-between">
                <ChevronLeft absoluteStrokeWidth strokeWidth={1} />
                <ChevronRight absoluteStrokeWidth strokeWidth={1} />
              </div>
              <div className="flex flex-col group-hover:mt-20 px-4 pt-4 pb-2 gap-4 w-full h-full text-center text-[14px] bg-lgraybg">
                <p className="font-semibold">SELEZIONA TAGLIA</p>
                <p className="text-lgray hover:text-black">TAGLIA UNICA</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 items-stretch justify-start pt-4 pr-5 pl-4
          mb-16 text-[14px] w-[calc(19vw - 40px)] "
          >
            <p className="z-10 truncate text-ellipsis">
              Calze Lunghe a Costine con Lana e Cashmere da Donna
            </p>
            <p className=" z-10 font-semibold">$6.00</p>
          </div>
        </div>
        <div className=" flex-none max-w-[19vw] cursor-pointer group">
          <div className="relative">
            <img src={car6} />
            <div
              className="absolute flex flex-col pt-[190px] gap-20 w-full top-0
             h-full hidden group-hover:inline-block"
            >
              <div className="flex flex-row justify-between">
                <ChevronLeft absoluteStrokeWidth strokeWidth={1} />
                <ChevronRight absoluteStrokeWidth strokeWidth={1} />
              </div>
              <div className="flex flex-col group-hover:mt-20 px-4 pt-4 pb-2 gap-4 w-full h-full text-center text-[14px] bg-lgraybg">
                <p className="font-semibold">SELEZIONA TAGLIA</p>
                <p className="text-lgray hover:text-black">TAGLIA UNICA</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 items-stretch justify-start pt-4 pr-5 pl-4
          mb-16 text-[14px] w-[calc(19vw - 40px)]"
          >
            <p className="z-10">Calze Antiscivolo Batman Bambini</p>
            <p className="font-semibold z-10">$6.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
