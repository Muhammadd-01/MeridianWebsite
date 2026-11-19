import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSustainabilityOpen, setIsSustainabilityOpen] = useState(false);
  const [isAdvisoryOpen, setIsAdvisoryOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [megaPosition, setMegaPosition] = useState(null);
  const closeTimerRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSustainabilityOpen(false);
    setIsAdvisoryOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);
  // Opens the Advisory mega menu beside the Services dropdown (or below it when
  // there is not enough room), so it never covers the "Advisory" item itself.
  const openMegaMenu = (event) => {
    clearTimeout(closeTimerRef.current);
    const dropdown = event?.currentTarget?.closest?.(".nav-dd-menu");
    if (dropdown) {
      const rect = dropdown.getBoundingClientRect();
      const gap = 10;
      const margin = 16;
      const spaceRight = window.innerWidth - rect.right - gap - margin;
      setMegaPosition(
        spaceRight >= 740
          ? { top: rect.top, left: rect.right + gap, width: Math.min(spaceRight, 980) }
          : { top: rect.bottom + gap, left: margin, width: window.innerWidth - margin * 2 },
      );
    }
    setIsMegaMenuOpen(true);
  };
  const scheduleMegaMenuClose = () => {
    closeTimerRef.current = setTimeout(() => setIsMegaMenuOpen(false), 150);
  };
  const isSolid =
    isScrolled ||
    isMenuOpen ||
    ![
      "/",
      "/about-us",
      "/about",
      "/services",
      "/services/advisory",
      "/advisory",
      "/services/advisory/iso-14001",
      "/services/advisory/lean-six-sigma",
      "/services/advisory/sustainability-esg-integration",
      "/services/advisory/sustainability-esg",
      "/services/sustainability-esg-integration",
      "/sustainability-esg-integration",
      "/services/advisory/process-reengineering",
      "/services/advisory/process-reengineering-consulting",
      "/services/process-reengineering",
      "/process-reengineering",
      "/process-reengineering-consulting",
      "/services/advisory/supply-chain",
      "/services/advisory/supply-chain-consulting-optimization",
      "/services/advisory/supply-chain-optimization",
      "/services/supply-chain",
      "/supply-chain",
      "/services/advisory/project-management",
      "/services/advisory/project-management-excellence",
      "/services/project-management",
      "/project-management",
      "/project-management-excellence",
      "/services/advisory/ai-governance",
      "/services/advisory/ai-governance-iso-42001",
      "/services/advisory/iso-42001",
      "/services/ai-governance",
      "/ai-governance",
      "/iso-42001",
      "/services/advisory/api-q1-q2",
      "/services/advisory/api-q1-api-q2-oil-gas-quality-standards",
      "/services/advisory/api-standards",
      "/services/api-q1-q2",
      "/api-q1-q2",
      "/api-standards",
      "/services/advisory/facilities-management",
      "/services/advisory/business-facilities-management",
      "/services/advisory/iso-41001",
      "/services/facilities-management",
      "/facilities-management",
      "/business-facilities-management",
      "/services/advisory/change-management",
      "/services/advisory/change-management-consulting",
      "/services/change-management",
      "/change-management",
      "/services/advisory/facility-management-services",
      "/services/facility-management-services",
      "/facility-management-services",
      "/services/advisory/fire-safety",
      "/services/advisory/fire-safety-systems",
      "/services/fire-safety",
      "/fire-safety",
      "/fire-safety-systems",
      "/services/advisory/food-safety",
      "/services/advisory/food-safety-hygiene-audits",
      "/services/advisory/iso-22000",
      "/services/food-safety",
      "/food-safety",
      "/food-safety-audits",
      "/iso-22000",
      "/services/advisory/health-safety",
      "/services/advisory/health-and-safety",
      "/services/advisory/iso-45001",
      "/services/health-safety",
      "/health-safety",
      "/iso-45001",
      "/services/advisory/industrial-optimization",
      "/services/advisory/industrial-optimization-compliance",
      "/services/industrial-optimization",
      "/industrial-optimization",
      "/industrial-optimization-compliance",
      "/services/advisory/vendor-inspections",
      "/services/advisory/vendor-inspections-quality-audits",
      "/services/advisory/iso-17020",
      "/services/vendor-inspections",
      "/vendor-inspections",
      "/vendor-inspections-quality-audits",
      "/quality-audits",
      "/services/advisory/information-security",
      "/services/advisory/it-information-security",
      "/services/advisory/iso-27001",
      "/services/information-security",
      "/information-security",
      "/iso-27001",
      "/services/advisory/oil-and-gas",
      "/services/advisory/oil-gas",
      "/services/oil-and-gas",
      "/oil-and-gas",
      "/oil-gas",
      "/services/advisory/risk-assessments",
      "/services/advisory/iso-31000",
      "/services/advisory/risk-assessment",
      "/services/risk-assessments",
      "/risk-assessments",
      "/risk-assessment",
      "/iso-31000",
      "/services/advisory/iso-9001",
      "/services/advisory/iso-9001-quality-management-systems",
      "/services/advisory/iso-9001-qms",
      "/services/iso-9001",
      "/iso-9001",
      "/quality-management-systems",
      "/services/advisory/iso-14001-environmental-management",
      "/services/advisory/iso-14001-ems",
      "/services/advisory/environmental-management",
      "/services/environmental-management",
      "/environmental-management",
      "/services/advisory/iso-17020",
      "/services/advisory/iso-17020-inspection-body",
      "/services/advisory/iso-17020-inspection-body-requirements",
      "/services/iso-17020",
      "/iso-17020",
      "/services/advisory/iso-20121",
      "/services/advisory/iso-20121-sustainable-event-management",
      "/services/iso-20121",
      "/iso-20121",
      "/services/advisory/iso-22000",
      "/services/advisory/iso-22000-food-safety",
      "/services/advisory/iso-22000-food-safety-management-systems",
      "/services/iso-22000",
      "/services/advisory/iso-27001",
      "/services/advisory/iso-27001-information-security-management",
      "/services/iso-27001",
      "/services/advisory/iso-31000",
      "/services/advisory/iso-31000-risk-management",
      "/services/iso-31000",
      "/services/advisory/iso-41001",
      "/services/advisory/iso-41001-facility-management",
      "/services/advisory/iso-41001-facility-management-systems",
      "/services/iso-41001",
      "/iso-41001",
      "/services/advisory/iso-45001",
      "/services/advisory/iso-45001-occupational-health-safety",
      "/services/iso-45001",
      "/services/advisory/iso-50001",
      "/services/advisory/iso-50001-energy-management",
      "/services/advisory/iso-50001-energy-management-systems",
      "/services/iso-50001",
      "/iso-50001",
      "/services/iso-14001",
      "/services/lean-six-sigma",
      "/iso-14001",
      "/lean-six-sigma",
      "/services/training",
      "/services/compliance",
      "/services/sustainability",
      "/services/sustainability/reporting",
      "/services/sustainability/leed",
      "/services/sustainability/ecovadis",
      "/services/sustainability/mostadam",
      "/services/sustainability/lca",
      "/services/sustainability/green-building-advisory",
      "/services/sustainability/green-building",
      "/services/green-building-advisory",
      "/green-building-advisory",
      "/services/sustainability/carbon-footprint",
      "/services/sustainability/carbon-footprint-assessment",
      "/services/carbon-footprint",
      "/carbon-footprint",
      "/services/sustainability/iso-50001",
      "/services/sustainability/iso-50001-energy-management",
      "/services/sustainability/energy-audits",
      "/services/energy-audits",
      "/energy-audits",
      "/services/sustainability/training",
      "/services/sustainability/sustainability-training",
      "/services/sustainability-training",
      "/sustainability-training",
      "/services/ecovadis",
      "/services/mostadam",
      "/services/lca",
      "/ecovadis",
      "/mostadam",
      "/lca",
      "/services/corporate-wellbeing",
      "/services/advisory/corporate-wellbeing",
      "/corporate-wellbeing",
      "/wellbeing",
    ].includes(location.pathname) &&
    // Course detail pages have a dark hero, so the header stays transparent over it.
    !location.pathname.startsWith("/services/training/");
  const exactLinkClass = (path) => (location.pathname === path ? "active-sublink" : "");
  const sectionLinkClass = (path) => (location.pathname.startsWith(path) ? "active-sublink" : "");
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={`nav ${isSolid ? "solid" : ""} ${isMenuOpen ? "open" : ""}`} id="nav">
        <div className="nav-in">
          <Link className="brand" to="/" aria-label="Meridian Home">
            <img
              src="/logo-white.png"
              alt="Meridian Quality Management Professionals"
              className="brand-logo logo-dark"
            />
            <img
              src="/logo.png"
              alt="Meridian Quality Management Professionals"
              className="brand-logo logo-light"
            />
          </Link>
          <nav className="nav-pill" aria-label="Main">
            <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
              Home
            </Link>
            <Link
              to="/about-us"
              className={
                location.pathname === "/about-us" || location.pathname === "/about"
                  ? "active-link"
                  : ""
              }
            >
              About
            </Link>
            <div className={`nav-dd ${isMegaMenuOpen ? "force-open" : ""}`}>
              <Link
                to="/services"
                className={location.pathname.startsWith("/services") ? "active-link" : ""}
                aria-haspopup="true"
              >
                Services
              </Link>
              <div className="nav-dd-menu" role="menu">
                <Link
                  to="/services/training"
                  className={sectionLinkClass("/services/training")}
                  role="menuitem"
                >
                  Trainings
                </Link>
                <Link
                  to="/services/corporate-wellbeing"
                  className={exactLinkClass("/services/corporate-wellbeing")}
                  role="menuitem"
                >
                  Corporate Wellbeing
                </Link>
                <Link
                  to="/services/compliance"
                  className={exactLinkClass("/services/compliance")}
                  role="menuitem"
                >
                  Compliance
                </Link>
                <div className="nav-sub-dd">
                  <Link
                    to="/services/sustainability"
                    className={`nav-sub-trigger ${sectionLinkClass("/services/sustainability")}`}
                    role="menuitem"
                  >
                    <span>Sustainability</span>
                    <span className="sub-arrow" aria-hidden="true">
                      ›
                    </span>
                  </Link>
                  <div className="nav-sub-menu" role="menu">
                    <Link
                      to="/services/sustainability/reporting"
                      className={exactLinkClass("/services/sustainability/reporting")}
                      role="menuitem"
                    >
                      Sustainability Reporting
                    </Link>
                    <Link
                      to="/services/sustainability/leed"
                      className={exactLinkClass("/services/sustainability/leed")}
                      role="menuitem"
                    >
                      LEED Certification
                    </Link>
                    <Link
                      to="/services/sustainability/ecovadis"
                      className={exactLinkClass("/services/sustainability/ecovadis")}
                      role="menuitem"
                    >
                      EcoVadis Certification
                    </Link>
                    <Link
                      to="/services/sustainability/mostadam"
                      className={exactLinkClass("/services/sustainability/mostadam")}
                      role="menuitem"
                    >
                      Mostadam Certification
                    </Link>
                    <Link
                      to="/services/sustainability/lca"
                      className={exactLinkClass("/services/sustainability/lca")}
                      role="menuitem"
                    >
                      Product Life Cycle Analysis (LCA)
                    </Link>
                    <Link
                      to="/services/sustainability/green-building-advisory"
                      className={exactLinkClass("/services/sustainability/green-building-advisory")}
                      role="menuitem"
                    >
                      Green Building Advisory
                    </Link>
                    <Link
                      to="/services/sustainability/carbon-footprint"
                      className={exactLinkClass("/services/sustainability/carbon-footprint")}
                      role="menuitem"
                    >
                      Carbon Footprint Assessment
                    </Link>
                    <Link
                      to="/services/sustainability/iso-50001"
                      className={exactLinkClass("/services/sustainability/iso-50001")}
                      role="menuitem"
                    >
                      {"ISO 50001 & EnMS"}
                    </Link>
                    <Link
                      to="/services/sustainability/energy-audits"
                      className={exactLinkClass("/services/sustainability/energy-audits")}
                      role="menuitem"
                    >
                      {"Energy Audits & Optimization"}
                    </Link>
                    <Link
                      to="/services/sustainability/training"
                      className={exactLinkClass("/services/sustainability/training")}
                      role="menuitem"
                    >
                      Sustainability Training
                    </Link>
                  </div>
                </div>
                <div
                  className="nav-sub-dd"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={scheduleMegaMenuClose}
                >
                  <Link
                    to="/services/advisory"
                    className={`nav-sub-trigger ${sectionLinkClass("/services/advisory")} ${isMegaMenuOpen ? "is-open" : ""}`}
                    role="menuitem"
                  >
                    <span>Advisory</span>
                    <span className="sub-arrow" aria-hidden="true">
                      ›
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/projects-events"
              className={
                location.pathname === "/projects-events" ||
                location.pathname === "/projects" ||
                location.pathname === "/events"
                  ? "active-link"
                  : ""
              }
            >
              {"Projects & Events"}
            </Link>
            <Link to="/view-certificate" className={exactLinkClass("/view-certificate")}>
              View Certificate
            </Link>
            <Link
              to="/news"
              className={
                location.pathname === "/news" || location.pathname === "/news-and-articles"
                  ? "active-link"
                  : ""
              }
            >
              {"News & Articles"}
            </Link>
            <Link
              to="/contact-us"
              className={
                location.pathname === "/contact-us" || location.pathname === "/contact"
                  ? "active-link"
                  : ""
              }
            >
              Contact
            </Link>
          </nav>
          <Link className="nav-btn" to="/contact-us">
            Talk to our team ↗
          </Link>
          <button
            className="burger-btn"
            id="burger"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {isMegaMenuOpen && megaPosition && (
          <div
            className="adv-mega-menu-portal is-anchored"
            style={{
              top: `${megaPosition.top}px`,
              left: `${megaPosition.left}px`,
              width: `${megaPosition.width}px`,
              maxHeight: `calc(100vh - ${megaPosition.top + 16}px)`,
            }}
            onMouseEnter={openMegaMenu}
            onMouseLeave={scheduleMegaMenuClose}
            role="menu"
            aria-label="Advisory services"
          >
            <div className="adv-mega-col">
              <Link
                to="/services/advisory/lean-six-sigma"
                className={exactLinkClass("/services/advisory/lean-six-sigma")}
                role="menuitem"
              >
                {"Lean Six Sigma Consulting & Implementation"}
              </Link>
              <Link
                to="/services/advisory/sustainability-esg-integration"
                className={exactLinkClass("/services/advisory/sustainability-esg-integration")}
                role="menuitem"
              >
                {"Sustainability & ESG Integration"}
              </Link>
              <Link
                to="/services/advisory/process-reengineering"
                className={exactLinkClass("/services/advisory/process-reengineering")}
                role="menuitem"
              >
                Process Reengineering Consulting
              </Link>
              <Link
                to="/services/advisory/supply-chain"
                className={exactLinkClass("/services/advisory/supply-chain")}
                role="menuitem"
              >
                {"Supply Chain Consulting & Optimization"}
              </Link>
              <Link
                to="/services/advisory/project-management"
                className={exactLinkClass("/services/advisory/project-management")}
                role="menuitem"
              >
                Project Management Excellence
              </Link>
              <Link
                to="/services/advisory/change-management"
                className={exactLinkClass("/services/advisory/change-management")}
                role="menuitem"
              >
                Change Management Consulting
              </Link>
              <Link
                to="/services/corporate-wellbeing"
                className={exactLinkClass("/services/corporate-wellbeing")}
                role="menuitem"
              >
                Corporate Well-Being
              </Link>
              <Link
                to="/services/advisory/industrial-optimization"
                className={exactLinkClass("/services/advisory/industrial-optimization")}
                role="menuitem"
              >
                {"Industrial Optimization & Compliance"}
              </Link>
              <Link
                to="/services/advisory/information-security"
                className={exactLinkClass("/services/advisory/information-security")}
                role="menuitem"
              >
                {"IT & Information Security (ISO 27001)"}
              </Link>
              <Link
                to="/services/advisory/ai-governance"
                className={exactLinkClass("/services/advisory/ai-governance")}
                role="menuitem"
              >
                {"AI Governance & ISO 42001"}
              </Link>
              <Link
                to="/services/advisory/oil-and-gas"
                className={exactLinkClass("/services/advisory/oil-and-gas")}
                role="menuitem"
              >
                {"Oil & Gas (API Q1/Q2, ISO Standards)"}
              </Link>
            </div>
            <div className="adv-mega-col">
              <Link
                to="/services/advisory/facilities-management"
                className={exactLinkClass("/services/advisory/facilities-management")}
                role="menuitem"
              >
                Business Facilities Management
              </Link>
              <Link
                to="/services/advisory/health-safety"
                className={exactLinkClass("/services/advisory/health-safety")}
                role="menuitem"
              >
                {"Health & Safety Management"}
              </Link>
              <Link
                to="/services/advisory/fire-safety"
                className={exactLinkClass("/services/advisory/fire-safety")}
                role="menuitem"
              >
                Fire Safety Systems
              </Link>
              <Link
                to="/services/advisory/risk-assessments"
                className={exactLinkClass("/services/advisory/risk-assessments")}
                role="menuitem"
              >
                Risk Assessments
              </Link>
              <Link
                to="/services/advisory/food-safety"
                className={exactLinkClass("/services/advisory/food-safety")}
                role="menuitem"
              >
                {"Food Safety & Hygiene Audits"}
              </Link>
              <Link
                to="/services/advisory/facility-management-services"
                className={exactLinkClass("/services/advisory/facility-management-services")}
                role="menuitem"
              >
                Facility Management Services
              </Link>
              <Link
                to="/services/advisory/vendor-inspections"
                className={exactLinkClass("/services/advisory/vendor-inspections")}
                role="menuitem"
              >
                {"Vendor Inspections & Quality Audits"}
              </Link>
              <Link
                to="/services/advisory/api-q1-q2"
                className={exactLinkClass("/services/advisory/api-q1-q2")}
                role="menuitem"
              >
                {"API Q1 / API Q2 – Oil & Gas Quality Standards"}
              </Link>
              <Link
                to="/services/advisory/iso-9001"
                className={exactLinkClass("/services/advisory/iso-9001")}
                role="menuitem"
              >
                ISO 9001 – Quality Management Systems
              </Link>
              <Link
                to="/services/advisory/iso-14001-environmental-management"
                className={exactLinkClass("/services/advisory/iso-14001-environmental-management")}
                role="menuitem"
              >
                ISO 14001 – Environmental Management
              </Link>
              <Link
                to="/services/advisory/iso-45001"
                className={exactLinkClass("/services/advisory/iso-45001")}
                role="menuitem"
              >
                {"ISO 45001 – Occupational Health & Safety"}
              </Link>
            </div>
            <div className="adv-mega-col">
              <Link
                to="/services/advisory/iso-41001"
                className={exactLinkClass("/services/advisory/iso-41001")}
                role="menuitem"
              >
                ISO 41001 – Facility Management Systems
              </Link>
              <Link
                to="/services/advisory/iso-20121"
                className={exactLinkClass("/services/advisory/iso-20121")}
                role="menuitem"
              >
                ISO 20121 – Sustainable Event Management
              </Link>
              <Link
                to="/services/advisory/iso-22000"
                className={exactLinkClass("/services/advisory/iso-22000")}
                role="menuitem"
              >
                ISO 22000 – Food Safety Management Systems
              </Link>
              <Link
                to="/services/advisory/iso-50001"
                className={exactLinkClass("/services/advisory/iso-50001")}
                role="menuitem"
              >
                ISO 50001 – Energy Management Systems
              </Link>
              <Link
                to="/services/advisory/iso-27001"
                className={exactLinkClass("/services/advisory/iso-27001")}
                role="menuitem"
              >
                ISO 27001 – Information Security Management
              </Link>
              <Link
                to="/services/advisory/iso-31000"
                className={exactLinkClass("/services/advisory/iso-31000")}
                role="menuitem"
              >
                ISO 31000 – Risk Management
              </Link>
              <Link
                to="/services/advisory/iso-17020"
                className={exactLinkClass("/services/advisory/iso-17020")}
                role="menuitem"
              >
                ISO 17020 – Inspection Body Requirements
              </Link>
              <Link to="/services/advisory" role="menuitem">
                ISO 17021 – Certification Body Requirements
              </Link>
              <Link to="/services/advisory" role="menuitem">
                {"ISO 17025 – Laboratory Testing & Calibration"}
              </Link>
              <Link
                to="/services/advisory/ai-governance"
                className={exactLinkClass("/services/advisory/ai-governance")}
                role="menuitem"
              >
                ISO 42001 – AI Management Systems
              </Link>
              <Link to="/services/advisory" role="menuitem">
                ISO 37001 – Anti-Bribery Management
              </Link>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div
            className="nav-pill"
            style={{
              display: "flex",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <div className="nav-dd">
              <Link to="/services">Services ▾</Link>
              <div
                className="nav-dd-menu"
                style={{
                  display: "block",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                <Link to="/services/training">Trainings</Link>
                <Link to="/services/corporate-wellbeing">Corporate Wellbeing</Link>
                <Link to="/services/compliance">Compliance</Link>
                <div className="mobile-sub-group">
                  <div className="mobile-sub-header">
                    <Link
                      to="/services/sustainability"
                      style={{
                        flex: 1,
                      }}
                    >
                      Sustainability
                    </Link>
                    <button
                      type="button"
                      className="mobile-sub-toggle"
                      onClick={(event) => {
                        event.stopPropagation();
                        setIsSustainabilityOpen(!isSustainabilityOpen);
                      }}
                      aria-label="Toggle Sustainability Subpages"
                    >
                      {isSustainabilityOpen ? "–" : "+"}
                    </button>
                  </div>
                  {isSustainabilityOpen && (
                    <div className="mobile-sub-links">
                      <Link to="/services/sustainability/reporting">Sustainability Reporting</Link>
                      <Link to="/services/sustainability/leed">LEED Certification</Link>
                      <Link to="/services/sustainability/ecovadis">EcoVadis Certification</Link>
                      <Link to="/services/sustainability/mostadam">Mostadam Certification</Link>
                      <Link to="/services/sustainability/lca">
                        Product Life Cycle Analysis (LCA)
                      </Link>
                      <Link to="/services/sustainability/green-building-advisory">
                        Green Building Advisory
                      </Link>
                      <Link to="/services/sustainability/carbon-footprint">
                        Carbon Footprint Assessment
                      </Link>
                      <Link to="/services/sustainability/iso-50001">{"ISO 50001 & EnMS"}</Link>
                      <Link to="/services/sustainability/energy-audits">
                        {"Energy Audits & Optimization"}
                      </Link>
                      <Link to="/services/sustainability/training">Sustainability Training</Link>
                    </div>
                  )}
                </div>
                <div className="mobile-sub-group">
                  <div className="mobile-sub-header">
                    <Link
                      to="/services/advisory"
                      style={{
                        flex: 1,
                      }}
                    >
                      Advisory
                    </Link>
                    <button
                      type="button"
                      className="mobile-sub-toggle"
                      onClick={(event) => {
                        event.stopPropagation();
                        setIsAdvisoryOpen(!isAdvisoryOpen);
                      }}
                      aria-label="Toggle Advisory Subpages"
                    >
                      {isAdvisoryOpen ? "–" : "+"}
                    </button>
                  </div>
                  {isAdvisoryOpen && (
                    <div className="mobile-sub-links">
                      <Link to="/services/advisory/iso-14001">ISO 14001:2015 Lead Auditor</Link>
                      <Link to="/services/advisory/lean-six-sigma">Lean Six Sigma Consulting</Link>
                      <Link to="/services/advisory/sustainability-esg-integration">
                        {"Sustainability & ESG Integration"}
                      </Link>
                      <Link to="/services/advisory/process-reengineering">
                        Process Reengineering
                      </Link>
                      <Link to="/services/advisory/supply-chain">Supply Chain Optimization</Link>
                      <Link to="/services/advisory/project-management">
                        Project Management Excellence
                      </Link>
                      <Link to="/services/advisory/ai-governance">
                        {"AI Governance & ISO 42001"}
                      </Link>
                      <Link to="/services/advisory/api-q1-q2">API Q1 / API Q2 Standards</Link>
                      <Link to="/services/advisory/facilities-management">
                        Business Facilities Management
                      </Link>
                      <Link to="/services/advisory/change-management">
                        Change Management Consulting
                      </Link>
                      <Link to="/services/advisory/facility-management-services">
                        Facility Management Services
                      </Link>
                      <Link to="/services/advisory/fire-safety">Fire Safety Systems</Link>
                      <Link to="/services/advisory/food-safety">
                        {"Food Safety & Hygiene Audits"}
                      </Link>
                      <Link to="/services/advisory/health-safety">
                        {"Health & Safety Management"}
                      </Link>
                      <Link to="/services/advisory/industrial-optimization">
                        {"Industrial Optimization & Compliance"}
                      </Link>
                      <Link to="/services/advisory/vendor-inspections">
                        {"Vendor Inspections & Quality Audits"}
                      </Link>
                      <Link to="/services/advisory/information-security">
                        {"IT & Information Security (ISO 27001)"}
                      </Link>
                      <Link to="/services/advisory/oil-and-gas">
                        {"Oil & Gas (API Q1/Q2, ISO)"}
                      </Link>
                      <Link to="/services/advisory/risk-assessments">Risk Assessments</Link>
                      <Link to="/services/advisory/iso-9001">ISO 9001 Quality Management</Link>
                      <Link to="/services/advisory/iso-14001-environmental-management">
                        ISO 14001 Environmental Management
                      </Link>
                      <Link to="/services/advisory/iso-17020">
                        ISO 17020 Inspection Body Requirements
                      </Link>
                      <Link to="/services/advisory/iso-20121">
                        ISO 20121 Sustainable Event Management
                      </Link>
                      <Link to="/services/advisory/iso-22000">
                        ISO 22000 Food Safety Management
                      </Link>
                      <Link to="/services/advisory/iso-27001">ISO 27001 Information Security</Link>
                      <Link to="/services/advisory/iso-31000">ISO 31000 Risk Management</Link>
                      <Link to="/services/advisory/iso-41001">ISO 41001 Facility Management</Link>
                      <Link to="/services/advisory/iso-45001">
                        {"ISO 45001 Occupational Health & Safety"}
                      </Link>
                      <Link to="/services/advisory/iso-50001">
                        ISO 50001 Energy Management Systems
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Link to="/projects-events">{"Projects & Events"}</Link>
            <Link to="/view-certificate">View Certificate</Link>
            <Link to="/news">{"News & Articles"}</Link>
            <Link to="/contact-us">Contact Us</Link>
            <div className="mobile-cta-row">
              <Link className="nav-btn" to="/contact-us">
                Talk to our team ↗
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
