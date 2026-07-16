import { useRef } from "react";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { usePortfolioAnimations } from "./hooks/usePortfolioAnimations";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  const root = useRef<HTMLDivElement>(null);
  usePortfolioAnimations(root);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isHomePage = path === "/";
  const page =
    path === "/about" ? (
      <AboutPage />
    ) : path === "/work" ? (
      <WorkPage />
    ) : path === "/services" ? (
      <ServicesPage />
    ) : (
      <HomePage />
    );

  return (
    <div ref={root}>
      <a
        className="fixed -top-16 left-5 z-999 bg-ink px-5 py-3 text-white transition-[top] focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{page}</main>
      {isHomePage ? (
        <div
          className="home-parallax-footer overflow-hidden bg-paper"
          data-parallax-offset="32"
        >
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
