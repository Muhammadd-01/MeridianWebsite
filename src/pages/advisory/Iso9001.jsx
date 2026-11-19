import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso9001() {
  const [statValue, setStatValue] = useState(0);
  useEffect(() => {
    let startTime = null;
    const duration = 1400;
    const target = 42;
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
  const principles = [
    {
      num: "01",
      title: "Customer satisfaction",
    },
    {
      num: "02",
      title: "Risk-based thinking",
    },
    {
      num: "03",
      title: "Process improvement",
    },
  ];
  const benefits = [
    {
      num: "01",
      title: "Build customer trust and market credibility.",
    },
    {
      num: "02",
      title: "Improve process efficiency and risk control.",
    },
    {
      num: "03",
      title: "Strengthen documentation and internal audits.",
    },
    {
      num: "04",
      title: "Open doors to global markets and supply chains.",
    },
    {
      num: "05",
      title: "Support continuous improvement and innovation.",
    },
  ];
  const processSteps = [
    {
      num: 1,
      step: "first step",
      title: "Current-state process & documentation review.",
    },
    {
      num: 2,
      step: "second step",
      title: "QMS design & implementation (policies, SOPs).",
    },
    {
      num: 3,
      step: "third step",
      title: "Internal auditor training + audit readiness.",
    },
    {
      num: 4,
      step: "fourth step",
      title: "Certification coordination and ongoing support.",
    },
  ];
  const outcomes = [
    "Streamlined, standardized operations.",
    "Better control over product/service quality.",
    "Enhanced internal and external audit readiness.",
    "Boosted stakeholder confidence.",
    "Improved employee accountability.",
  ];
  const whyChooseUs = [
    "IRCA-certified ISO 9001 Lead Auditors.",
    "Custom process mapping & risk analysis.",
    "Sector-specific documentation support.",
    "360° partnership—training, audit, and maintenance.",
  ];
  return (
    <div className="qms-page">
      <section className="qms-hero">
        <div className="qms-ghost" aria-hidden="true">
          9001
        </div>
        <div className="qms-hero-in">
          <div>
            <p className="qms-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" /"} <b>ISO 9001 – Quality Management Systems</b>
            </p>
            <h1>
              {"ISO 9001 – "}
              <span>Quality Management Systems.</span>
            </h1>
            <p className="qms-lead">
              Establish a culture of quality, continual improvement, and customer satisfaction.
            </p>
            <div className="qms-acts">
              <Link className="qms-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="qms-btn qms-btn-o" href="#approach">
                {"See our approach "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="qms-arch">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="ISO 9001 Quality Management"
              aria-hidden="true"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="qms-tg" aria-hidden="true">
              <span>Customer satisfaction</span>
              <span>Risk-based thinking</span>
              <span>Process improvement</span>
            </div>
          </div>
        </div>
      </section>
      <section className="qms-sec qms-wi" id="what">
        <div className="qms-wrap">
          <span className="qms-lab">The Standard</span>
          <h2>What is ISO 9001?</h2>
          <p className="qms-def">
            {"ISO 9001 is the "}
            <b>world’s leading QMS standard</b>, applicable across all industries—focusing on
            customer satisfaction, risk-based thinking, and process improvement.
          </p>
          <ul className="qms-pil">
            {principles.map((principle) => (
              <li key={principle.num} data-n={principle.num}>
                <b>{principle.title}</b>
              </li>
            ))}
          </ul>
          <figure className="qms-band">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="ISO 9001 quality management systems"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </figure>
        </div>
      </section>
      <section className="qms-sec qms-why" id="why">
        <div className="qms-wrap">
          <div className="qms-sh">
            <span className="qms-lab">Why It Matters</span>
            <h2>
              {"Why ISO 9001 "}
              <em>matters.</em>
            </h2>
          </div>
          <ol className="qms-cards">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span className="qms-n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
              </li>
            ))}
          </ol>
          <div className="qms-src">
            <div className="qms-nums">
              <div>
                <b>Over 1M</b>
                <span>ISO 9001 certified organizations</span>
              </div>
              <div>
                <b>{statValue}</b>
                <span>empirical studies in meta-analysis</span>
              </div>
            </div>
            <div>
              <span className="qms-tag">Source</span>
              <p>
                {"Over "}
                <b>1 million organizations worldwide</b>
                {" are ISO 9001 certified, and a comprehensive meta-analysis of "}
                <b>42 empirical studies</b>
                {
                  " shows that ISO 9001 certification significantly boosts financial performance—primarily through increased sales and improved process control."
                }
              </p>
              <a
                className="qms-ref"
                href="https://www.iso.org/news/2012/10/Ref1665.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the source ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="qms-sec" id="approach">
        <div className="qms-wrap qms-tl">
          <div className="qms-stick">
            <span className="qms-lab">Our Approach</span>
            <h2>
              {"Our 4-step ISO 9001 implementation "}
              <em>approach.</em>
            </h2>
          </div>
          <ol className="qms-steps">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="qms-nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="qms-sec qms-ben" id="benefits">
        <div className="qms-wrap">
          <div className="qms-sh">
            <span
              className="qms-lab"
              style={{
                color: "var(--qms-primrose)",
              }}
            >
              Outcomes
            </span>
            <h2>Key benefits.</h2>
          </div>
          <ul className="qms-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="qms-sec" id="choose">
        <div className="qms-wrap">
          <div className="qms-sh">
            <span className="qms-lab">Why Choose Meridian?</span>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <div className="qms-cg">
            <figure>
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Meridian management systems"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </figure>
            <ol>
              {whyChooseUs.map((whyChooseU, index) => (
                <li key={index}>{whyChooseU}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="qms-role" aria-label="Role of QMS consultants">
        <div className="qms-wrap">
          <h2>Role of QMS consultants</h2>
          <p>
            We bring structure, clarity, and performance to your operations—ensuring sustainable
            growth through quality.
          </p>
        </div>
      </section>
      <section className="qms-cta" id="contact">
        <div className="qms-l">
          <span className="qms-lab">Get Started</span>
          <h2>Ready to build a culture of quality?</h2>
          <p className="qms-t">To start your journey toward ISO 9001 certification.</p>
          <Link className="qms-btn qms-btn-dk" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="qms-r">
          <dl className="qms-ct">
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
