import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso20121() {
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  const [thirdStat, setThirdStat] = useState(0);
  useEffect(() => {
    let startTime = null;
    const duration = 1600;
    const tick = (now) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setFirstStat(Math.round(31 * eased));
      setSecondStat(Math.round(29 * eased));
      setThirdStat(Math.round(28 * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    const frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);
  const focusAreas = [
    "Training & Supplier Engagement",
    "Sustainable Practices Integration",
    "Event Certification and Post-Evaluation",
    "Performance Tracking",
    "Improved brand reputation",
    "Greener, more inclusive events",
    "Cost savings from smarter planning",
    "Aligned with global SDGs and ESG goals",
    "Stronger sponsor and stakeholder appeal",
  ];
  const benefits = [
    {
      num: "01",
      title: "Improve stakeholder engagement.",
    },
    {
      num: "02",
      title: "Build a reputation as a responsible brand.",
    },
    {
      num: "03",
      title: "Reduce environmental impact and waste.",
    },
    {
      num: "04",
      title: "Enhance social and economic value of events.",
    },
    {
      num: "05",
      title: "Comply with venue and sponsor requirements.",
    },
  ];
  const processSteps = [
    {
      num: "1",
      step: "first step",
      title: "Training & Supplier Engagement.",
      desc: "",
    },
    {
      num: "2",
      step: "second step",
      title: "Sustainable Practices Integration.",
      desc: "",
    },
    {
      num: "3",
      step: "third step",
      title: "Event Certification and Post-Evaluation.",
      desc: "",
    },
    {
      num: "4",
      step: "fourth step",
      title: "Performance Tracking",
      desc: "Event Planning Audit & Sustainability Gap Review.",
    },
  ];
  const outcomes = [
    "Improved brand reputation.",
    "Greener, more inclusive events.",
    "Cost savings from smarter planning.",
    "Aligned with global SDGs and ESG goals.",
    "Stronger sponsor and stakeholder appeal.",
  ];
  const whyChooseUs = [
    "Practical tools for on-ground delivery.",
    "End-to-end sustainability integration.",
    "Compliance with international venue and sponsor standards.",
    "Experience with conferences, expos, and corporate events.",
  ];
  return (
    <div className="sem-page">
      <section className="sem-hero">
        <div className="sem-hbg" aria-hidden="true">
          <span className="sem-o sem-o1" />
          <span className="sem-o sem-o2" />
          <span className="sem-o sem-o3" />
        </div>
        <div className="sem-wrap sem-hg">
          <div>
            <p className="sem-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" /"} <b>ISO 20121 – Sustainable Event Management</b>
            </p>
            <h1>
              {"ISO 20121 – "}
              <em>Sustainable Event Management.</em>
            </h1>
            <p className="sem-lead">
              Deliver events that leave a lasting impression—without leaving a negative impact.
            </p>
            <div className="sem-acts">
              <Link className="sem-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="sem-btn sem-btn-o" href="#process">
                {"See our roadmap "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="sem-hv" aria-hidden="true">
            <div className="sem-hc sem-hc1">
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="sem-hc sem-hc2">
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="sem-spin">
              <svg viewBox="0 0 100 100">
                <path
                  id="semCp"
                  fill="none"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
                <text>
                  <textPath href="#semCp">ISO 20121 • SUSTAINABLE EVENT MANAGEMENT • </textPath>
                </text>
              </svg>
              <b>20121</b>
            </div>
          </div>
        </div>
        <div className="sem-tick" aria-hidden="true">
          <div className="sem-trk">
            <div className="sem-gp">
              {focusAreas.map((focusArea, index) => (
                <span key={index}>{focusArea}</span>
              ))}
            </div>
            <div className="sem-gp">
              {focusAreas.map((focusArea, index) => (
                <span key={index}>{focusArea}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sem-sec" id="what">
        <div className="sem-wrap sem-wi">
          <div className="sem-wl">
            <span className="sem-eyebrow">The standard</span>
            <h2>What Is ISO 20121?</h2>
          </div>
          <p className="sem-def">
            {"ISO 20121 is a "}
            <b>management system standard for sustainable events</b>—ensuring responsible planning,
            delivery, and post-event processes.
          </p>
        </div>
      </section>
      <section className="sem-sec sem-why" id="why">
        <div className="sem-wrap">
          <div className="sem-sh c">
            <span className="sem-eyebrow">Why it matters</span>
            <h2>
              {"Why ISO 20121 "}
              <em>matters.</em>
            </h2>
          </div>
          <ol className="sem-bn">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="sem-n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sem-sec sem-src" id="source">
        <div className="sem-wrap sem-sg">
          <div>
            <span className="sem-eyebrow">Source</span>
            <p className="sem-q">
              {"An ISO 20121-certified venue achieved a "}
              <b>31% reduction in electricity usage</b>, <b>29% less gas</b>
              {", and "}
              <b>28% lower water consumption</b>
              {" after implementing the standard."}
            </p>
            <a
              className="sem-l"
              href="https://www.iso.org/news/2013/01/Ref1690.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the source ↗
            </a>
          </div>
          <ul className="sem-bars">
            <li>
              <div className="sem-t">
                <span>Electricity usage</span>
                <b>{firstStat}%</b>
              </div>
              <div className="sem-tr">
                <span
                  className="sem-f"
                  style={{
                    width: `${firstStat}%`,
                  }}
                />
              </div>
            </li>
            <li>
              <div className="sem-t">
                <span>Gas</span>
                <b>{secondStat}%</b>
              </div>
              <div className="sem-tr">
                <span
                  className="sem-f"
                  style={{
                    width: `${secondStat}%`,
                  }}
                />
              </div>
            </li>
            <li>
              <div className="sem-t">
                <span>Water consumption</span>
                <b>{thirdStat}%</b>
              </div>
              <div className="sem-tr">
                <span
                  className="sem-f"
                  style={{
                    width: `${thirdStat}%`,
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="sem-sec" id="process">
        <div className="sem-wrap">
          <div className="sem-sh c">
            <span className="sem-eyebrow">Our approach</span>
            <h2>
              {"Our 4-step sustainable events "}
              <em>roadmap.</em>
            </h2>
          </div>
          <ol className="sem-rm">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="sem-nd">{processStep.num}</div>
                <div className="sem-cd">
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  {processStep.desc && <p>{processStep.desc}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sem-sec sem-ben" id="benefits">
        <div className="sem-wrap">
          <div className="sem-sh c">
            <span
              className="sem-eyebrow"
              style={{
                color: "var(--sem-rust)",
              }}
            >
              What you gain
            </span>
            <h2>Key benefits.</h2>
          </div>
          <ul className="sem-pl">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="sem-sec sem-ch" id="choose">
        <div className="sem-wrap">
          <div className="sem-sh">
            <span
              className="sem-eyebrow"
              style={{
                color: "var(--sem-primrose)",
              }}
            >
              Event Sustainability Leaders
            </span>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <div className="sem-cg">
            <ol className="sem-cs">
              {whyChooseUs.map((whyChooseU, index) => (
                <li key={index}>{whyChooseU}</li>
              ))}
            </ol>
            <figure>
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Meridian Sustainable Event Management"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="sem-sec sem-role" aria-label="Role of Sustainable Event Consultants">
        <div className="sem-wrap">
          <span className="sem-qm" aria-hidden="true">
            “
          </span>
          <h2>Role of Sustainable Event Consultants</h2>
          <p>
            We guide you from planning to execution—ensuring every step is efficient, inclusive, and
            environmentally responsible.
          </p>
        </div>
      </section>
      <section className="sem-cta" id="contact">
        <div className="sem-wrap">
          <div>
            <span className="sem-eyebrow">Start Planning</span>
            <h2>Ready to Host Impactful, Sustainable Events?</h2>
            <p className="sem-t">To create events that inspire and endure.</p>
            <Link className="sem-btn sem-btn-dk" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="sem-ct">
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
