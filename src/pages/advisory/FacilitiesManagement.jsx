import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const focusAreas = ["Asset performance", "Energy use", "Safety", "Occupant satisfaction"];
const benefits = [
  {
    num: "01",
    title: "Ensure safety, comfort, and productivity for occupants.",
    desc: "Reliable systems, clean and well-maintained spaces, and clear safety procedures create environments where people feel secure and can do their best work.",
  },
  {
    num: "02",
    title: "Lower energy and maintenance costs.",
    desc: "Planned maintenance, performance monitoring, and smarter energy use cut waste and prevent expensive breakdowns before they happen.",
  },
  {
    num: "03",
    title: "Improve building lifecycle and asset value.",
    desc: "Looking after equipment and building fabric through its whole life extends service years and keeps your property attractive and valuable.",
  },
  {
    num: "04",
    title: "Align with ISO 41001 and sustainability targets.",
    desc: "A structured facility management system gives you a recognized framework and measurable progress toward your energy, carbon, and sustainability goals.",
  },
  {
    num: "05",
    title: "Maintain regulatory compliance with zero disruption.",
    desc: "Inspections, records, and corrective actions are planned around your operations, so you stay compliant without interrupting daily business.",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Facility assessment",
    desc: "Evaluate current FM performance, risks, and system gaps across assets.",
  },
  {
    step: "Second step",
    num: "2",
    title: "Strategy design (ISO 41001 aligned)",
    desc: "Build customized FM frameworks tailored to your operational environment.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Implementation & monitoring",
    desc: "Deploy systems, SOPs, and technology solutions for sustained efficiency.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Training & performance review",
    desc: "Build internal capability and review results using objective facility KPIs.",
  },
];
const outcomes = [
  "Safer, smarter building operations.",
  "Reduced energy and maintenance costs.",
  "Extended asset life and value.",
  "Regulatory and certification readiness.",
  "Smoother, more sustainable daily operations.",
];
const whyChooseUs = [
  {
    num: "01",
    title: "Cross-functional know-how",
    desc: "Engineering, safety, sustainability, and user experience combined.",
  },
  {
    num: "02",
    title: "Data-driven monitoring",
    desc: "We set up the tools and dashboards to track FM performance and ROI.",
  },
  {
    num: "03",
    title: "Full lifecycle support",
    desc: "From initial startup to continuous optimization and beyond, we stay with you.",
  },
];
export default function FacilitiesManagement() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [percentStat, setPercentStat] = useState(0);
  const [millionsStat, setMillionsStat] = useState(0);
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
            setPercentStat(Math.round(22 * eased));
            setMillionsStat(parseFloat((15.2 * eased).toFixed(1)));
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
    <div className="fm-page">
      <section className="fm-hero">
        <img
          className="fm-hero-img"
          src={
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          }
          alt="Modern commercial building architecture"
          aria-hidden="true"
        />
        <div className="fm-hero-shade" aria-hidden="true" />
        <div className="fm-hero-txt">
          <p className="fm-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>Business Facilities Management</b>
          </p>
          <h1>
            {"Business "}
            <em>Facilities Management</em>
          </h1>
          <p className="fm-lead">
            Optimize facility performance while ensuring safety, sustainability, and regulatory
            compliance.
          </p>
          <div className="fm-acts">
            <Link className="fm-btn" to="/contact">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="fm-btn o" href="#process">
              {"See our process "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="fm-fmc" aria-hidden="true">
          <small>Integrated Focus</small>
          {focusAreas.map((focusArea, index) => (
            <span key={index}>{focusArea}</span>
          ))}
        </div>
      </section>
      <section className="fm-sec" id="what">
        <div className="fm-wrap fm-wi">
          <div>
            <div
              className="fm-crumb"
              style={{
                color: "#000",
                marginBottom: 12,
              }}
            >
              <b>Integrated FM</b>
            </div>
            <h2>
              {"What is "}
              <em>business facilities management?</em>
            </h2>
            <p className="fm-def">
              {
                "Facilities management is about more than maintenance. We help you design, implement, and improve integrated strategies for "
              }
              <b>asset performance</b>
              {", "}
              <b>energy use</b>
              {", "}
              <b>safety</b>
              {", and "}
              <b>occupant satisfaction</b>.
            </p>
            <div className="fm-chips">
              {focusAreas.map((focusArea, index) => (
                <span key={index}>{focusArea}</span>
              ))}
            </div>
          </div>
          <figure className="fm-ph">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="Facilities management and workplace operations"
              loading="lazy"
            />
            <span className="tag">Buildings · Assets · People</span>
          </figure>
        </div>
      </section>
      <section className="fm-sec fm-why" id="why">
        <div className="fm-wrap">
          <div className="fm-wb">
            <img
              className="fm-wb-img"
              src={
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
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
              Five ways well-run facilities protect your people, your budget, and the value of your
              buildings.
            </p>
          </div>
          <ol className="fm-rows">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </li>
            ))}
          </ol>
          <div className="fm-src" ref={statsRef}>
            <div className="fm-nums">
              <div>
                <b>{statsVisible ? percentStat : 0}%</b>
                <span>cost reduction</span>
              </div>
              <div>
                <b>${statsVisible ? millionsStat : 0}M</b>
                <span>saved over the contract term</span>
              </div>
            </div>
            <div>
              <p>
                {"Facilities management "}
                <b>benchmarking and RFP support</b>
                {" helped a global professional-services firm cut costs by "}
                <b>22%</b>
                {", saving over "}
                <b>$15.2 million</b>
                {" over the contract term."}
              </p>
              <cite>
                Source:{" "}
                <a
                  href="https://www.cmsin.com/Knowledge-Base/Case-Studies/Facilities-Management-for-Global-Professional-Services-Company/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMS case study – Facilities Management for Global Professional Services Company
                </a>
              </cite>
            </div>
          </div>
        </div>
      </section>
      <section className="fm-sec" id="process">
        <div className="fm-wrap fm-tl">
          <div className="stick">
            <div
              className="fm-crumb"
              style={{
                color: "#000",
                marginBottom: 12,
              }}
            >
              <b>FM Roadmap</b>
            </div>
            <h2>
              {"Our 4-step FM "}
              <em>optimization process</em>
            </h2>
            <p>From initial assessment to measurable, continuously reviewed operational results.</p>
          </div>
          <ol className="fm-steps">
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
      <section className="fm-sec fm-ben" id="benefits">
        <div className="fm-wrap">
          <div className="fm-sh">
            <div
              className="fm-crumb"
              style={{
                color: "var(--fm-primrose)",
                marginBottom: 12,
              }}
            >
              <b>Core Advantages</b>
            </div>
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="fm-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fm-sec fm-ch" id="choose">
        <div className="fm-wrap">
          <div className="fm-sh c">
            <div
              className="fm-crumb"
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
          <ul className="grid">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fm-role" aria-label="Role of facility consultants">
        <div className="fm-wrap">
          <h2>Role of Facility Consultants</h2>
          <p>
            We empower your teams and systems to deliver world-class facility performance, safety,
            and compliance.
          </p>
        </div>
      </section>
      <section className="fm-cta" id="contact">
        <div className="l">
          <h2>
            {"Ready to optimize "}
            <em>facility management?</em>
          </h2>
          <p className="t">
            Take full control of your building’s performance, safety, and sustainability.
          </p>
          <Link className="fm-btn dk" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="r">
          <dl className="fm-ct">
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
