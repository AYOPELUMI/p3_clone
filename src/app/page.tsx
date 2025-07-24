import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import UpcomingEvent from "@/components/sections/upcomingEvent";

export default function Home() {
  return (
    <div className="max-w-[1512px] w-full mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/*Hero Section*/}
      <Hero />
      {/* Upcoming Events Section */}
      <UpcomingEvent />
      {/* Footer */}
      <Footer />
    </div >
  );
}