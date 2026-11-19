import { Link } from "react-router-dom";
const unsplashImage = (t) =>
  `https://images.unsplash.com/photo-${t}?auto=format&fit=crop&w=1200&q=80`;
const complianceServices = [
  {
    num: "01",
    title: "Management strategies and excellence models",
    desc: "Frameworks that drive continuous improvement and embed a culture of quality and innovation.",
    img: unsplashImage("1524178232363-1fb2b075b655"),
    topics: [
      {
        name: "Lean Six Sigma",
        desc: "Drive continuous improvement by eliminating waste and enhancing process capability across functions.",
      },
      {
        name: "Supply chain optimization",
        desc: "Improve procurement, logistics and compliance while building agile and risk-aware supply chains.",
      },
      {
        name: "Change management",
        desc: "Enable cultural, digital or structural transformation with strategic frameworks and engagement models.",
      },
      {
        name: "Business process reengineering",
        desc: "Redesign operational workflows to reduce costs, streamline output and enable cross-functional synergy.",
      },
      {
        name: "Project management",
        desc: "Deliver value-driven outcomes using global methodologies like PMI and PRINCE2, ensuring timely and efficient execution.",
      },
      {
        name: "Excellence models",
        desc: "Apply globally recognized frameworks to benchmark performance and embed a culture of quality and innovation.",
      },
      {
        name: "Corporate wellbeing compliance",
        desc: "Align wellbeing programs with ESG, HR and occupational health standards to promote a resilient workforce.",
      },
    ],
  },
  {
    num: "02",
    title: "Sustainability and ESG integration",
    desc: "Disclosures, certifications and measurement that reflect your ESG commitments and performance.",
    img: unsplashImage("1473341304170-971dccb5ac1e"),
    topics: [
      {
        name: "Sustainability reporting",
        desc: "Prepare GRI- or SASB-aligned disclosures that reflect your ESG commitments and performance.",
      },
      {
        name: "LEED certification",
        desc: "Meet U.S. Green Building Council criteria for environmentally responsible construction and operation.",
      },
      {
        name: "Mostadam certification",
        desc: "Support your project’s sustainability goals in alignment with Vision 2030’s green development framework.",
      },
      {
        name: "EcoVadis certification support",
        desc: "Streamline supplier evaluations through compliance with CSR, ethics and environmental performance indicators.",
      },
      {
        name: "Product life cycle analysis",
        desc: "Quantify environmental impact at every product stage to support eco-design and net-zero strategies.",
      },
      {
        name: "Carbon footprint assessment",
        desc: "Measure, monitor and mitigate GHG emissions in line with Scope 1, 2 and 3 requirements.",
      },
      {
        name: "Green building advisory",
        desc: "Design sustainable spaces that maximize energy efficiency and wellness certifications like WELL and BREEAM.",
      },
      {
        name: "ISO 50001 and energy audits",
        desc: "Establish robust energy management systems backed by targeted audits to reduce consumption and cost.",
      },
    ],
  },
  {
    num: "03",
    title: "Sector-specific excellence",
    desc: "Compliance tailored to the technical, operational and regulatory demands of your industry.",
    img: unsplashImage("1581092160562-40aa08e78837"),
    topics: [
      {
        name: "Industrial optimization and compliance",
        desc: "Optimize operations with process audits, regulatory assessments and lean transformation initiatives.",
      },
      {
        name: "IT and cybersecurity (ISO 27001, 42001)",
        desc: "Ensure information governance, AI ethics and data protection using international information security standards.",
      },
      {
        name: "Oil and gas (API Q1/Q2, ISO)",
        desc: "Achieve rigorous industry-specific compliance with technical, operational and HSE requirements.",
      },
      {
        name: "Facilities management (ISO 41001)",
        desc: "Align service delivery and asset performance with globally recognized FM best practices.",
      },
      {
        name: "Health, safety and fire risk",
        desc: "Conduct risk assessments, fire safety audits and compliance checks aligned with ISO 45001 and NFPA codes.",
      },
      {
        name: "Food safety and hygiene audits (ISO 22000)",
        desc: "Validate hygiene standards across supply chains with HACCP-based inspections and food safety management systems.",
      },
      {
        name: "Hospitality, retail and healthcare",
        desc: "Deliver compliance excellence tailored to high-contact service industries, enhancing customer trust and experience.",
      },
    ],
  },
  {
    num: "04",
    title: "International standards and certification",
    desc: "Structured management systems that take you from gap assessment to certification.",
    img: unsplashImage("1531482615713-2afd69097998"),
    topics: [
      {
        name: "ISO 9001 – Quality management",
        desc: "Build structured QMS frameworks that improve customer satisfaction, consistency and continuous improvement.",
      },
      {
        name: "API Q1 / Q2 – Oil and gas",
        desc: "Ensure reliable, industry-aligned quality assurance systems that meet petroleum sector standards for manufacturing and operations.",
      },
      {
        name: "ISO 14001 – Environmental management",
        desc: "Minimize environmental impact through effective environmental planning, policies and audits.",
      },
      {
        name: "ISO 45001 – Occupational health and safety",
        desc: "Establish workplace safety systems that prevent injury and ensure employee wellbeing.",
      },
      {
        name: "ISO 41001 – Facilities management",
        desc: "Standardize your FM operations to align with lifecycle cost optimization and performance metrics.",
      },
      {
        name: "ISO 20121 – Sustainable events",
        desc: "Implement sustainability principles for event planning, procurement and stakeholder inclusion.",
      },
      {
        name: "ISO 22000 – Food safety management",
        desc: "Build transparent, controlled food systems that manage hazards and assure product safety.",
      },
      {
        name: "ISO 50001 – Energy management",
        desc: "Create energy performance baselines, targets and continuous improvement systems.",
      },
      {
        name: "ISO 27001 – Information security",
        desc: "Safeguard data with systematic risk management, security controls and business continuity planning.",
      },
      {
        name: "ISO 31000 – Risk management",
        desc: "Integrate enterprise-wide risk assessment models for strategic and operational resilience.",
      },
      {
        name: "ISO 37001 – Anti-bribery",
        desc: "Strengthen your organization’s integrity through compliance programs and due diligence frameworks.",
      },
      {
        name: "ISO 42001 – AI management systems",
        desc: "Implement responsible AI governance, transparency and ethical safeguards in alignment with future standards.",
      },
      {
        name: "ISO 17020 / 17021 / 17025",
        desc: "Achieve competence in inspections, testing and certifications as required for labs, certification bodies and inspection bodies.",
      },
    ],
  },
];
const benefits = [
  "Minimize legal, reputational and financial risk.",
  "Accelerate market access and global credibility.",
  "Boost operational consistency and system resilience.",
  "Streamline certification processes and documentation.",
  "Strengthen stakeholder trust and regulatory alignment.",
];
const processSteps = [
  {
    num: "1",
    title: "Certified compliance consultants",
    desc: "Experts in multi-sector audits, regulatory frameworks and certification bodies.",
  },
  {
    num: "2",
    title: "Globally recognized methodology",
    desc: "We combine ISO, ESG and national frameworks for holistic assurance.",
  },
  {
    num: "3",
    title: "Audit-ready documentation",
    desc: "Clear, organized and aligned with certification and regulatory needs.",
  },
  {
    num: "4",
    title: "End-to-end partnership",
    desc: "From gap assessments to successful certification, we’re with you at every step.",
  },
];
export default function Compliance() {
  return (
    <div className="compliance-page">
      <section className="compliance-hero">
        <i className="compliance-ring cr1" />
        <i className="compliance-ring cr2" />
        <div
          style={{
            position: "relative",
          }}
        >
          <span className="tag">Compliance services</span>
          <h1>
            {"Your license to operate, "}
            <em>compete</em>
            {" and grow."}
          </h1>
          <p className="lead">
            Compliance is more than a checklist. We align your operations with international
            standards, local regulations and industry best practices, for lower risk, stronger
            operations and audit readiness.
          </p>
          <div className="acts">
            <Link className="btn p" to="/contact-us">
              Book a free consultation ↗
            </Link>
            <a className="btn line" href="#areas">
              Explore service areas ↓
            </a>
          </div>
          <div className="compliance-stats">
            <div>
              <b>4</b>
              <span>Compliance service areas</span>
            </div>
            <div>
              <b>13+</b>
              <span>Standards and certifications</span>
            </div>
            <div>
              <b>33%</b>
              <span>Less misconduct with strong programs</span>
            </div>
          </div>
        </div>
        <div className="compliance-arch">
          <div className="pic">
            <img src={unsplashImage("1573164713988")} alt="Compliance assurance" />
          </div>
          <div className="compliance-fl cf1">
            <small>Gap assessment</small>to certification
          </div>
          <div className="compliance-fl cf2">
            <small>Audit-ready</small>documentation
          </div>
        </div>
      </section>
      <div className="compliance-big-mq" aria-hidden="true">
        <div className="mq">
          <span>
            Sector-specific compliance ✦ Sustainability and ESG ✦ ISO certification ✦ Excellence
            models
          </span>
          <span>
            Sector-specific compliance ✦ Sustainability and ESG ✦ ISO certification ✦ Excellence
            models
          </span>
        </div>
      </div>
      <section className="compliance-band">
        <div className="compliance-band-in">
          <h2>
            {"Integrated compliance for "}
            <em>risk mitigation, operational excellence</em>
            {" and audit readiness."}
          </h2>
          <p>
            Comprehensive support for conformance, auditing, documentation, internal controls and
            certification readiness.
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="compliance-why2">
          <div className="pic">
            <img src={unsplashImage("1522071820081")} alt="Why compliance matters" />
          </div>
          <div>
            <span className="eyebrow">Why compliance matters</span>
            <h2>
              {"Compliance protects what "}
              <em>you build.</em>
            </h2>
            <ul className="compliance-wl">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <b>0{index + 1}</b>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        className="compliance-band"
        style={{
          background: "#071a1f",
        }}
      >
        <div className="compliance-band-in">
          <div className="compliance-num">33%</div>
          <div
            style={{
              maxWidth: "520px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 46px)",
              }}
            >
              {
                "Organizations with strong ethics and compliance programs cut workplace misconduct by "
              }
              <em>one third.</em>
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontSize: "13px",
              }}
            >
              {"Source: Ethics & Compliance Initiative"}
            </p>
          </div>
        </div>
      </section>
      <div
        className="compliance-big-mq rev"
        aria-hidden="true"
        style={{
          paddingTop: "60px",
        }}
      >
        <div className="mq">
          <span>
            Gap assessments ✦ Audit-ready documentation ✦ Internal controls ✦ Certification
            readiness
          </span>
          <span>
            Gap assessments ✦ Audit-ready documentation ✦ Internal controls ✦ Certification
            readiness
          </span>
        </div>
      </div>
      <div
        id="areas"
        style={{
          paddingTop: "20px",
        }}
      />
      {complianceServices.map((complianceService, index) => (
        <section
          key={complianceService.num}
          className={`compliance-area ${index % 2 !== 0 ? "rv2 dark" : ""}`}
        >
          <div className="pic">
            <img src={complianceService.img} alt={complianceService.title} loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">
              {"Service area "}
              {complianceService.num}
            </span>
            <h2>{complianceService.title}</h2>
            <p className="d">{complianceService.desc}</p>
            <ul className="compliance-tp">
              {complianceService.topics.map((topic, index2) => (
                <li key={index2}>
                  <b>{topic.name}</b>
                  <span>{topic.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section className="sec">
        <span className="eyebrow">Why choose Meridian?</span>
        <h2>
          {"Compliance that "}
          <em>stands up</em>
          {" to audit."}
        </h2>
        <div className="compliance-wc">
          {processSteps.map((processStep) => (
            <div key={processStep.num}>
              <b>{processStep.num}</b>
              <div>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="compliance-band"
        style={{
          marginBottom: "16px",
        }}
      >
        <div className="compliance-band-in">
          <div>
            <span
              className="eyebrow"
              style={{
                color: "var(--primrose)",
              }}
            >
              Role of compliance experts
            </span>
            <h2>
              {"We translate complex requirements into "}
              <em>practical actions.</em>
            </h2>
            <div className="compliance-chips">
              <span>Operate with confidence</span>
              <span>Scale with control</span>
              <span>Lead with integrity</span>
            </div>
          </div>
        </div>
      </section>
      <section className="compliance-cta cr" id="contact">
        <div>
          <h2>
            {"Ready to strengthen your "}
            <em>compliance framework?</em>
          </h2>
          <p>
            Assess your current compliance posture and discover how Meridian can streamline your
            certification journey.
          </p>
          <Link className="btn p" to="/contact-us">
            Book a free consultation ↗
          </Link>
        </div>
        <dl>
          <div>
            <dt>Call us</dt>
            <dd>+966 50 939 4640</dd>
          </div>
          <div>
            <dt>Need support</dt>
            <dd>info@meqmp.com</dd>
          </div>
          <div>
            <dt>Our global locations</dt>
            <dd>Saudi Arabia · Bahrain · Canada · Pakistan</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
