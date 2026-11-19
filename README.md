# Meridian Website (React + Vite)

React source for the Meridian Quality Management Professionals website.

## Run it

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Deploy the `dist/` folder (e.g. to Netlify). `public/_redirects` makes deep links
like `/services/training` work on page refresh.

## Project structure

```
index.html                 HTML shell (fonts, favicon, meta tags)
public/                    Static files served as-is (logos, favicon, images, _redirects)
src/
  main.jsx                 App entry: mounts <App /> inside <BrowserRouter>
  App.jsx                  All routes (including old/alias URLs that redirect)
  index.css                All site styles
  components/
    Layout.jsx             Page wrapper: Navbar, <main>, Footer, scroll handling
    Navbar.jsx             Header, mega menu, mobile menu
    Footer.jsx
    ScrollToTop.jsx        Scrolls to top / #hash on route change
  utils/
    counterAnimation.js    Count-up animation for statistic numbers
  pages/
    Home.jsx, AboutUs.jsx, Services.jsx, Training.jsx, Compliance.jsx,
    CorporateWellbeing.jsx, ProjectsEvents.jsx, ViewCertificate.jsx,
    News.jsx, ContactUs.jsx
    advisory/              Advisory service pages (ISO 9001, ISO 14001, Lean Six Sigma, ...)
    sustainability/        Sustainability service pages (LEED, EcoVadis, LCA, ...)
```

Each page keeps its content (cards, steps, FAQs, courses…) in arrays at the top
of its file, so most text edits only touch those arrays.

## Common edits

- **Training courses and filters**: `src/pages/Training.jsx`
  (`courses`, `filterCategories`, `featuredCourse`, `upcomingSessions`).
- **Navigation links**: `src/components/Navbar.jsx`
- **Footer**: `src/components/Footer.jsx`
- **Add a page**: create it in `src/pages/`, then add a `<Route>` in `src/App.jsx`.
