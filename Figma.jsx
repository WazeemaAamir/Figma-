import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import VoucherBanner from "../components/VoucherBanner";
import iPhone14Banner from "../components/iPhone14Banner";
import { ArrowRight } from "lucide-react";
import Image from "next/Image";
import FlashSalesTimer from "../Components/FlashSalesTimer";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <CategoryMenu />
      <VoucherBanner />
      <iPhone14Banner />
      <ArrowRight />
      <Image />
      <FlashSalesTimer />
      <main>
        <h1>Welcome to the Homepage!</h1>
      </main>
    </div>
  );
}
