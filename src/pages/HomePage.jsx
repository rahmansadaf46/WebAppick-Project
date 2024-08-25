import { Suspense, lazy } from "react";

const CustomNavbar = lazy(() => import("../components/Navbar"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const Client = lazy(() => import("../components/Client"));
const Subscribe = lazy(() => import("../components/Subscribe"));
const Profile = lazy(() => import("../components/Profile"));

const Join = lazy(() => import("../components/Join"));


const CoursesSection = lazy(() => import("../components/CoursesSection"));
const PricingSection = lazy(() => import("../components/PricingSection"));

const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CustomNavbar />
    <HeroSection />
    <Client />
    <Subscribe />
    <Profile />
    <Join />
    <CoursesSection />
    <PricingSection />
  </Suspense>
);

export default HomePage;
