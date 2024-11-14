import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function SocialsFooter() {
  return (
    <div className="flex flex-row justify-start px-11 w-full h-[208px] bg-cgray">
      <div className="px-0 flex flex-0 w-[30%] pt-14 pb-10 flex-col h-full">
        <p className="text-base font-semibold mb-9">SEGUICI</p>
        <div className="flex flex-row gap-6">
          <Facebook className="w-4 h-4" />
          <Twitter className="w-4 h-4" />
          <Instagram className="w-4 h-4" />
          <Youtube className="w-4 h-4" />
          <Linkedin className="w-4 h-4" />
        </div>
      </div>
      <div className="h-full w-1/3 px-0 pt-[50px] pb-[34px] text-base font-semibold">
        <div className="w-auto flex flex-1 flex-col gap-7">
          <p>ISCRIVITI ALLA NEWSLETTER</p>
          <div className="pb-2 text-base text-gray-400 border-b-[1px] border-black flex flex-row justify-between">
            E-mail
            <ChevronRight absoluteStrokeWidth strokeWidth={1} color="black" />
          </div>
        </div>
      </div>
      <div className="h-full w-1/3 pl-[5.74rem] pt-[50px] pb-[34px] text-base font-semibold">
        <div className="w-auto flex flex-1 flex-col gap-7">
          <p>TROVA UN NEGOZIO</p>
          <div className=" pb-2 border-b-[1px] border-black flex flex-row justify-between text-base text-gray-400">
            Citta o codice postale
            <ChevronRight absoluteStrokeWidth strokeWidth={1} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
