import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Proof } from "../components/sections/Proof";
import { Services } from "../components/sections/Services";
import { Ticker } from "../components/sections/Ticker";
import { Work } from "../components/sections/Work";

export function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Proof />
      <div className="home-parallax">
        <div
          className="parallax-section overflow-hidden bg-paper"
          data-parallax-offset="48"
        >
          <Work />
        </div>
        <div
          className="parallax-section overflow-hidden bg-paper"
          data-parallax-offset="72"
        >
          <Services />
        </div>
        <div
          className="parallax-section overflow-hidden bg-ink"
          data-parallax-offset="56"
        >
          <About />
        </div>
        <div
          className="parallax-section overflow-hidden bg-paper"
          data-parallax-offset="80"
        >
          <Process />
        </div>
        <div
          className="parallax-section overflow-hidden bg-signal"
          data-parallax-offset="48"
        >
          <Contact />
        </div>
      </div>
    </>
  );
}
