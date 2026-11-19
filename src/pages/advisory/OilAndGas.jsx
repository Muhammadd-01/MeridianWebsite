import { Link } from "react-router-dom";
const benefits = [
  {
    num: "01",
    title: "Improve asset integrity and prevent costly incidents.",
    desc: "Disciplined inspection, maintenance, and quality controls keep pipelines, vessels, and rotating equipment fit for service, so small defects are caught before they become leaks, failures, or unplanned shutdowns.",
  },
  {
    num: "02",
    title: "Ensure compliance with API, ISO, and local authority standards.",
    desc: "One integrated management system maps API Q1/Q2 and ISO requirements to the rules of your local regulators, giving you a clear, auditable trail instead of separate, overlapping checklists.",
  },
  {
    num: "03",
    title: "Reduce HSE risks and insurance liabilities.",
    desc: "Systematic hazard identification, controls, and drills lower the likelihood and severity of safety and environmental events, and show insurers and authorities that risks are actively managed.",
  },
  {
    num: "04",
    title: "Enhance contractor/vendor control.",
    desc: "Defined qualification, inspection, and performance requirements for suppliers and contractors keep quality and safety consistent across the whole supply chain, not just inside your own fence line.",
  },
  {
    num: "05",
    title: "Achieve certification to access new markets.",
    desc: "Recognized certification is often a prerequisite for pre-qualification and tenders with operators and national oil companies, opening doors to projects and regions that would otherwise stay closed.",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Readiness & risk review",
    desc: "Evaluate site-specific risks, compliance levels, and operational gaps.",
  },
  {
    step: "Second step",
    num: "2",
    title: "Standard implementation (API/ISO)",
    desc: "Design and embed compliant processes aligned with API Q1, Q2, and relevant ISOs.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Workforce training & drills",
    desc: "HSE, quality, and operations training for site personnel.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Certification & continuous improvement",
    desc: "Audit prep and sustained performance improvement strategies.",
  },
];
const outcomes = [
  "Reduced downtime and safety incidents.",
  "Global certification and local regulatory compliance.",
  "Higher operational efficiency and quality output.",
  "Stronger client and partner confidence.",
  "Competitive edge in project bidding.",
];
const whyChooseUs = [
  {
    num: "01",
    title: "API Q1/Q2 implementation experts",
    desc: "Certified and experienced in oilfield, refinery, and pipeline contexts.",
  },
  {
    num: "02",
    title: "Hands-on field support",
    desc: "We support implementation onsite, from policy to inspection.",
  },
  {
    num: "03",
    title: "HSE integration",
    desc: "Safety isn’t separate — we integrate it into every system.",
  },
  {
    num: "04",
    title: "Full certification journey",
    desc: "From kickoff to audit success, we walk with you.",
  },
];
export default function OilAndGas() {
  return (
    <div className="og-page">
      <section className="og-hero">
        <img
          className="og-hero-img"
          src={
            "https://images.unsplash.com/photo-1513828583688-c52646db42b1?auto=format&fit=crop&w=2400&q=80"
          }
          alt={"Oil & Gas Operations"}
          aria-hidden="true"
        />
        <div className="og-hero-shade" aria-hidden="true" />
        <div className="og-hero-txt">
          <p className="og-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"Oil & Gas (API Q1/Q2, ISO Standards)"}</b>
          </p>
          <h1>
            {"Oil & Gas "}
            <span>(API Q1/Q2, ISO Standards)</span>
          </h1>
          <p className="og-lead">
            Drive operational integrity, safety, and compliance in upstream and downstream
            operations.
          </p>
          <div className="og-acts">
            <Link className="og-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="og-btn o" href="#model">
              {"See our model "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="og-gauge" aria-hidden="true">
          <svg viewBox="0 0 300 300">
            <circle className="og-face" cx="150" cy="150" r="140" />
            <path className="og-trk" d="M62 238 A112 112 0 1 1 238 238" />
            <path className="og-arc" d="M62 238 A112 112 0 1 1 238 238" />
            <g className="og-tk">
              <line x1="150" y1="30" x2="150" y2="44" />
              <line x1="66" y1="65" x2="76" y2="75" />
              <line x1="234" y1="65" x2="224" y2="75" />
              <line x1="30" y1="150" x2="44" y2="150" />
              <line x1="270" y1="150" x2="256" y2="150" />
            </g>
            <g className="og-nd">
              <path d="M146 160 L150 62 L154 160 Z" />
            </g>
            <circle className="og-hub" cx="150" cy="160" r="11" />
            <text className="og-big" x="150" y="226">
              API Q1/Q2
            </text>
            <text className="og-sm" x="150" y="248">
              Asset integrity
            </text>
          </svg>
        </div>
      </section>
      <section className="og-sec" id="what">
        <div className="og-wrap og-wi">
          <div>
            <h2>
              {"What is oil & gas compliance & "}
              <em>quality management?</em>
            </h2>
            <p className="og-def">
              {
                "We help oil & gas firms implement globally recognized quality and safety standards like "
              }
              <b>API Q1/Q2</b>
              {", "}
              <b>ISO 29001</b>
              {", and "}
              <b>ISO 45001</b>—ensuring safe, compliant, and optimized operations.
            </p>
            <div className="og-chips">
              <span>API Q1</span>
              <span>API Q2</span>
              <span>ISO 29001</span>
              <span>ISO 45001</span>
            </div>
          </div>
          <figure className="og-ph">
            <img
              src={
                "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Oil and gas operations"
              loading="lazy"
            />
            <span className="og-tag">Upstream · Downstream</span>
          </figure>
        </div>
      </section>
      <section className="og-sec og-why" id="why">
        <div className="og-wrap">
          <div className="og-wb">
            <img
              className="og-wb-img"
              src={
                "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
              }
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h2>Why it matters</h2>
            <p>
              Five ways structured compliance and quality management protect your people, assets,
              and business.
            </p>
          </div>
          <ol className="og-rows">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="og-n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </li>
            ))}
          </ol>
          <div className="og-src">
            <strong>Source</strong>
            <div>
              <p>
                <b>Defect elimination programs</b>
                {
                  " (e.g., at Saudi Aramco’s Khursaniyah Gas Plant) have been shown to significantly reduce defects and improve equipment reliability in industry-leading asset management initiatives."
                }
              </p>
              <a
                href="https://reliabilityweb.com/en/press-release/uptime-elements-award-the-industry-acknowledges-the-best-organizations-in-asset-management"
                target="_blank"
                rel="noreferrer"
              >
                Read the source
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="og-sec" id="model">
        <div className="og-wrap og-tl">
          <div className="og-stick">
            <h2>
              {"Our 4-step oil & gas "}
              <em>compliance model</em>
            </h2>
            <p>From the first site review to sustained performance.</p>
          </div>
          <ol className="og-steps" id="steps">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="og-nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="og-sec og-ben" id="benefits">
        <div className="og-wrap">
          <div className="og-sh">
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="og-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="og-sec og-ch" id="choose">
        <div className="og-wrap">
          <div className="og-sh c">
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="og-grid">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="og-role" aria-label="Role of oil and gas consultants">
        <div className="og-wrap">
          <h2>{"Role of oil & gas consultants"}</h2>
          <p>
            We bring clarity to compliance — enabling safer, more reliable operations in high-stakes
            environments.
          </p>
        </div>
      </section>
      <section className="og-cta" id="contact">
        <div className="og-l">
          <h2>Ready to elevate operational excellence?</h2>
          <p className="og-t">{"And bring API and ISO compliance to your oil & gas operations."}</p>
          <Link className="og-btn dk" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="og-r">
          <dl className="og-ct">
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
