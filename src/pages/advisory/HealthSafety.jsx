import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const benefits = [
  {
    num: "01",
    title: "Reduce injuries, liabilities, and insurance claims.",
    desc: "Finding and controlling hazards early means fewer incidents, lower legal exposure, and a better claims record with your insurers.",
  },
  {
    num: "02",
    title: "Ensure legal and regulatory compliance.",
    desc: "A documented system keeps you aligned with ISO 45001, OSHA, and local labor regulations, with the records to prove it during inspections and audits.",
  },
  {
    num: "03",
    title: "Improve employee confidence and trust.",
    desc: "When people see leaders acting on safety and listening to concerns, they feel protected, speak up sooner, and stay more engaged in their work.",
  },
  {
    num: "04",
    title: "Align with ESG goals and ISO standards.",
    desc: "Safety performance is a core part of the social side of ESG, and a certified system gives you credible, reportable evidence for stakeholders.",
  },
  {
    num: "05",
    title: "Reduce absenteeism and improve productivity.",
    desc: "Fewer injuries and healthier workplaces mean less lost time, smoother operations, and teams that can focus on delivering results.",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Gap assessment & legal compliance review",
    desc: "Compare current practices against requirements and identify what needs to change.",
  },
  {
    step: "Second step",
    num: "2",
    title: "Risk mitigation planning (PPE, signage, processes)",
    desc: "Plan practical controls that reduce the risks found in the assessment.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Employee safety training & engagement",
    desc: "Equip your people with the knowledge and habits to work safely every day.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Monitoring, incident reporting & corrective actions",
    desc: "Track performance, learn from incidents, and close actions out.",
  },
];
const outcomes = [
  "Safer and more productive teams.",
  "Reduced insurance premiums and claims.",
  "Greater regulatory trust.",
  "Enhanced brand reputation.",
  "Stronger internal controls.",
];
const whyChooseUs = [
  {
    num: "01",
    title: "Certified ISO 45001 experts.",
  },
  {
    num: "02",
    title: "Industry-specific health & safety solutions.",
  },
  {
    num: "03",
    title: "Clear safety metrics and dashboards.",
  },
  {
    num: "04",
    title: "End-to-end compliance & training support.",
  },
];
export default function HealthSafety() {
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
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
            setFirstStat(+(22.6 * eased).toFixed(1));
            setSecondStat(+(29.2 * eased).toFixed(1));
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
    <div className="hs-page">
      <section className="hs-hero">
        <img
          className="hs-hero-img"
          src={
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
          }
          alt={"Health & Safety Management"}
          aria-hidden="true"
        />
        <div className="hs-hero-shade" aria-hidden="true" />
        <div className="hs-hero-txt">
          <p className="hs-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"Health & Safety Management"}</b>
          </p>
          <h1>
            {"Health & Safety "}
            <em>Management</em>
          </h1>
          <p className="hs-lead">
            Create a safe, compliant, and high-performing workplace with strong health and safety
            systems.
          </p>
          <div className="hs-acts">
            <Link className="hs-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="hs-btn o" href="#model">
              {"See our model "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="hs-fmc" aria-hidden="true">
          <small>Proactive hazard cycle</small>
          <span>Identify</span>
          <span>Control</span>
          <span>Monitor</span>
        </div>
      </section>
      <section className="hs-sec" id="what">
        <div className="hs-wrap hs-wi">
          <div>
            <h2>
              {"What is health & safety "}
              <em>management?</em>
            </h2>
            <p className="hs-def">
              {"It’s a "}
              <b>proactive approach</b>
              {
                " to identifying, controlling, and monitoring workplace hazards — aligned with ISO 45001, OSHA, and local labor regulations."
              }
            </p>
            <div className="hs-chips">
              <span>ISO 45001</span>
              <span>OSHA</span>
              <span>Local labor regulations</span>
            </div>
          </div>
          <figure className="hs-ph">
            <img
              src={
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Workplace health and safety"
              loading="lazy"
            />
            <span className="hs-tag">Hazards · Controls · Monitoring</span>
          </figure>
        </div>
      </section>
      <section className="hs-sec hs-why" id="why">
        <div className="hs-wrap">
          <div className="hs-wb">
            <img
              className="hs-wb-img"
              src={
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=80"
              }
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h2>Why it matters</h2>
            <p>
              Five ways strong health and safety systems protect your people and strengthen your
              organization.
            </p>
          </div>
          <ol className="hs-rows">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="hs-n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </li>
            ))}
          </ol>
          <div className="hs-src" ref={statsRef} id="qbox">
            <div className="hs-nums">
              <div>
                <b>{firstStat}%</b>
                <span>lower accident frequency</span>
              </div>
              <div>
                <b>{secondStat}%</b>
                <span>lower accident severity</span>
              </div>
            </div>
            <div>
              <p>
                {"Companies with certified Health & Safety Management Systems have seen workplace "}
                <b>accident frequency fall by 22.6%</b>
                {", and "}
                <b>severity decrease by 29.2%</b>.
              </p>
              <cite>
                {
                  "Source: Study by Accredia & Inail on ISO 45001 certified organizations, April 2024"
                }
              </cite>
            </div>
          </div>
        </div>
      </section>
      <section className="hs-sec" id="model">
        <div className="hs-wrap hs-tl">
          <div className="hs-stick">
            <h2>
              {"Our 4-step health & "}
              <em>safety model</em>
            </h2>
            <p>From the first gap check to ongoing monitoring and improvement.</p>
          </div>
          <ol className="hs-steps" id="steps">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="hs-nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="hs-sec hs-ben" id="benefits">
        <div className="hs-wrap">
          <div className="hs-sh">
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="hs-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="hs-sec hs-ch" id="choose">
        <div className="hs-wrap">
          <div className="hs-sh c">
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="hs-grid">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="hs-role" aria-label="Role of health and safety consultants">
        <div className="hs-wrap">
          <h2>{"Role of health & safety consultants"}</h2>
          <p>
            We turn compliance into culture — helping you build a safety-first organization that
            thrives.
          </p>
        </div>
      </section>
      <section className="hs-cta" id="contact">
        <div className="hs-l">
          <h2>Ready to build a safer workplace?</h2>
          <p className="hs-t">And let’s improve health and safety across your operations.</p>
          <Link className="hs-btn dk" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="hs-r">
          <dl className="hs-ct">
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
