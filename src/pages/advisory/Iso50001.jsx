import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso50001() {
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISO 50001 – Energy Management Systems | MEQMP";
    let startTime = null;
    const duration = 1600;
    const tick = (now) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setFirstStat(Math.round(4 * eased));
      setSecondStat((3.4 * eased).toFixed(1));
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
      title: "Boost competitiveness through cost savings.",
    },
    {
      num: "02",
      title: "Reduce energy consumption and utility costs.",
    },
    {
      num: "03",
      title: "Lower carbon emissions and environmental footprint.",
    },
    {
      num: "04",
      title: "Comply with global sustainability and ESG frameworks.",
    },
    {
      num: "05",
      title: "Improve operational efficiency and system performance.",
    },
  ];
  const processSteps = [
    {
      num: "1",
      step: "first step",
      title: "System Planning and Objective Setting.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img1.jpg",
    },
    {
      num: "2",
      step: "second step",
      title: "Internal Audits and Certification Support.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img2.jpg",
    },
    {
      num: "3",
      step: "third step",
      title: "Operational Control & Employee Engagement.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img3.jpg",
    },
    {
      num: "4",
      step: "fourth step",
      title: "Energy Baseline & Performance Assessment.",
      img: "https://demo2wpopal.b-cdn.net/rebuilto/wp-content/uploads/2024/03/h2_time-img4.jpg",
    },
  ];
  const outcomes = [
    "Long-term cost reductions.",
    "Reduced emissions and regulatory risk.",
    "Better alignment with sustainability goals.",
    "Transparent reporting for ESG and stakeholders.",
    "Enhanced equipment performance and maintenance planning.",
  ];
  const whyChooseUs = [
    "Certified ISO 50001 energy consultants.",
    "Smart metering and monitoring integration.",
    "Post-certification energy optimization support.",
    "Proven results across manufacturing, logistics, and hospitality.",
  ];
  return (
    <div className="enm-page">
      <section className="enm-hero">
        <div className="ghost" aria-hidden="true">
          50001
        </div>
        <div className="enm-hero-in">
          <div>
            <p className="enm-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>ISO 50001 – Energy Management</b>
            </p>
            <h1>
              {"ISO 50001 – "}
              <span>Energy Management Systems</span>
            </h1>
            <p className="enm-lead">
              Optimize energy use, cut costs, and reduce environmental impact with a globally
              trusted framework.
            </p>
            <div className="enm-acts">
              <Link className="enm-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="enm-btn enm-btn-o" href="#process">
                {"See our process "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="enm-frame">
            <div className="in">
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
                alt="ISO 50001 energy management"
                onError={(event) => {
                  event.target.onerror = null;
                  event.target.src =
                    "https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png";
                }}
              />
            </div>
            <div className="badge" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
              <div>
                <b>ISO 50001</b>
                <span>Energy management</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enm-sec enm-wi" id="what">
        <div className="enm-wrap">
          <span className="enm-eyebrow">The Standard</span>
          <h2>What Is ISO 50001?</h2>
          <p className="enm-def">
            {"ISO 50001 provides a "}
            <b>structured approach to improving energy performance and efficiency</b>
            {" across all operations."}
          </p>
          <figure className="enm-band">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="ISO 50001 energy management systems"
              loading="lazy"
              onError={(event) => {
                event.target.style.display = "none";
              }}
            />
          </figure>
        </div>
      </section>
      <section className="enm-sec enm-why" id="why">
        <div className="enm-wrap">
          <div className="enm-sh">
            <span className="enm-eyebrow">Why it matters</span>
            <h2>Why ISO 50001 Matters?</h2>
          </div>
          <ol className="enm-bn">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="enm-sec enm-src" id="source">
        <div className="enm-wrap enm-sg">
          <div>
            <span className="enm-eyebrow">Source</span>
            <p className="q">
              {"ISO 50001-certified facilities achieve "}
              <b>over 4% annual energy savings</b>, maintaining improvements of around <b>3.4%</b>
              {" even 12 years post-implementation."}
            </p>
            <a
              className="l"
              href="https://www.sciencedirect.com/science/article/pii/S2213138823002734"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the source ↗
            </a>
          </div>
          <ul className="enm-bars">
            <li>
              <div className="t">
                <span>Annual energy savings</span>
                <b>{firstStat}%+</b>
              </div>
              <div className="tr">
                <span
                  className="f"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </li>
            <li>
              <div className="t">
                <span>Savings maintained 12 years post-implementation</span>
                <b>{secondStat}%</b>
              </div>
              <div className="tr">
                <span
                  className="f"
                  style={{
                    width: "85%",
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="enm-sec" id="process">
        <div className="enm-wrap">
          <div className="enm-sh c">
            <span className="enm-eyebrow">Our approach</span>
            <h2>Our 4-Step Energy Management Process</h2>
          </div>
          <ol className="enm-pr">
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
                <div className="nd">{processStep.num}</div>
                <div className="tx">
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="enm-sec enm-ben" id="benefits">
        <div className="enm-wrap">
          <div className="enm-sh c">
            <span className="enm-eyebrow">What you gain</span>
            <h2>Key Benefits</h2>
          </div>
          <ul className="enm-pl">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="enm-sec enm-ch" id="choose">
        <div className="enm-wrap">
          <div className="enm-sh">
            <span
              className="enm-eyebrow"
              style={{
                color: "var(--enm-primrose)",
              }}
            >
              Partner with Leaders
            </span>
            <h2>Why Choose Meridian?</h2>
          </div>
          <div className="enm-cg">
            <figure>
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Meridian Energy Advisory"
                loading="lazy"
                onError={(event) => {
                  event.target.style.display = "none";
                }}
              />
            </figure>
            <ol className="enm-cs">
              {whyChooseUs.map((whyChooseU, index) => (
                <li key={index}>{whyChooseU}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="enm-role" aria-label="Role of Energy Management Consultants">
        <div className="enm-wrap">
          <div className="mk" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
            </svg>
          </div>
          <h2>Role of Energy Management Consultants</h2>
          <p>
            We turn your energy consumption into a strategic advantage—combining analytics with
            practical process change.
          </p>
        </div>
      </section>
      <section className="enm-cta" id="contact">
        <div className="enm-wrap">
          <div>
            <h2>Ready to Optimize Energy and Save Costs?</h2>
            <p className="t">Unlock the power of ISO 50001 with Meridian today.</p>
            <Link className="enm-btn enm-btn-dk" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="enm-ct">
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
