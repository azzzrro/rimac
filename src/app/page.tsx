import HomeCards from "@/components/HomeCards";
import HomeFooter from "@/components/HomeFooter";
import { HomeHero } from "@/components/HomeHero";
import HomeNavbar from "@/components/HomeNavbar";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <HomeHero />
      <HomeCards />
      <HomeFooter />
    </>
  );
}
