import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { initCounterAnimations } from "../utils/counterAnimation";
export default function Layout({ children }) {
  const location = useLocation();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      initCounterAnimations();
    }, 60);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
  return (
    <div className="site-wrapper">
      <ScrollToTop />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
