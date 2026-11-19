import { useEffect } from "react";

// Sets the browser title and meta description for a page, restoring the
// previous values when the page is left.
export default function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    const previousDescription = meta.getAttribute("content");
    if (title) document.title = title;
    if (description) meta.setAttribute("content", description);
    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta.setAttribute("content", previousDescription);
    };
  }, [title, description]);
}
