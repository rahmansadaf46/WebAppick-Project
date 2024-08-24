import { Suspense, lazy } from "react";

const CustomNavbar = lazy(() => import("../components/Navbar"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const CoursesSection = lazy(() => import("../components/CoursesSection"));
const PricingSection = lazy(() => import("../components/PricingSection"));

const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CustomNavbar />
    <HeroSection />
    <CoursesSection />
    <PricingSection />
  </Suspense>
);

export default HomePage;
