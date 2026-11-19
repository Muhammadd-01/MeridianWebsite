import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const focusAreas = ["Mental health", "Work-life balance", "Engagement", "Productivity"];
const goals = [
  "Reduce absenteeism and burnout.",
  "Align wellbeing with ESG and DEI goals.",
  "Improve mental and physical health outcomes.",
  "Boost engagement, retention, and performance.",
  "Enhance employer brand and talent acquisition.",
];
const programTabs = [
  {
    id: "t1",
    num: "01",
    label: "Wellbeing audit",
    step: "First step",
    title: "Wellbeing audit",
    desc: "Assess organizational health, stress indicators, and engagement levels.",
  },
  {
    id: "t2",
    num: "02",
    label: "Strategy development",
    step: "Second step",
    title: "Strategy development",
    desc: "Tailored wellbeing programs aligned with your culture and business goals.",
  },
  {
    id: "t3",
    num: "03",
    label: "Impact measurement",
    step: "Third step",
    title: "Impact measurement",
    desc: "Track participation, productivity, engagement, and health metrics for ongoing improvement.",
  },
  {
    id: "t4",
    num: "04",
    label: "Program rollout",
    step: "Fourth step",
    title: "Program rollout",
    desc: "Implementation of mental health support, flexible work models, recognition systems, and more.",
  },
];
const outcomes = [
  "Lower turnover and absenteeism.",
  "Better alignment with ESG reporting.",
  "Improved team energy and innovation.",
  "Stronger workplace culture and inclusion.",
  "Higher employee satisfaction and engagement.",
];
const whyChooseUs = [
  {
    title: "Certified wellbeing strategists",
    desc: "We bring HR, psychology, and business expertise together.",
  },
  {
    title: "Integrated approach",
    desc: "We link wellbeing to business performance, not just perks.",
  },
  {
    title: "Tailored to your culture",
    desc: "From hospitality to healthcare, we design for your people.",
  },
  {
    title: "Continuous partnership",
    desc: "We support long-term wellbeing transformation, not just a single campaign.",
  },
];
export default function CorporateWellbeing() {
  const [activeTab, setActiveTab] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const duration = 1300;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setFirstStat(Math.round(23 * eased));
            setSecondStat(Math.round(41 * eased));
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
    <div className="cwb-page">
      <section className="cwb-hero" id="top">
        <div className="cwb-hero-bg" aria-hidden="true" />
        <p className="cwb-crumb">
          <Link to="/">Home</Link>
          {" / "}
          <Link to="/services/advisory">Advisory</Link>
          {" / "}
          <b>Corporate Well-Being</b>
        </p>
        <h1>
          {"Corporate "}
          <em>Well-Being</em>
        </h1>
        <p className="cwb-lead">
          Elevate employee performance, reduce burnout, and build a thriving organizational culture.
        </p>
        <div className="cwb-acts">
          <Link className="cwb-btn" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <a className="cwb-btn o" href="#framework">
            {"See our framework "}
            <i>↓</i>
          </a>
        </div>
      </section>
      <section className="cwb-row" id="what">
        <h2>
          {"What is "}
          <em>corporate wellbeing?</em>
        </h2>
        <div>
          <p className="cwb-def">
            It’s more than wellness programs — we create holistic wellbeing strategies that bring
            together four critical pillars:
          </p>
          <ul className="cwb-four">
            {focusAreas.map((focusArea, index) => (
              <li key={index}>{focusArea}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cwb-row cwb-why" id="why">
        <h2>
          {"Why corporate wellbeing "}
          <em>matters</em>
        </h2>
        <div ref={statsRef}>
          <ul className="cwb-pts">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
          <div className="cwb-stat">
            <p className="s">Companies with strong wellbeing programs experience:</p>
            <div>
              <b>{statsVisible ? firstStat : 0}%</b>
              <span>higher profitability</span>
              <div className="cwb-trk" aria-hidden="true">
                <i
                  style={{
                    "--v": `${statsVisible ? 23 : 0}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <b>{statsVisible ? secondStat : 0}%</b>
              <span>lower absenteeism</span>
              <div className="cwb-trk" aria-hidden="true">
                <i
                  style={{
                    "--v": `${statsVisible ? 41 : 0}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cwb-row cwb-fw" id="framework">
        <h2>
          {"Our 4-step wellbeing "}
          <em>framework</em>
        </h2>
        <div>
          <div className="cwb-tabs" role="tablist" aria-label="Framework steps">
            {programTabs.map((programTab, index) => (
              <button
                key={programTab.id}
                role="tab"
                id={programTab.id}
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {programTab.label}
              </button>
            ))}
          </div>
          <div className="cwb-pn" role="tabpanel" aria-labelledby={programTabs[activeTab].id}>
            <div className="n">{programTabs[activeTab].num}</div>
            <div>
              <small>{programTabs[activeTab].step}</small>
              <h3>{programTabs[activeTab].title}</h3>
              <p>{programTabs[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cwb-row cwb-ben" id="benefits">
        <h2>
          {"Key "}
          <em>benefits</em>
        </h2>
        <ul className="cwb-bl">
          {outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section className="cwb-row" id="choose">
        <h2>
          {"Why choose "}
          <em>Meridian?</em>
        </h2>
        <div className="cwb-cg">
          {whyChooseUs.map((whyChooseU, index) => (
            <div key={index}>
              <h3>{whyChooseU.title}</h3>
              <p>{whyChooseU.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cwb-role" aria-label="Role of wellbeing consultants">
        <p>
          We bridge strategy and human capital — shaping resilient, healthy, and high-performing
          cultures.
        </p>
      </section>
      <section className="cwb-row cwb-cta" id="contact">
        <h2>
          {"Ready to elevate "}
          <em>employee wellbeing?</em>
        </h2>
        <div>
          <p className="t">
            Start building a workplace where people and performance thrive together.
          </p>
          <Link className="cwb-btn dk" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="cwb-ct">
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
        </div>
      </section>
    </div>
  );
}
