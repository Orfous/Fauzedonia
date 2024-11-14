import round1 from "../assets/round1.jpg";
import round2 from "../assets/round2.jpg";
import round3 from "../assets/round3.jpg";
import round4 from "../assets/round4.jpg";
import round5 from "../assets/round5.jpg";

export default function CircleLinks() {
  return (
    <div className=" flex flex-row justify-center py-20 px-[108px]">
      <div className=" pr-16 w-[16vw]">
        <span className=" break-words max-w-[235px]">
          <h2 className=" text-[2.3rem] leading-[2.5rem] mb-2">
            Trend Colant FW24
          </h2>
          <p className=" leading-5 ">
            Scopri tutte le fantasie e i modelli più di tendenza di quest'anno
          </p>
        </span>
      </div>
      <div className=" flex lex-row">
        <div className=" overflow-y-auto flex flex-row justify-start items-stretch  content-stretch m-0">
          <div className=" mr-10 w-32 flex flex-col items-center justify-center gap-3">
            <div className="relative w-[90px] h-[90px] overflow-hidden">
              <img
                src={round1}
                className=" absolute rounded-full cursor-pointer box-border w-[90px] h-[90px]
              border-[1px] border-transparent p-[5px] hover:border-black hover:border-[1px] hover:p-[5px]"
              />
            </div>
            <p className="">Hot pants e body</p>
          </div>
        </div>
        <div className=" overflow-y-auto flex flex-row justify-start items-stretch  content-stretch m-0">
          <div className=" mr-10 w-32 flex flex-col items-center justify-center gap-3">
            <div className="relative w-[90px] h-[90px] overflow-hidden">
              <img
                src={round2}
                className=" absolute rounded-full cursor-pointer box-border w-[90px] h-[90px]
              border-[1px] border-transparent p-[5px] hover:border-black hover:border-[1px] hover:p-[5px]"
              />
            </div>
            <p className="">Sensual</p>
          </div>
        </div>
        <div className=" overflow-y-auto flex flex-row justify-start items-stretch  content-stretch m-0">
          <div className=" mr-10 w-32 flex flex-col items-center justify-center gap-3">
            <div className="relative w-[90px] h-[90px] overflow-hidden">
              <img
                src={round3}
                className=" absolute rounded-full cursor-pointer box-border w-[90px] h-[90px]
              border-[1px] border-transparent p-[5px] hover:border-black hover:border-[1px] hover:p-[5px]"
              />
            </div>
            <p className="">A rete</p>
          </div>
        </div>
        <div className=" overflow-y-auto flex flex-row justify-start items-stretch  content-stretch m-0">
          <div className=" mr-10 w-32 flex flex-col items-center justify-center gap-3">
            <div className="relative w-[90px] h-[90px] overflow-hidden">
              <img
                src={round4}
                className=" absolute rounded-full cursor-pointer box-border w-[90px] h-[90px]
              border-[1px] border-transparent p-[5px] hover:border-black hover:border-[1px] hover:p-[5px]"
              />
            </div>
            <p className="">Velati</p>
          </div>
        </div>
        <div className=" overflow-y-auto flex flex-row justify-start items-stretch  content-stretch m-0">
          <div className=" mr-10 w-32 flex flex-col items-center justify-center gap-3">
            <div className="relative w-[90px] h-[90px] overflow-hidden">
              <img
                src={round5}
                className=" absolute rounded-full cursor-pointer box-border w-[90px] h-[90px]
              border-[1px] border-transparent p-[5px] hover:border-black hover:border-[1px] hover:p-[5px]"
              />
            </div>
            <p className="">Colorati</p>
          </div>
        </div>
      </div>
    </div>
  );
}
