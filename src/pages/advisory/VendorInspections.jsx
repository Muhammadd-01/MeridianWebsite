import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const inspectionTypes = [
  {
    num: "1",
    title: "Supplier quality",
    desc: "Confirming that what your suppliers make is consistently good enough to ship.",
  },
  {
    num: "2",
    title: "Regulatory compliance",
    desc: "Checking that suppliers meet the rules that apply to their products and sites.",
  },
  {
    num: "3",
    title: "Product specifications",
    desc: "Measuring what is produced against the exact requirements you agreed.",
  },
  {
    num: "4",
    title: "Ethical practices",
    desc: "Looking at how suppliers treat people, communities, and the environment.",
  },
];
const benefits = [
  "Reduce supplier-related defects and delays.",
  "Ensure ethical sourcing and compliance (CSR, ESG).",
  "Protect your brand reputation and customer satisfaction.",
  "Validate quality before shipment or delivery.",
  "Build transparent, resilient supply chains.",
];
const processSteps = [
  {
    num: "1",
    step: "First step",
    title: "Pre-qualification & risk scoring",
  },
  {
    num: "2",
    step: "Second step",
    title: "On-site or remote audits (ISO, spec compliance)",
  },
  {
    num: "3",
    step: "Third step",
    title: "Reporting with CAPA (corrective & preventive actions)",
  },
  {
    num: "4",
    step: "Fourth step",
    title: "Continuous monitoring & supplier development",
  },
];
const outcomes = [
  "Verified supplier capabilities and quality.",
  "Reduced risks from poor sourcing or unethical practices.",
  "Increased consistency and trust across your supply chain.",
  "Transparent data to support procurement and ESG.",
  "Readiness for third-party and regulatory inspections.",
];
export default function VendorInspections() {
  const [openItem, setOpenItem] = useState(0);
  const [statValue, setStatValue] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const duration = 1500;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setStatValue(Math.round(48 * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.3,
      },
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [statsVisible]);
  return (
    <div className="vi-page">
      <section className="vi-hero">
        <div className="vi-hero-bg" aria-hidden="true">
          <div />
        </div>
        <div className="vi-vf" aria-hidden="true" />
        <div className="vi-scan" aria-hidden="true" />
        <div className="vi-hero-txt">
          <p className="vi-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"Vendor Inspections & Quality Audits"}</b>
          </p>
          <h1>
            {"Vendor Inspections & "}
            <em>Quality Audits</em>
          </h1>
          <p className="vi-lead">
            Mitigate risk, ensure supplier compliance, and maintain quality control across your
            supply chain.
          </p>
          <div className="vi-acts">
            <Link className="vi-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="vi-btn o" href="#vi-process">
              {"See our process "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="vi-stamp" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="cpA" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
            </defs>
            <text>
              <textPath href="#cpA" textLength="472" lengthAdjust="spacing">
                VENDOR INSPECTION • QUALITY AUDIT •{" "}
              </textPath>
            </text>
          </svg>
          <span className="vi-ck">✓</span>
        </div>
      </section>
      <section className="vi-sec" id="vi-what">
        <div className="vi-wrap">
          <p className="vi-wd">
            <b>Third-party assessments</b>
            {
              " that verify supplier quality, regulatory compliance, product specifications, and ethical practices."
            }
          </p>
          <ul className="vi-fx">
            {inspectionTypes.map((inspectionType, index) => {
              const isOpen = openItem === index;
              return (
                <li
                  key={inspectionType.num}
                  className={isOpen ? "on" : ""}
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  tabIndex={0}
                >
                  <span className="vi-no">{inspectionType.num}</span>
                  <h3>{inspectionType.title}</h3>
                  <p>{inspectionType.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="vi-sec vi-why" id="vi-why">
        <div className="vi-wrap">
          <div className="vi-sh">
            <h2>
              {"Why it "}
              <em>matters</em>
            </h2>
          </div>
          <div className="vi-wm" ref={statsRef}>
            <div className="vi-stat">
              <div className="vi-rg">
                <svg viewBox="0 0 160 160" aria-hidden="true">
                  <circle className="vi-bg" cx="80" cy="80" r="70" />
                  <circle className="vi-fg" cx="80" cy="80" r="70" />
                </svg>
                <b>{statValue}%</b>
              </div>
              <p>
                Companies with structured supplier audits report a 48% reduction in defective
                returns and significant cost savings.
              </p>
              <small>Source: BRCGS and Brand Owner Pilot Study – April 2019</small>
            </div>
            <ul className="vi-vr">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  {benefit}
                  <span className="vi-pl">Verified</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="vi-sec" id="vi-process">
        <div className="vi-wrap">
          <div className="vi-sh">
            <h2>
              {"Our 4-step vendor quality "}
              <em>process</em>
            </h2>
          </div>
          <ol className="vi-chev">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="vi-n">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="vi-sec vi-ben" id="benefits">
        <div className="vi-wrap">
          <div className="vi-cert">
            <div className="vi-ci">
              <h2>
                {"Key "}
                <em>benefits</em>
              </h2>
              <ul>
                {outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="vi-stamp" aria-hidden="true">
              <svg viewBox="0 0 200 200">
                <defs>
                  <path id="cpB" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
                </defs>
                <text>
                  <textPath href="#cpB" textLength="472" lengthAdjust="spacing">
                    VENDOR INSPECTION • QUALITY AUDIT •{" "}
                  </textPath>
                </text>
              </svg>
              <span className="vi-ck">✓</span>
            </div>
          </div>
        </div>
      </section>
      <section className="vi-sec" id="choose">
        <div className="vi-wrap vi-wc">
          <div className="vi-ph" role="img" aria-label="Inspector reviewing a production line" />
          <div>
            <div className="vi-sh">
              <h2>
                {"Why choose "}
                <em>Meridian?</em>
              </h2>
            </div>
            <ul className="vi-cl">
              <li>
                <div>
                  <h3>Certified third-party inspectors (ISO 17020-compliant).</h3>
                  <div className="vi-chips">
                    <span>ISO 17020</span>
                  </div>
                </div>
              </li>
              <li>
                <h3>In-depth reporting and photographic documentation.</h3>
              </li>
              <li>
                <div>
                  <h3>Coverage across manufacturing, construction, FMCG.</h3>
                  <div className="vi-chips">
                    <span>Manufacturing</span>
                    <span>Construction</span>
                    <span>FMCG</span>
                  </div>
                </div>
              </li>
              <li>
                <h3>Support in vendor selection and performance management.</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="vi-role" aria-label="Role of vendor inspection specialists">
        <div className="vi-wrap">
          <div className="vi-fr">
            <div className="vi-vf" aria-hidden="true" />
            <h2>Role of vendor inspection specialists</h2>
            <p>
              We serve as your extended compliance team — guarding quality at every point in the
              supply chain.
            </p>
          </div>
        </div>
      </section>
      <section className="vi-cta" id="contact">
        <div className="vi-wrap">
          <h2>{"Ready to audit & approve with confidence?"}</h2>
          <p className="vi-t">
            Work with us to strengthen your vendor and supplier quality systems.
          </p>
          <Link className="vi-btn or" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="vi-ct">
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
              <dd>Saudi Arabia · Bahrain · Canada · Pakistan</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
