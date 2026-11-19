import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso17020() {
  const [statValue, setStatValue] = useState(0);
  useEffect(() => {
    let startTime = null;
    const duration = 1800;
    const target = 85;
    const tick = (now) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStatValue(Math.round(target * eased));
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
      title: "Build trust in inspection and testing services.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Standardize inspection processes and reporting.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h6M9 12h6M9 15h4" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Meet regulatory and industry-specific requirements.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Strengthen auditor independence and transparency.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Enable international recognition and market access.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
    },
  ];
  const processSteps = [
    {
      num: "01",
      step: "first step",
      title: "Readiness Audit & Gap Assessment.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img1.jpg",
    },
    {
      num: "02",
      step: "second step",
      title: "Internal Evaluation & Staff Training.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img2.jpg",
    },
    {
      num: "03",
      step: "third step",
      title: "Documentation of Policies, SOPs & Competence.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img3.jpg",
    },
    {
      num: "04",
      step: "fourth step",
      title: "Accreditation Support and Compliance Review.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img4.jpg",
    },
  ];
  const outcomes = [
    "Recognition as a credible inspection authority.",
    "Increased credibility and contract eligibility.",
    "Faster client approvals and regulatory clearance.",
    "Harmonized processes across multiple locations.",
    "Alignment with ISO 9001 and ISO 17025 systems.",
  ];
  const whyChooseUs = [
    "Experts in technical audits and inspections.",
    "Full support from documentation to accreditation.",
    "Custom manuals, forms, and competence matrices.",
    "Sector experience across oil & gas, engineering, and labs.",
  ];
  return (
    <div className="ibr-page">
      <section className="ibr-hero">
        <div className="ibr-bgimg" aria-hidden="true" />
        <div className="ibr-bgovl" aria-hidden="true" />
        <div className="ibr-rad" aria-hidden="true" />
        <div className="ibr-hero-in">
          <div className="ibr-shield" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
              <circle cx="12" cy="13" r="2.5" />
              <path d="M12 10.5v-2M9.8 14.2l-1.4 1.4M14.2 14.2l1.4 1.4" />
            </svg>
          </div>
          <p className="ibr-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services">Services</Link>
            {" /"} <Link to="/services/advisory">Advisory</Link>
            {" /"} <b>ISO 17020 – Inspection Body Requirements</b>
          </p>
          <h1>
            {"ISO 17020 – "}
            <span>Inspection Body Requirements.</span>
          </h1>
          <p className="ibr-lead">
            Ensure technical competence and integrity for third-party inspections and assessments.
          </p>
          <div className="ibr-acts">
            <Link className="ibr-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="ibr-btn ibr-btn-o" href="#process">
              {"See our process "}
              <i>↓</i>
            </a>
          </div>
        </div>
      </section>
      <section className="ibr-sec" id="what">
        <div className="ibr-wrap ibr-wi">
          <div className="ibr-l">
            <span className="ibr-eyebrow">The standard</span>
            <h2>What Is ISO 17020?</h2>
          </div>
          <div>
            <p className="ibr-def">
              ISO 17020 outlines <b>criteria for impartial and competent inspection bodies</b>
              {" across sectors like engineering, safety, and manufacturing."}
            </p>
            <div className="ibr-vf">
              <i />
              <u />
              <div className="ibr-im">
                <img
                  src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
                  alt="ISO 17020 inspection body requirements"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ibr-sec ibr-why" id="why">
        <div className="ibr-wrap">
          <div className="ibr-sh">
            <span className="ibr-eyebrow">Why it matters</span>
            <h2>
              {"Why ISO 17020 "}
              <em>matters.</em>
            </h2>
          </div>
          <ol className="ibr-gr">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="ibr-n">{benefit.num}</span>
                <span className="ibr-ic" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3>{benefit.title}</h3>
              </li>
            ))}
            <li className="ibr-src" id="source">
              <span className="ibr-tag">Source</span>
              <div className="ibr-row">
                <div className="ibr-dn">
                  <svg viewBox="0 0 120 120" aria-hidden="true">
                    <circle className="ibr-tr" cx="60" cy="60" r="52" />
                    <circle className="ibr-pg" cx="60" cy="60" r="52" />
                  </svg>
                  <b>{statValue}%</b>
                </div>
                <div>
                  <p>
                    <b>Accredited inspection bodies certified to ISO 17020</b>
                    {
                      " consistently demonstrate impartiality, technical competence, and operational reliability."
                    }
                  </p>
                  <a
                    className="ibr-ref"
                    href="https://medium.com/@ralphamartin/what-is-iso-17020-understanding-inspection-body-accreditation-dc8bb6fd4f79"
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
      <section className="ibr-sec" id="process">
        <div className="ibr-wrap">
          <div className="ibr-sh c">
            <span className="ibr-eyebrow">Our approach</span>
            <h2>
              {"Our 4-step accreditation "}
              <em>journey.</em>
            </h2>
          </div>
          <ol className="ibr-pr">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="ibr-ph">
                  <img
                    src={processStep.img}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="ibr-tx">
                  <span className="ibr-big" aria-hidden="true">
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
      <section className="ibr-sec ibr-ben" id="benefits">
        <div className="ibr-wrap">
          <div className="ibr-sh c">
            <span
              className="ibr-eyebrow"
              style={{
                color: "var(--ibr-primrose)",
              }}
            >
              What you gain
            </span>
            <h2>Key benefits.</h2>
          </div>
          <div className="ibr-term">
            <div className="ibr-tb" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>iso17020 — inspection body checklist</span>
            </div>
            <ul className="ibr-chk">
              {outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="ibr-sec ibr-ch" id="choose">
        <div className="ibr-bgp" aria-hidden="true" />
        <div className="ibr-wrap">
          <div className="ibr-sh">
            <span
              className="ibr-eyebrow"
              style={{
                color: "var(--ibr-primrose)",
              }}
            >
              Accreditation Partners
            </span>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ol className="ibr-cs">
            {whyChooseUs.map((whyChooseU, index) => (
              <li key={index}>{whyChooseU}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="ibr-sec ibr-role" aria-label="Role of ISO 17020 Consultants">
        <div className="ibr-wrap ibr-rg">
          <div className="ibr-lock" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <div>
            <h2>Role of ISO 17020 Consultants</h2>
            <p>
              We help build inspection systems that meet global expectations for competence and
              impartiality.
            </p>
          </div>
        </div>
      </section>
      <section className="ibr-cta" id="contact">
        <div className="ibr-wrap">
          <div className="ibr-card">
            <div>
              <span
                className="ibr-eyebrow"
                style={{
                  color: "var(--ibr-primrose)",
                }}
              >
                Get Accredited
              </span>
              <h2>Ready to get accredited?</h2>
              <p className="ibr-t">To ensure your inspection services meet ISO 17020 standards.</p>
            </div>
            <Link className="ibr-btn ibr-btn-or" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="ibr-ct">
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
