import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="foot">
      <div className="cols">
        <div>
          <Link className="brand" to="/" aria-label="Meridian Home">
            <img
              src="/logo-white.png"
              alt="Meridian Quality Management Professionals"
              className="brand-logo foot-logo"
            />
          </Link>
          <p>
            Meridian Quality Management Professionals helps organizations turn standards and
            requirements into better ways of working. Since 2005.
          </p>
          <Link className="btn-talk" to="/contact-us">
            Talk to our team ↗
          </Link>
        </div>
        <div>
          <h4>What we do</h4>
          <ul>
            <li>
              <Link to="/services/advisory">Advisory</Link>
            </li>
            <li>
              <Link to="/services/training">Trainings</Link>
            </li>
            <li>
              <Link to="/services/compliance">Compliance</Link>
            </li>
            <li>
              <Link to="/services/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link to="/services/corporate-wellbeing">Corporate Wellbeing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/projects-events">{"Projects & Events"}</Link>
            </li>
            <li>
              <Link to="/view-certificate">View Certificate</Link>
            </li>
            <li>
              <Link to="/news">{"News & Articles"}</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Where we work</h4>
          <ul className="gap">
            <li>Middle East</li>
            <li>Asia</li>
            <li>North America</li>
            <li>
              <a href="mailto:info@meqmp.com">info@meqmp.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="word" aria-hidden="true">
        Meridian
      </div>
      <div className="bot">
        <span>
          {"© "}
          {year}
          {" Meridian Quality Management Professionals. All rights reserved."}
        </span>
        <nav aria-label="Legal">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#top" onClick={scrollToTop}>
            Back to top ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
