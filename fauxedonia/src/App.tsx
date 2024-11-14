import Header from "./components/headerComponents/Header";
import ScrollingBanner from "./components/headerComponents/ScrollingBanner";
import CategoryBanner from "./components/CategoryBanner";
import CtaExpand from "./components/CtaExpand";
import InfoCard from "./components/InfoCard";
import PromoCardFooterLeft from "./components/promoFooter/PromoCardFooterLeft";
import PromoCardFooterMiddle from "./components/promoFooter/PromoCardFooterMiddle";
import PromoCardFooterRight from "./components/promoFooter/PromoCardFooterRight";
import SocialsFooter from "./components/footer/SocialsFooter";
import FooterLinks from "./components/footer/FooterLinks";
import FooterCopyright from "./components/footer/FooterCopyright";
import CircleLinks from "./components/CircleLinks";
import PromoBannerLeft from "./components/PromoBanners/PromoBannerLeft";
import PromoBannerMiddle from "./components/PromoBanners/PromoBannerMiddle";
import PromoBannerRight from "./components/PromoBanners/PromoBannerRight";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <ScrollingBanner text="SOLO PER OGGI: SPEDIZIONE GRATIS SU TUTTO" />
      <Header />
      <CategoryBanner />
      <CtaExpand />
      <CircleLinks />
      <div className="flex flex-row">
        <PromoBannerLeft />
        <PromoBannerMiddle />
        <PromoBannerRight />
      </div>
      <Carousel />
      <InfoCard />
      <div className="flex flex-row mt-10" key={"promoFooterWrap"}>
        <PromoCardFooterLeft textColor="white" color="purple" />
        <PromoCardFooterMiddle textColor="black" color="beige" />
        <PromoCardFooterRight textColor="white" color="lime" />
      </div>
      <SocialsFooter />
      <FooterLinks />
      <FooterCopyright />
    </>
  );
}

export default App;
