import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const focusAreas = ["Hazards", "Systems", "Drills", "Compliance"];
const services = ["Fire risk assessment", "Prevention plans", "NFPA / ISO standards"];
const benefits = [
  {
    num: "01",
    title: "Prevent fire hazards and accidents.",
  },
  {
    num: "02",
    title: "Comply with fire code regulations (NFPA, Civil Defense, etc.).",
  },
  {
    num: "03",
    title: "Reduce insurance risk and liability.",
  },
  {
    num: "04",
    title: "Improve emergency response and evacuation planning.",
  },
  {
    num: "05",
    title: "Boost confidence for employees and clients.",
    isWide: true,
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Fire hazard identification",
    desc: "Hot zones, ignition risks, and fuel storage analysis.",
  },
  {
    step: "Second step",
    num: "2",
    title: "System & equipment evaluation",
    desc: "Alarms, extinguishers, hydrants, and automated sprinklers.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Fire drill & evacuation planning",
    desc: "Drills, warden assignments, and clear illuminated exit routes.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Reporting & compliance",
    desc: "Full alignment with Civil Defense and local authority requirements.",
  },
];
const outcomes = [
  "Reduced fire risk and liability.",
  "Faster emergency response.",
  "Better insurance terms.",
  "Compliant with audits and certifications.",
  "Peace of mind for stakeholders.",
];
const whyChooseUs = [
  {
    num: "01",
    title: "NFPA-trained specialists",
    desc: "Fire safety specialists with NFPA and international life safety training.",
  },
  {
    num: "02",
    title: "Detailed site audits",
    desc: "Detailed site audits, hazard mapping, and compliance gap analysis.",
  },
  {
    num: "03",
    title: "Drills & documentation",
    desc: "Hands-on fire drills, evacuation team training, and regulatory documentation support.",
  },
  {
    num: "04",
    title: "Tailored to your site",
    desc: "Custom safety engineering for hotels, hospitals, industrial factories, and high-rise offices.",
  },
];
export default function FireSafety() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
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
            setFirstStat(Math.round(83 * eased));
            setSecondStat(Math.round(69 * eased));
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
    <div className="fs-page">
      <section className="fs-hero">
        <div className="fs-wrap">
          <div>
            <p className="fs-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>Fire Safety Systems</b>
            </p>
            <h1>
              {"Fire Safety "}
              <em>Systems</em>
            </h1>
            <p className="fs-lead">
              Protect your people, property, and business continuity with expert-led fire safety
              planning and audits.
            </p>
            <div className="fs-acts">
              <Link className="fs-btn dk" to="/contact">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="fs-btn ol" href="#process">
                {"See our approach "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="fs-hv">
            <figure className="ph">
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
                alt="Fire safety consulting and system compliance"
              />
            </figure>
            <div className="fs-chip" aria-hidden="true">
              <small>Our 4-step focus</small>
              {focusAreas.map((focusArea, index) => (
                <span key={index}>{focusArea}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="fs-band" id="what">
        <div className="fs-wrap">
          <h2>What is fire safety consulting?</h2>
          <p className="def">
            {"We "}
            <b>assess fire risks</b>
            {", develop "}
            <b>fire prevention plans</b>
            {", and support you in meeting "}
            <b>national fire codes</b>
            {" and "}
            <b>NFPA/ISO standards</b>.
          </p>
          <div className="chips">
            {services.map((service, index) => (
              <span key={index}>{service}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="fs-sec fs-why" id="why">
        <div className="fs-wrap">
          <div className="fs-sh">
            <div
              className="fs-crumb"
              style={{
                color: "#000",
                marginBottom: 12,
              }}
            >
              <b>{"Life & Asset Protection"}</b>
            </div>
            <h2>
              {"Why it "}
              <em>matters</em>
            </h2>
          </div>
          <div className="fs-bg">
            {benefits.map((benefit) => (
              <div key={benefit.num} className={`fs-bc ${benefit.isWide ? "w2" : ""}`}>
                <span className="n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
              </div>
            ))}
            <aside className="fs-stat" ref={statsRef}>
              <div className="fs-nums">
                <div>
                  <b>{statsVisible ? firstStat : 0}%</b>
                  <span>lower death rate per fire</span>
                </div>
                <div>
                  <b>{statsVisible ? secondStat : 0}%</b>
                  <span>less property damage</span>
                </div>
              </div>
              <div>
                <p>
                  {"Buildings with "}
                  <b>functioning sprinkler systems</b>
                  {" have an "}
                  <b>83% lower death rate</b>
                  {" per fire, and property damage is reduced by approximately "}
                  <b>69%</b>, according to an NFPA study.
                </p>
                <cite>
                  Source:{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Fire_Sprinkler_Incentive_Act"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NFPA, U.S. Experience with Sprinklers
                  </a>
                </cite>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="fs-sec" id="process">
        <div className="fs-wrap">
          <div className="fs-sh c">
            <div
              className="fs-crumb"
              style={{
                color: "#000",
                marginBottom: 12,
              }}
            >
              <b>Systematic Audit</b>
            </div>
            <h2>
              {"Our 4-step fire safety "}
              <em>approach</em>
            </h2>
          </div>
          <ol className="fs-pr">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="fs-sec fs-ben" id="benefits">
        <div className="fs-wrap fs-bw">
          <div>
            <div
              className="fs-crumb"
              style={{
                color: "var(--fs-primrose)",
                marginBottom: 12,
              }}
            >
              <b>Safety Assured</b>
            </div>
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="fs-chk">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fs-sec fs-ch" id="choose">
        <div className="fs-wrap">
          <div className="fs-sh c">
            <div
              className="fs-crumb"
              style={{
                color: "#000",
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
          <ul className="fs-cg">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fs-role" aria-label="Role of fire safety consultants">
        <div className="fs-wrap">
          <h2>Role of Fire Safety Consultants</h2>
          <p>
            We design proactive safety systems and equip your teams to respond confidently and
            effectively during emergencies.
          </p>
        </div>
      </section>
      <section className="fs-cta" id="contact">
        <div className="fs-wrap">
          <div className="fs-cbox">
            <div className="l">
              <h2>
                {"Ready to enhance "}
                <em>fire safety?</em>
              </h2>
              <p className="t">
                Protect your facility and people with certified advisory and engineering support.
              </p>
              <Link className="fs-btn dk" to="/contact">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
            </div>
            <div className="r">
              <dl className="fs-ct">
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
          </div>
        </div>
      </section>
    </div>
  );
}
