import ClickRanking from "../Main/ClickRanking/ClickRanking";
import LookBook from "../Main/LookBook/LookBook";
import MainSlider from "../Main/MainSlider/MainSlider";
import MovSection from "../Main/MovSection/MovSection";
import NewProducts from "../Main/NewProducts/NewProducts";

export default function Home() {
  return (
    <>
      <MainSlider />
      <main>
        <div className="shop-center">
          <NewProducts />
          <MovSection />
          <ClickRanking />
          <LookBook />
        </div>
      </main>
    </>
  );
}
