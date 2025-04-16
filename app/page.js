
import Hero from "@/container/Hero";
import Overview from "@/container/Overview";
import TopCategorys from "@/container/TopCategory";
import Categories from "@/container/TopCategory";
import AboutUs from "@/container/About";
import Courses from "@/container/ForUCourse";
import Stars from "@/container/Stars";
import Offerings from "@/container/Offerings";
import FAQ from "@/container/Faqs";
import LatestUpdates from "@/container/LatestUpdares";
export default function Home() {


  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Overview Section */}
      <Overview />
      {/* top category section */}
      <Categories />
      {/* About us Section */}
      <AboutUs />
      {/* course section */}
      <Courses />
      {/* stars section       */}
      <Stars />
      {/* offerings section  */}
      <Offerings />
      {/* Faqs section */}
      <FAQ />
      <LatestUpdates />
    </div>
  );
}