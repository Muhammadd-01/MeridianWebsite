import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to a #section when the address has one, and to the top of the page
// only when the page itself changes (not when a filter in the address changes).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);
  useEffect(() => {
    const pageChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    if (hash) {
      setTimeout(() => {
        const target = document.getElementById(hash.replace("#", ""));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    } else if (pageChanged) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
