import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const systems = ["HVAC", "Fire safety", "Plumbing", "Electrical"];
const coverageAreas = [
  "Buildings",
  "Utilities",
  "Safety systems",
  "ISO 41001",
  "Energy efficiency",
];
const benefits = [
  {
    num: "01",
    title: "Reduce operating costs and unplanned maintenance.",
    desc: "Planned servicing replaces emergency call-outs, so spending becomes predictable and avoidable repairs drop.",
  },
  {
    num: "02",
    title: "Extend the life of critical assets.",
    desc: "Well-maintained plant and equipment runs longer, delaying costly replacement and protecting asset value.",
  },
  {
    num: "03",
    title: "Ensure a safe, comfortable environment for occupants.",
    desc: "Reliable air, water, power, and safety systems keep people comfortable, protected, and productive.",
  },
  {
    num: "04",
    title: "Support sustainability and ESG goals.",
    desc: "Efficient operations cut energy use, waste, and emissions, giving you measurable progress to report.",
  },
  {
    num: "05",
    title: "Maintain regulatory compliance across all systems.",
    desc: "Scheduled inspections and clear records keep fire, electrical, mechanical, and other building systems within the rules.",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Assessment & planning",
    desc: "Evaluate existing FM performance, contracts, and resource use.",
  },
  {
    step: "Second step",
    num: "2",
    title: "Operations & maintenance setup",
    desc: "Design and deploy SOPs, CMMS systems, and contractor management.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Preventive maintenance programs",
    desc: "Develop schedules for HVAC, fire safety, plumbing, and electrical systems.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Performance & compliance reviews",
    desc: "Ongoing audits, energy analysis, and continuous improvement reports.",
  },
];
const outcomes = [
  "Lower downtime and asset failures.",
  "Higher safety and user satisfaction.",
  "ISO 41001 aligned FM systems.",
  "Reduced carbon footprint and waste.",
  "Real-time performance tracking.",
];
const accordionItems = [
  {
    id: "a1",
    title: "Certified FM auditors & engineers",
    desc: "We blend technical FM engineering, compliance rigor, and ESG standards into one collaborative advisory team.",
  },
  {
    id: "a2",
    title: "Systems-based approach",
    desc: "Digitized FM processes and standard operating procedures that scale smoothly as your real estate portfolio grows.",
  },
  {
    id: "a3",
    title: "Performance dashboards",
    desc: "We set up real-time monitoring tools to measure critical FM KPIs, equipment uptime, and energy ROI continuously.",
  },
  {
    id: "a4",
    title: "Customized to industry",
    desc: "Hotels, healthcare facilities, commercial headquarters, or factories — we tailor every protocol to your building’s unique function.",
  },
];
export default function FacilityManagementServices() {
  const [openItem, setOpenItem] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [percentStat, setPercentStat] = useState(0);
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const duration = 1400;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setPercentStat(Math.round(20 * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.25,
      },
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [statsVisible]);
  return (
    <div className="fms-page">
      <section className="fms-hero">
        <div className="fms-hero-in">
          <div>
            <p className="fms-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>Facility Management Services</b>
            </p>
            <h1>
              {"Facility Management "}
              <em>Services</em>
            </h1>
            <p className="fms-lead">
              Enhance building operations with smarter, more efficient and compliant facility
              services.
            </p>
            <div className="fms-acts">
              <Link className="fms-btn" to="/contact">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="fms-btn o" href="#model">
                {"See our model "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="fms-hero-ph">
            <img
              src={
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
              }
              alt="Facility operations management"
            />
            <div className="fms-sys" aria-hidden="true">
              <small>Systems we keep running</small>
              <div>
                {systems.map((system, index) => (
                  <span key={index}>{system}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fms-sec fms-wi" id="what">
        <div className="fms-wrap">
          <div
            className="fms-crumb"
            style={{
              color: "var(--fms-rust)",
              marginBottom: 12,
            }}
          >
            <b>Service Scope</b>
          </div>
          <h2>
            {"What are facility management "}
            <em>services?</em>
          </h2>
          <p className="fms-def">
            {"We provide "}
            <b>end-to-end support</b>
            {" in maintaining buildings, utilities, and safety systems while ensuring "}
            <b>ISO 41001 compliance</b>
            {" and "}
            <b>energy efficiency</b>.
          </p>
          <div className="fms-chips">
            {coverageAreas.map((coverageArea, index) => (
              <span key={index}>{coverageArea}</span>
            ))}
          </div>
          <figure className="fms-band">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="Facility management services banner"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
      <section className="fms-sec fms-why" id="why">
        <div className="fms-wrap">
          <div className="fms-wb">
            <img
              className="fms-wb-img"
              src={
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
              }
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h2>
              {"Why it "}
              <em>matters</em>
            </h2>
            <p>
              Five ways professional facility management protects your budget, your assets, and your
              people.
            </p>
          </div>
          <ol className="fms-cards">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </li>
            ))}
          </ol>
          <div className="fms-src" ref={statsRef}>
            <div className="fms-nums">
              <div>
                <b>
                  {"Up to "}
                  {statsVisible ? percentStat : 0}%
                </b>
                <span>cost savings</span>
              </div>
              <div>
                <b>30–40%</b>
                <span>longer equipment lifespan</span>
              </div>
            </div>
            <div>
              <p>
                {"Facilities with professional FM solutions achieve "}
                <b>up to 20% cost savings</b>
                {" and extend equipment lifespan by "}
                <b>30%–40%</b>.
              </p>
              <cite>
                Source:{" "}
                <a
                  href="https://coastapp.com/blog/preventive-maintenance-facility-operations/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coast — Preventive Maintenance Cuts Facility Operations Costs by Almost 20%
                </a>
              </cite>
            </div>
          </div>
        </div>
      </section>
      <section className="fms-sec" id="model">
        <div className="fms-wrap">
          <div className="fms-sh c">
            <div
              className="fms-crumb"
              style={{
                color: "var(--fms-rust)",
                marginBottom: 12,
              }}
            >
              <b>Structured Methodology</b>
            </div>
            <h2>
              {"Our 4-step FM "}
              <em>services model</em>
            </h2>
          </div>
          <ol className="fms-pipe">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nd">{processStep.num}</div>
                <div className="cd">
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="fms-sec fms-ben" id="benefits">
        <div className="fms-wrap">
          <div className="fms-sh">
            <div
              className="fms-crumb"
              style={{
                color: "var(--fms-teal)",
                marginBottom: 12,
              }}
            >
              <b>Operational ROI</b>
            </div>
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="fms-chk">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fms-sec fms-ch" id="choose">
        <div className="fms-wrap">
          <div className="fms-sh c">
            <div
              className="fms-crumb"
              style={{
                color: "var(--fms-primrose)",
                marginBottom: 12,
              }}
            >
              <b>Why Meridian</b>
            </div>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="fms-acc">
            {accordionItems.map((accordionItem, index) => {
              const isOpen = openItem === index;
              return (
                <li key={accordionItem.id} className={isOpen ? "open" : ""}>
                  <button onClick={() => setOpenItem(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{accordionItem.title}</span>
                    <span className="pl" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="pa">
                    <p>{accordionItem.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="fms-role" aria-label="Role of FM consultants">
        <div className="fms-wrap">
          <h2>Role of FM Consultants</h2>
          <p>
            We make facility operations smooth, strategic, and sustainable — not just reactive
            maintenance.
          </p>
        </div>
      </section>
      <div className="fms-wrap" id="contact">
        <section className="fms-cta">
          <h2>
            {"Ready to upgrade "}
            <em>your facilities?</em>
          </h2>
          <p className="t">
            Let Meridian optimize your buildings for performance, safety, and compliance.
          </p>
          <Link className="fms-btn or" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="fms-ct">
            <div>
              <dt>Call us</dt>
              <dd>
                <a href="tel:+966509394640">+966 50 939 4640</a>
              </dd>
            </div>
            <div>
              <dt>Need support</dt>
              <dd>
                <a href="mailto:info@meqmp.com">info@meqmp.com</a>
              </dd>
            </div>
            <div>
              <dt>Our global locations</dt>
              <dd>
                Saudi Arabia
                <br />
                Bahrain
                <br />
                Canada
                <br />
                Pakistan
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
