import { AboutHero } from "../components/about/AboutHero";
import { AboutPrinciples } from "../components/about/AboutPrinciples";
import AboutStack from "../components/about/AboutStack";
import { AboutStory } from "../components/about/AboutStory";
import { AboutTestimonials } from "../components/about/AboutTestimonials";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <AboutStory /> */}
      <AboutPrinciples />
      <AboutTestimonials />
      <AboutStack />
    </>
  );
}
