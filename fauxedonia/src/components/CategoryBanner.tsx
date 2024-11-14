import { SlidersVertical } from "lucide-react";
import kendall from "../assets/kendall.jpg";

const CategoryBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-row">
        <div className="w-[33.9%]">
          <img
            src={kendall}
            className="object-cover w-full aspect-6/5 1.5xl:aspect-3/2"
          />
        </div>
        <div
          dir="ltr"
          className="flex flex-1 bg-black w-auto h-auto self-stretch items-center "
        >
          <div className="text-white py-8 flex flex-col gap-4 w-full pe-10 ps-10 1.5xl:ps-[11.11vw] 1.5xl:pe-[11.11vw]">
            <p className="text-base font-semibold">SCELTI DA KENDALL</p>
            <div>
              <p>
                Kendall Jenner lancia il nuovo trend di stagione: all about the
                legs!
              </p>
              <p>
                Scopri i collant scelti da Kendall, perfetti per aggiungere un
                tocco di stile ad ogni look.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="pe-10 ps-10 py-10 text-sm">
        DONNA&gt;Scelti da Kendall&gt;Vedi tutti
      </span>
      <span className="flex flex-row gap-1.5 mb-6 pe-10 ps-10">
        <SlidersVertical />
        Filtri
      </span>
    </div>
  );
};
export default CategoryBanner;
