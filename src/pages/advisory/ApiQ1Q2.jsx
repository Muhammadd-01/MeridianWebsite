import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const benefits = [
  {
    num: "01",
    text: "Comply with client and regulatory demands.",
  },
  {
    num: "02",
    text: "Enhance reliability of products and services.",
  },
  {
    num: "03",
    text: "Reduce operational risk and failure costs.",
  },
  {
    num: "04",
    text: "Qualify for global tenders and supply chains.",
  },
  {
    num: "05",
    text: "Build trust and credibility in energy markets.",
  },
];
const stats = [
  {
    val: 33,
    suf: "%",
    label: "reduction in planned maintenance",
  },
  {
    val: 70,
    suf: "%",
    label: "drop in corrective maintenance",
  },
  {
    val: 50,
    suf: "%",
    label: "decrease in maintenance-related cleaning",
  },
  {
    val: 20,
    suf: "%",
    label: "boost in OEE",
  },
  {
    val: 200,
    suf: "+",
    label: "hours of added plant availability",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Gap analysis vs. API requirements.",
  },
  {
    step: "Second step",
    num: "2",
    title: "System design (documentation + process controls).",
  },
  {
    step: "Third step",
    num: "3",
    title: "Internal audits and mock assessments.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Certification support & post-audit compliance.",
  },
];
const outcomes = [
  "Faster API certification with minimal disruptions.",
  "Enhanced documentation and risk control.",
  "Improved operational consistency and safety.",
  "Long-term maintenance and surveillance readiness.",
  "Greater competitiveness in the oil & gas value chain.",
];
const whyChooseUs = [
  "Extensive experience in upstream/downstream operations.",
  "API Q1 & Q2 implementation experts.",
  "Support in supplier audits and documentation.",
  "Hands-on guidance from kickoff to audit.",
];
export default function ApiQ1Q2() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [statValues, setStatValues] = useState([0, 0, 0, 0, 0]);
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
            setStatValues(stats.map((stat) => Math.round(stat.val * eased)));
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
    <div className="api-page">
      <section className="api-hero">
        <img
          className="api-hero-img"
          src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
          alt="Oil and gas infrastructure"
          aria-hidden="true"
        />
        <div className="api-hero-shade" aria-hidden="true" />
        <div className="api-hero-txt">
          <p className="api-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>API Q1 / API Q2 Standards</b>
          </p>
          <h1>
            {"API Q1 / API Q2 – "}
            <em>{"Oil & Gas"}</em>
            {" Quality Standards"}
          </h1>
          <p className="api-lead">
            {
              "Meet global oil & gas quality benchmarks with API-certified systems and supplier integrity."
            }
          </p>
          <div className="api-acts">
            <Link className="api-btn" to="/contact">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="api-btn o" href="#roadmap">
              {"See our roadmap "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="api-std" aria-hidden="true">
          <small>American Petroleum Institute</small>
          <div>
            <b>Q1</b>
            <span>Manufacturing</span>
          </div>
          <div>
            <b>Q2</b>
            <span>Service</span>
          </div>
        </div>
      </section>
      <section className="api-sec" id="what">
        <div className="api-wrap">
          <div className="api-wi">
            <div>
              <div
                className="api-crumb"
                style={{
                  color: "var(--api-rust)",
                  marginBottom: 12,
                }}
              >
                <b>Standard Definitions</b>
              </div>
              <h2>
                {"What are "}
                <em>{"API Q1 & Q2?"}</em>
              </h2>
            </div>
            <div>
              <p className="api-def">
                <b>API Q1</b>
                {" (manufacturing) and "}
                <b>API Q2</b>
                {
                  " (service) are quality standards by the American Petroleum Institute, essential for oil & gas industry compliance and high-value energy contracts."
                }
              </p>
              <ul className="api-two">
                <li>
                  <div className="k">Q1</div>
                  <small>American Petroleum Institute</small>
                  <h3>Manufacturing</h3>
                </li>
                <li>
                  <div className="k">Q2</div>
                  <small>American Petroleum Institute</small>
                  <h3>Service</h3>
                </li>
              </ul>
            </div>
          </div>
          <figure className="api-band">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="API Q1 and API Q2 oil and gas quality standards"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
      <section className="api-sec api-why" id="why">
        <div className="api-wrap">
          <div className="api-wm">
            <div className="stick">
              <div
                className="api-crumb"
                style={{
                  color: "var(--api-rust)",
                  marginBottom: 12,
                }}
              >
                <b>Industry Imperative</b>
              </div>
              <h2>
                {"Why it "}
                <em>matters</em>
              </h2>
              <p>
                Five reasons API quality management systems open doors in global energy markets.
              </p>
            </div>
            <ol className="api-rows">
              {benefits.map((benefit) => (
                <li key={benefit.num}>
                  <span className="n">{benefit.num}</span>
                  <h3>{benefit.text}</h3>
                </li>
              ))}
            </ol>
          </div>
          <div className="api-src" ref={statsRef}>
            <span className="tag">Empirical Research Source</span>
            <div className="api-nums">
              {stats.map((stat, index) => (
                <div key={index}>
                  <b>
                    {statsVisible ? statValues[index] : 0}
                    {stat.suf}
                  </b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <p>
              Companies implementing Total Productive Maintenance (TPM) and Reliability-Centered
              Maintenance (RCM) in API-compliant environments achieved a 33% reduction in planned
              maintenance, a 70% drop in corrective maintenance, a 50% decrease in
              maintenance-related cleaning, a 20% boost in OEE, and over 200 hours of added plant
              availability.{" "}
              <a
                href="https://www.researchgate.net/publication/374783624_A_total_productive_maintenance_reliability_framework_for_an_active_pharmaceutical_ingredient_plant_utilising_design_for_Lean_Six_Sigma"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Heliyon journal, 2023 case study)
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="api-sec" id="roadmap">
        <div className="api-wrap">
          <div className="api-sh c">
            <div
              className="api-crumb"
              style={{
                color: "var(--api-rust)",
                marginBottom: 12,
              }}
            >
              <b>Structured Path</b>
            </div>
            <h2>
              {"Our 4-step API "}
              <em>certification roadmap</em>
            </h2>
          </div>
          <ol className="api-pipe">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nd">{processStep.num}</div>
                <div className="cd">
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="api-sec api-ben" id="benefits">
        <div className="api-wrap">
          <div className="api-sh">
            <div
              className="api-crumb"
              style={{
                color: "var(--api-teal)",
                marginBottom: 12,
              }}
            >
              <b>Strategic Impact</b>
            </div>
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="api-chk">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="api-sec api-ch" id="choose">
        <div className="api-wrap">
          <div className="api-sh">
            <div
              className="api-crumb"
              style={{
                color: "var(--api-primrose)",
                marginBottom: 12,
              }}
            >
              <b>Trusted Advisory</b>
            </div>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <div className="api-cg">
            <ul>
              {whyChooseUs.map((whyChooseU, index) => (
                <li key={index}>{whyChooseU}</li>
              ))}
            </ul>
            <figure>
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Meridian management systems"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="api-role" aria-label="Role of API consultants">
        <div className="api-wrap">
          <h2>Role of API Consultants</h2>
          <p>
            {
              "We enable oil & gas players to adopt world-class quality systems while managing risk and regulatory expectations."
            }
          </p>
        </div>
      </section>
      <div className="api-wrap" id="contact">
        <section className="api-cta">
          <h2>
            {"Ready to become "}
            <em>API certified?</em>
          </h2>
          <p className="t">
            {"Secure your position in the global energy and oil & gas supply chains."}
          </p>
          <Link className="api-btn or" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="api-ct">
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
