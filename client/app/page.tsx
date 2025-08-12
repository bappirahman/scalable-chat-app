import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import Footer from "@/components/base/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar user={session?.user} />
      <HeroSection />
      <FeatureSection />
      <UserReviews />
      <Footer />
    </div>
  );
}
