import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso27001() {
  const [statValue, setStatValue] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISO 27001 – Information Security Management | MEQMP";
    let startTime = null;
    const duration = 1800;
    const tick = (now) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStatValue(Math.round(96 * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    const frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);
  const benefits = [
    {
      num: "01",
      title: "Support digital transformation securely.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Enhance IT governance and risk management.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Strengthen trust with clients and stakeholders.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.4" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 14.2c3 0 5.5 2.3 5.5 5.3" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Safeguard against data breaches and cyberattacks.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Ensure legal and regulatory compliance (GDPR, HIPAA, etc.).",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
          <path d="M14 3v5h5M9 14l2 2 4-4" />
        </svg>
      ),
    },
  ];
  const processSteps = [
    {
      num: "01",
      step: "first step",
      title: "Risk Assessment & Asset Inventory.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img1.jpg",
    },
    {
      num: "02",
      step: "second step",
      title: "Internal Audit & Awareness Training.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img2.jpg",
    },
    {
      num: "03",
      step: "third step",
      title: "Certification Audit & Continual Improvement.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img3.jpg",
    },
    {
      num: "04",
      step: "fourth step",
      title: "Policy Development & Access Control Setup.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img4.jpg",
    },
  ];
  const outcomes = [
    "Reduced data breach risk.",
    "Increased client and partner trust.",
    "Improved IT and data governance.",
    "Stronger reputation and competitive edge.",
    "Faster compliance with data protection laws.",
  ];
  const whyChooseUs = [
    "Industry-specific ISMS solutions.",
    "ISO 27001 Certified Lead Auditors.",
    "Integration with cloud and physical security.",
    "End-to-end support from gap assessment to certification.",
  ];
  return (
    <div className="ism-page">
      <section className="ism-hero">
        <div className="ism-rad" aria-hidden="true" />
        <div className="ism-hero-in">
          <div className="ism-shield" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
              <rect x="9" y="10.5" width="6" height="5" rx="1" />
              <path d="M10 10.5V9a2 2 0 014 0v1.5" />
            </svg>
          </div>
          <p className="ism-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>ISO 27001 – Information Security</b>
          </p>
          <h1>
            {"ISO 27001 – "}
            <span>Information Security Management</span>
          </h1>
          <p className="ism-lead">
            Protect your data, build trust, and stay compliant in a digital-first world.
          </p>
          <div className="ism-acts">
            <Link className="ism-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="ism-btn ism-btn-o" href="#process">
              {"See our process "}
              <i>↓</i>
            </a>
          </div>
        </div>
      </section>
      <section className="ism-sec" id="what">
        <div className="ism-wrap ism-wi">
          <div className="ism-l">
            <span className="ism-eyebrow">The standard</span>
            <h2>What Is ISO 27001?</h2>
          </div>
          <div>
            <p className="ism-def">
              {"ISO 27001 is the "}
              <b>leading global standard for Information Security Management Systems (ISMS)</b>,
              helping organizations protect sensitive information.
            </p>
            <div className="ism-vf">
              <i />
              <u />
              <div className="im">
                <img
                  src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
                  alt="ISO 27001 information security management"
                  loading="lazy"
                  onError={(event) => {
                    event.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ism-sec ism-why" id="why">
        <div className="ism-wrap">
          <div className="ism-sh">
            <span className="ism-eyebrow">Why it matters</span>
            <h2>Why ISO 27001 Matters?</h2>
          </div>
          <ol className="ism-gr">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="n">{benefit.num}</span>
                <span className="ic" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3>{benefit.title}</h3>
              </li>
            ))}
            <li className="ism-src-card" id="source">
              <span className="ism-tag">Source</span>
              <div className="row">
                <div className="ism-dn">
                  <svg viewBox="0 0 120 120" aria-hidden="true">
                    <circle className="ism-tr" cx="60" cy="60" r="52" />
                    <circle className="ism-pg" cx="60" cy="60" r="52" />
                  </svg>
                  <b>{statValue}%</b>
                </div>
                <div>
                  <p>
                    <b>ISO 27001 is recognized by 96% of organizations</b>
                    {" as essential for enhancing cybersecurity defenses."}
                  </p>
                  <a
                    className="ref"
                    href="https://www.helpnetsecurity.com/2015/02/23/96-say-iso-27001-is-important-for-improving-security-defenses/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the source ↗
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="ism-sec" id="process">
        <div className="ism-wrap">
          <div className="ism-sh c">
            <span className="ism-eyebrow">Our approach</span>
            <h2>Our 4-Step ISMS Implementation Process</h2>
          </div>
          <ol className="ism-pr">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="ph">
                  <img
                    src={processStep.img}
                    alt={processStep.title}
                    loading="lazy"
                    onError={(event) => {
                      event.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="tx">
                  <span className="big" aria-hidden="true">
                    {processStep.num}
                  </span>
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="ism-sec ism-ben" id="benefits">
        <div className="ism-wrap">
          <div className="ism-sh c">
            <span
              className="ism-eyebrow"
              style={{
                color: "var(--ism-primrose)",
              }}
            >
              What you gain
            </span>
            <h2>Key Benefits</h2>
          </div>
          <div className="ism-term">
            <div className="tb" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>iso27001 — security checklist</span>
            </div>
            <ul className="ism-chk" id="chk">
              {outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="ism-sec ism-ch" id="choose">
        <div className="bgp" aria-hidden="true" />
        <div className="ism-wrap">
          <div className="ism-sh">
            <span
              className="ism-eyebrow"
              style={{
                color: "var(--ism-primrose)",
              }}
            >
              Proven Reliability
            </span>
            <h2>Why Choose Meridian?</h2>
          </div>
          <ol className="ism-cs">
            {whyChooseUs.map((whyChooseU, index) => (
              <li key={index}>{whyChooseU}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="ism-sec ism-role" aria-label="Role of Information Security Consultants">
        <div className="ism-wrap ism-rg">
          <div className="ism-lock" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 018 0v3" />
              <circle cx="12" cy="16" r="1.2" />
            </svg>
          </div>
          <div>
            <h2>Role of Information Security Consultants</h2>
            <p>We secure your digital future—aligning technology, people, and policy.</p>
          </div>
        </div>
      </section>
      <section className="ism-cta" id="contact">
        <div className="ism-wrap">
          <div className="card">
            <div>
              <h2>Ready to Strengthen Your Cyber Defenses?</h2>
              <p className="t">
                Take the first step toward ISO 27001 certification with confidence.
              </p>
            </div>
            <Link className="ism-btn ism-btn-or" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="ism-ct">
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
