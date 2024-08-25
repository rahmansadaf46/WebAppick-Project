import { Suspense, lazy } from "react";

const CustomNavbar = lazy(() => import("../components/Navbar"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const Client = lazy(() => import("../components/Client"));
const Subscribe = lazy(() => import("../components/Subscribe"));
const Profile = lazy(() => import("../components/Profile"));

const Join = lazy(() => import("../components/Join"));


const CoursesSection = lazy(() => import("../components/CoursesSection"));
const About = lazy(() => import("../components/About"));
const Price = lazy(() => import("../components/Price"));



const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CustomNavbar />
    <HeroSection />
    <Client />
    <Subscribe />
    <Profile />
    <CoursesSection />
    <About />

    <Join />
    <Price />
  </Suspense>
);

export default HomePage;
