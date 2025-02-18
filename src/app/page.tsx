import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import ClientLogosSwiper from "@/components/companies";
import Footer from "@/components/footer";
import PricingPage from "@/components/pricingPage";

export default function Home() {
  return (
    <div className=" ">
      <main>
        <Hero />
    
        <Features />
        <ClientLogosSwiper/>
        <PricingPage/>
        <Testimonials />
        <CTA />
        <Footer/>
      </main>
    </div>
  );
}
