import { Search, User, ShoppingBag, Heart } from "lucide-react";

const Header = () => {
  return (
    <div className="flex h-70 flex-row items-center justify-between px-10">
      <div className="flex flex-row gap-6 whitespace-nowrap">
        <span>DONNA</span>
        <span>UOMO</span>
        <span>BAMBINI</span>
      </div>
      <div className="font-bold text-2xl">CALZEDONIA</div>
      <div className="flex flex-row items-center gap-6 justify-end">
        <div className="flex flex-row gap-2">
          <Search className=" w-4" absoluteStrokeWidth strokeWidth={1} />
          <span className="lgray">Cerca</span>
        </div>
        <User absoluteStrokeWidth strokeWidth={1} />
        <Heart absoluteStrokeWidth strokeWidth={1} />
        <ShoppingBag absoluteStrokeWidth strokeWidth={1} />
      </div>
    </div>
  );
};
export default Header;
