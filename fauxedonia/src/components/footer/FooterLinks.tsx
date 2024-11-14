import { ChevronDown } from "lucide-react";

export default function FooterLinks() {
  return (
    <div className=" px-[2.8rem] w-full pb-11 border-b-[1px] border-gray-200">
      <div className="flex flex-row m-0 p-0">
        <div className="flex flex-col py-7 w-1/5">
          <p className="font-semibold text-base">Paese</p>
          <div className=" pr-[7.7rem] flex flex-col">
            <div className="pt-7 pb-[9.6px] border-b-[1px] border-black flex flex-row justify-between">
              Italy
              <ChevronDown
                absoluteStrokeWidth
                strokeWidth={1}
                className="w-5 h-5 relative -translate-x-2"
              />
            </div>
            <span className="pt-7 pb-[9.6px] border-b-[1px] border-black flex flex-row justify-between">
              Italiano
              <ChevronDown
                absoluteStrokeWidth
                strokeWidth={1}
                className="w-5 h-5 relative -translate-x-2"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col py-7 w-1/5">
          <div className="font-semibold ">Servizio clienti</div>
          <div className="pt-[1.7rem] flex flex-col justify-start gap-2 text-sm">
            <p>Segui il tuo ordine/reso</p>
            <p>Domande frequenti</p>
            <p>Ordini</p>
            <p>Spedizioni</p>
            <p>Pagamenti</p>
            <p>Resi e rimborsi</p>
          </div>
        </div>
        <div className="flex flex-col py-7 w-1/5">
          <div className="font-semibold ">Guida al prodotto</div>
          <div className="pt-[1.7rem] flex flex-col justify-start gap-2 text-sm">
            <p>Guida alla taglie</p>
            <p>Guida al prodotto</p>
            <p>Summer style guide</p>
            <p>Tessuti e lavorazioni</p>
            <p>Cura dei capi</p>
            <p>Gift card</p>
          </div>
        </div>
        <div className="flex flex-col py-7 w-1/5">
          <div className="font-semibold ">About us</div>
          <div className="pt-[1.7rem] flex flex-col justify-start gap-2 text-sm">
            <p>Company</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="flex flex-col py-7 w-1/5">
          <div className="font-semibold ">Area legale</div>
          <div className="pt-[1.7rem] flex flex-col justify-start gap-2 text-sm">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Condizioni d'uso</p>
            <p>Condizioni di vendita</p>
            <p>Informativa sulle recesioni</p>
            <p>Regolamenti</p>
          </div>
        </div>
      </div>
    </div>
  );
}
