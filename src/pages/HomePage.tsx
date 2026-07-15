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
      <Work />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  );
}
