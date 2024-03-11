import React from "react";
import Forms from "./pages/forms";
import InsuranceSection from "./components/InsuranceSection";
import HospitalInsuranceCards from "./components/HospitalInsuranceCards";
import BannerPage from "./components/BannerPage";
import GuidePage from "./pages/GuidePage";
import VergleichenPage from "./pages/VergleichenPage";
// import GuidePage from "./components/GuidePage";


export default function App() {
  return (
    <div>
      <VergleichenPage />
      <GuidePage />
      {/* <BannerPage />
      <Forms />
      <InsuranceSection />

      <HospitalInsuranceCards /> */}
    </div>
  );
}
