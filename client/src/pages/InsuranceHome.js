import React from "react";
import Header from "../components/header/Header";
import ImageSection from "../components/image-section/ImageSection";
import Reviews from "../components/reviews/Reviews";
import InsuranceButtonsSection from "../components/insurance-buttons-section/InsuranceButtonsSection";
import BottomNav from "../components/bottom-nav/BottomNav";
import Footer from "../components/footer/Footer";
import InsurancePlans from "../components/insurance-plans/InsurancePlans";
import HomeFAQ from "../components/home-faqs/HomeFAQs";

export default function InsuranceHome() {
  return (
    <>
      <Header />
      <ImageSection />
      <InsurancePlans />
      <Reviews />
      <HomeFAQ />
      <InsuranceButtonsSection />
      <BottomNav />
      <Footer />
    </>
  );
}
