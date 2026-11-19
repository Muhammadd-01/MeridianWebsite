import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function RiskAssessments() {
  const [statValue, setStatValue] = useState(0);
  useEffect(() => {
    let startTime = null;
    const duration = 1400;
    const target = 30;
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
      title: "Prevent costly disruptions and compliance breaches.",
    },
    {
      num: "02",
      title: "Make informed strategic and operational decisions.",
    },
    {
      num: "03",
      title: "Identify unseen vulnerabilities across departments.",
    },
    {
      num: "04",
      title: "Enhance regulatory reporting and risk preparedness.",
    },
    {
      num: "05",
      title: "Meet ISO 31000 and ESG reporting requirements.",
      wide: true,
    },
  ];
  const processSteps = [
    {
      num: 1,
      step: "First step",
      title: "Identify",
      desc: "Detect internal and external risks (financial, HSE, IT, compliance).",
    },
    {
      num: 2,
      step: "Second step",
      title: "Analyze",
      desc: "Evaluate probability, impact, and interdependencies.",
    },
    {
      num: 3,
      step: "Third step",
      title: "Control",
      desc: "Develop mitigation strategies and responsibilities.",
    },
    {
      num: 4,
      step: "Fourth step",
      title: "Monitor",
      desc: "Set up alerts, KPIs, and review cycles.",
    },
  ];
  const outcomes = [
    "Smarter decisions with better risk visibility.",
    "Strengthened operational resilience.",
    "Improved regulatory and audit outcomes.",
    "Better alignment with ISO and ESG standards.",
    "Reduced legal and reputational exposure.",
  ];
  const whyChooseUs = [
    {
      num: "01",
      title: "ISO 31000 experts",
      desc: "Experts in ISO 31000 Risk Framework.",
    },
    {
      num: "02",
      title: "Sector-specific insight",
      desc: "Sector-specific insights (Oil & Gas, Hospitality, Healthcare, etc.).",
    },
    {
      num: "03",
      title: "Digital tools",
      desc: "Digital risk registers and control dashboards.",
    },
    {
      num: "04",
      title: "Team alignment",
      desc: "Collaborative workshops to align teams.",
    },
  ];
  return (
    <div className="ra-page">
      <section className="ra-hero">
        <img
          className="ra-hero-img"
          src={
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
          }
          alt="Risk Assessments"
          aria-hidden="true"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png";
          }}
        />
        <div className="ra-hero-shade" aria-hidden="true" />
        <div className="ra-wrap">
          <div className="ra-hero-txt">
            <p className="ra-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>Risk Assessments</b>
            </p>
            <h1>
              {"Risk "}
              <span>Assessments.</span>
            </h1>
            <p className="ra-lead">
              Identify vulnerabilities and implement control measures to protect your business from
              operational and compliance risks.
            </p>
            <div className="ra-acts">
              <Link className="ra-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="ra-btn ra-btn-o" href="#process">
                {"See our process "}
                <i>↓</i>
              </a>
            </div>
          </div>
        </div>
        <div className="ra-fmc" aria-hidden="true">
          <small>Our 4-step process</small>
          <span>Identify</span>
          <span>Analyze</span>
          <span>Control</span>
          <span>Monitor</span>
        </div>
      </section>
      <section className="ra-sec ra-band" id="what">
        <div className="ra-wrap">
          <h2>What are risk assessments?</h2>
          <p className="ra-def">
            {"A structured evaluation of "}
            <b>operational</b>
            {", "}
            <b>environmental</b>
            {", "}
            <b>financial</b>, and <b>safety</b>
            {" risks — designed to prioritize actions, prevent losses, and build resilience."}
          </p>
          <div className="ra-chips">
            <span>Operational</span>
            <span>Environmental</span>
            <span>Financial</span>
            <span>Safety</span>
          </div>
        </div>
      </section>
      <section className="ra-sec ra-why" id="why">
        <div className="ra-wrap">
          <div className="ra-sh">
            <span className="ra-lab">Why It Matters</span>
            <h2>
              {"Why risk assessment "}
              <em>matters.</em>
            </h2>
          </div>
          <div className="ra-bg">
            {benefits.map((benefit, index) => (
              <div key={index} className={`ra-bc${benefit.wide ? " ra-w2" : ""}`}>
                <span className="ra-n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
              </div>
            ))}
            <aside className="ra-stat">
              <div className="ra-nums">
                <div>
                  <b>{statValue}%</b>
                  <span>more likely to achieve strategic objectives</span>
                </div>
              </div>
              <div>
                <p>
                  {"Businesses that "}
                  <b>proactively integrate risk management</b>
                  {" into strategic planning are "}
                  <b>30% more likely</b>
                  {" to achieve their strategic objectives."}
                </p>
                <cite>
                  Source:{" "}
                  <a
                    href="https://blogs.vorecol.com/blog-how-can-organizations-integrate-risk-management-into-their-strategic-planning-processes-62521"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Harvard Business Review via Vorecol
                  </a>
                </cite>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="ra-sec" id="process">
        <div className="ra-wrap">
          <div className="ra-sh c">
            <span className="ra-lab">Our Approach</span>
            <h2>
              {"Our 4-step risk assessment "}
              <em>process.</em>
            </h2>
          </div>
          <ol className="ra-pr">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="ra-nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="ra-sec ra-ben" id="benefits">
        <div className="ra-wrap ra-bw">
          <h2>Key benefits.</h2>
          <ul className="ra-chk">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ra-sec" id="choose">
        <div className="ra-wrap">
          <div className="ra-sh c">
            <span className="ra-lab">Why Choose Meridian?</span>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="ra-cg">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ra-role" aria-label="Role of risk consultants">
        <div className="ra-wrap">
          <h2>Role of risk consultants</h2>
          <p>We decode uncertainty — enabling you to act with confidence and clarity.</p>
        </div>
      </section>
      <section className="ra-cta" id="contact">
        <div className="ra-wrap">
          <div className="ra-cbox">
            <div className="ra-l">
              <span className="ra-lab">Take Action</span>
              <h2>Ready to future-proof your business?</h2>
              <p className="ra-t">
                Let’s uncover and manage the risks that matter most to your long-term success.
              </p>
              <Link className="ra-btn ra-btn-dk" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
            </div>
            <div className="ra-r">
              <dl className="ra-ct">
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
