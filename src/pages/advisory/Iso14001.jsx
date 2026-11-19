import { Link } from "react-router-dom";
export default function Iso14001() {
  const focusAreas = [
    {
      num: "01",
      title: "Sustainability",
      desc: "Set clear environmental policies and objectives so your operations stay responsible and viable for the long term.",
    },
    {
      num: "02",
      title: "Resource efficiency",
      desc: "Use energy, water, and materials more wisely, cutting waste and the costs that come with overuse.",
    },
    {
      num: "03",
      title: "Pollution control",
      desc: "Identify and manage emissions, waste, and discharges to prevent harm and stay within legal limits.",
    },
  ];
  const reasons = [
    "Meet environmental laws and stakeholder expectations.",
    "Control pollution, waste, and energy use.",
    "Align with ESG frameworks and CSR goals.",
    "Improve environmental risk management.",
    "Enhance reputation and green credentials.",
  ];
  const processSteps = [
    {
      num: 1,
      step: "first step",
      title: "Environmental impact & legal gap assessment.",
    },
    {
      num: 2,
      step: "second step",
      title: "EMS design (policies, objectives, registers).",
    },
    {
      num: 3,
      step: "third step",
      title: "Awareness, compliance, and internal audits.",
    },
    {
      num: 4,
      step: "fourth step",
      title: "Certification preparation and continuous monitoring.",
    },
  ];
  const outcomes = [
    "Reduced operational risk and waste.",
    "Improved environmental and legal compliance.",
    "Competitive advantage in green markets.",
    "ESG-aligned sustainability metrics.",
    "Better engagement with regulators and communities.",
  ];
  const whyChooseUs = [
    {
      num: "01",
      title: "Expertise in ISO 14001 and ESG strategy.",
    },
    {
      num: "02",
      title: "Regulatory insights for multiple geographies.",
    },
    {
      num: "03",
      title: "Documentation templates and compliance tracking.",
    },
    {
      num: "04",
      title: "Long-term EMS performance coaching.",
    },
  ];
  return (
    <div className="ems-page">
      <section className="ems-hero">
        <div className="ems-hero-in">
          <div>
            <p className="ems-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" /"} <b>ISO 14001 – Environmental Management</b>
            </p>
            <h1>
              {"ISO 14001 – "}
              <span>Environmental Management.</span>
            </h1>
            <p className="ems-lead">
              Reduce environmental impact, meet regulatory compliance, and advance your
              sustainability goals.
            </p>
            <div className="ems-acts">
              <Link className="ems-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="ems-btn ems-btn-o" href="#process">
                {"See our process "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="ems-orb" aria-hidden="true">
            <div className="ems-ring" />
            <div className="ems-pic">
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Environmental Management Systems"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    "https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png";
                }}
              />
            </div>
            <span className="ems-tg ems-t1">Sustainability</span>
            <span className="ems-tg ems-t2">Resource efficiency</span>
            <span className="ems-tg ems-t3">Pollution control</span>
          </div>
        </div>
      </section>
      <section className="ems-sec" id="what">
        <div className="ems-wrap">
          <div className="ems-wi">
            <div>
              <span className="ems-lab">The Standard</span>
              <h2>What is ISO 14001?</h2>
            </div>
            <div>
              <p className="ems-def">
                An international standard for building and maintaining an{" "}
                <b>Environmental Management System (EMS)</b>, focused on sustainability, resource
                efficiency, and pollution control.
              </p>
              <ul className="ems-fo">
                {focusAreas.map((focusArea) => (
                  <li key={focusArea.num} data-n={focusArea.num}>
                    <h3>{focusArea.title}</h3>
                    <p>{focusArea.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <figure className="ems-band">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="ISO 14001 environmental management"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </figure>
        </div>
      </section>
      <section className="ems-sec ems-why" id="why">
        <div className="ems-wrap">
          <div className="ems-sh">
            <span className="ems-lab">Why It Matters</span>
            <h2>
              {"Why environmental management "}
              <em>matters.</em>
            </h2>
          </div>
          <div className="ems-wm">
            <ul className="ems-pts">
              {reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
            <aside className="ems-src">
              <span className="ems-tag">Source</span>
              <p>
                {"ISO 14001 compliance helps organizations "}
                <b>meet regulatory requirements</b>, <b>avoid legal penalties</b>
                {", and "}
                <b>reduce environmental risks</b>.
              </p>
              <a
                className="ems-btn"
                href="https://www.isms.online/iso-14001/iso-14001-compliance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"ISO 14001 Compliance Guide "}
                <i>↗</i>
              </a>
            </aside>
          </div>
        </div>
      </section>
      <section className="ems-sec" id="process">
        <div className="ems-wrap">
          <div className="ems-sh c">
            <span className="ems-lab">Our Approach</span>
            <h2>
              {"Our 4-step ISO 14001 "}
              <em>process.</em>
            </h2>
          </div>
          <div className="ems-cw">
            <ol className="ems-cross">
              {processSteps.map((processStep) => (
                <li key={processStep.num}>
                  <div className="ems-n">{processStep.num}</div>
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                </li>
              ))}
            </ol>
            <div className="ems-hub" aria-hidden="true">
              ↻
            </div>
          </div>
        </div>
      </section>
      <section className="ems-sec ems-ben" id="benefits">
        <div className="ems-wrap">
          <div className="ems-sh">
            <span
              className="ems-lab"
              style={{
                color: "#8a4f08",
              }}
            >
              Strategic Value
            </span>
            <h2>Key benefits.</h2>
          </div>
          <ul className="ems-chk">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ems-sec" id="choose">
        <div className="ems-wrap">
          <div className="ems-sh c">
            <span className="ems-lab">Why Choose Meridian?</span>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <figure className="ems-ch-ph">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
              alt="Environmental management systems"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </figure>
          <ul className="ems-grid">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ems-role" aria-label="Role of EMS consultants">
        <div className="ems-wrap">
          <h2>Role of EMS consultants</h2>
          <p>
            We transform environmental risks into actionable strategies—empowering your green
            transformation.
          </p>
        </div>
      </section>
      <div className="ems-wrap" id="contact">
        <section className="ems-cta">
          <span
            className="ems-lab"
            style={{
              color: "var(--ems-primrose)",
            }}
          >
            Start Today
          </span>
          <h2>Ready to achieve environmental excellence?</h2>
          <p className="ems-t">To elevate your sustainability journey with ISO 14001.</p>
          <Link className="ems-btn ems-btn-or" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="ems-ct">
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
        </section>
      </div>
    </div>
  );
}
