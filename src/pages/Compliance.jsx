import { Link } from "react-router-dom";
const unsplashImage = (t) =>
  `https://images.unsplash.com/photo-${t}?auto=format&fit=crop&w=1200&q=80`;
const complianceServices = [
  {
    num: "01",
    title: "International Standards & Certification Readiness",
    desc: "A standard only creates value when its requirements are understood and applied throughout the organization. We support businesses in assessing, implementing and improving management systems against relevant international standards. Our work can include gap assessments, documentation, implementation support, internal audits, training and preparation for external certification assessments.",
    img: unsplashImage("1531482615713-2afd69097998"),
    topics: [
      {
        name: "Quality & Business Management",
        desc: "ISO 9001: Quality Management Systems · ISO 31000: Risk Management Guidelines",
      },
      {
        name: "Environment, Energy & Occupational Health and Safety",
        desc: "ISO 14001: Environmental Management Systems · ISO 45001: Occupational Health and Safety Management Systems · ISO 50001: Energy Management Systems",
      },
      {
        name: "Governance, Information & Technology",
        desc: "ISO 37001: Anti-Bribery Management Systems · ISO/IEC 27001: Information Security Management Systems · ISO/IEC 42001: Artificial Intelligence Management Systems",
      },
      {
        name: "Industry & Specialist Management Systems",
        desc: "ISO 22000: Food Safety Management Systems · ISO 41001: Facility Management Systems · ISO 20121: Event Sustainability Management Systems · API Q1 and API Q2: Quality Management Requirements for Relevant Oil and Gas Organizations",
      },
      {
        name: "Inspection, Certification & Testing Environments",
        desc: "ISO/IEC 17020: Inspection Bodies · ISO/IEC 17021-1: Management System Certification Bodies · ISO/IEC 17025: Testing and Calibration Laboratories",
      },
    ],
  },
  {
    num: "02",
    title: "Sector-Specific Compliance & Assurance",
    desc: "Requirements differ from one industry to another. A manufacturing facility, an oil and gas operator and a healthcare organization do not face the same operational risks. Meridian helps organizations address the standards, controls and industry requirements relevant to their operating environments.",
    img: unsplashImage("1581092160562-40aa08e78837"),
    topics: [
      {
        name: "Oil & Gas",
        desc: "Quality management, operational requirements and relevant API standards, including API Q1 and API Q2.",
      },
      {
        name: "Industrial Operations",
        desc: "Operational controls, management systems, process improvement and compliance requirements for industrial environments.",
      },
      {
        name: "IT & Cybersecurity",
        desc: "Information security, technology governance and artificial intelligence management, including ISO/IEC 27001 and ISO/IEC 42001.",
      },
      {
        name: "Facilities Management",
        desc: "Management systems and operational practices for facility management, including ISO 41001.",
      },
      {
        name: "Health, Safety & Fire Risk",
        desc: "Occupational health and safety management, risk controls and relevant fire safety requirements, including ISO 45001 and applicable NFPA standards.",
      },
      {
        name: "Food Safety & Hygiene",
        desc: "Food safety management, hazard controls and hygiene practices, including ISO 22000 and HACCP.",
      },
      {
        name: "Hospitality, Retail & Healthcare",
        desc: "Operational controls, service quality, safety and sector-specific management requirements.",
      },
    ],
  },
  {
    num: "03",
    title: "Sustainability & ESG",
    desc: "Environmental and sustainability requirements increasingly influence business operations, investment decisions and market access. Meridian supports organizations in understanding their environmental impacts, measuring performance and preparing for relevant sustainability frameworks and assessment requirements.",
    img: unsplashImage("1473341304170-971dccb5ac1e"),
    topics: [
      {
        name: "Reporting & Measurement",
        desc: "Sustainability and ESG Reporting · Carbon Footprint Assessment · Product Life Cycle Analysis",
      },
      {
        name: "Buildings & Certification Support",
        desc: "LEED Advisory and Certification Preparation · Mostadam Advisory and Certification Preparation · WELL and BREEAM Advisory · EcoVadis Assessment Preparation",
      },
      {
        name: "Environmental & Energy Management",
        desc: "ISO 50001 Implementation Support · Energy Audits · Environmental Management Systems",
      },
    ],
  },
  {
    num: "04",
    title: "Management & Operational Excellence",
    desc: "Compliance requirements are easier to maintain when the underlying business processes work effectively. Meridian also supports organizations in improving the way they plan, manage and deliver their operations.",
    img: unsplashImage("1524178232363-1fb2b075b655"),
    topics: [
      {
        name: "Business Process Reengineering",
        desc: "Reviewing and redesigning business processes to improve efficiency, consistency and accountability.",
      },
      {
        name: "Project Management",
        desc: "Supporting structured project delivery through recognized project management approaches, including relevant PMI and PRINCE2 practices.",
      },
      {
        name: "Business Excellence Models",
        desc: "Helping organizations assess organizational performance and identify opportunities for improvement through relevant excellence frameworks.",
      },
      {
        name: "Lean Six Sigma",
        desc: "Identifying inefficiencies, reducing process variation and improving operational performance.",
      },
      {
        name: "Supply Chain Optimization",
        desc: "Improving supply chain processes, coordination, risk management and operational reliability.",
      },
      {
        name: "Change Management",
        desc: "Supporting organizations through organizational and operational change with clearer planning, communication and implementation.",
      },
      {
        name: "Workforce Wellbeing & Occupational Health",
        desc: "Supporting workplace wellbeing and organizational practices that contribute to healthier, safer and more sustainable working environments.",
      },
    ],
  },
];
const benefits = [
  {
    title: "Control Exposure",
    desc: "Identify regulatory, operational and business risks before they become costly problems.",
  },
  {
    title: "Protect Continuity",
    desc: "Strengthen processes and controls that help operations remain consistent and reliable.",
  },
  {
    title: "Meet Market Requirements",
    desc: "Respond to the standards and expectations of customers, regulators and business partners.",
  },
  {
    title: "Prepare for Scrutiny",
    desc: "Maintain the evidence, documentation and operational practices needed for internal and external assessments.",
  },
  {
    title: "Build Confidence",
    desc: "Give employees, customers and stakeholders greater confidence in the way the organization operates.",
  },
];
const approachSteps = [
  {
    num: "1",
    title: "Assess",
    desc: "Understand the organization's current position, applicable requirements, existing systems and areas of exposure.",
  },
  {
    num: "2",
    title: "Prioritize",
    desc: "Identify the gaps that matter most and establish a practical sequence of actions based on risk, business needs and available resources.",
  },
  {
    num: "3",
    title: "Implement",
    desc: "Support the development, improvement and integration of systems, processes, documentation and employee capabilities.",
  },
  {
    num: "4",
    title: "Review",
    desc: "Evaluate progress, strengthen implementation and prepare the organization for ongoing monitoring and external assessments where applicable.",
  },
];
const processSteps = [
  {
    num: "1",
    title: "Standards in Context",
    desc: "We help organizations interpret international standards alongside the regulatory, industry and operational requirements relevant to their business.",
  },
  {
    num: "2",
    title: "Beyond Documentation",
    desc: "Our focus is on systems, processes and controls that work in everyday operations, not simply documents prepared for an audit.",
  },
  {
    num: "3",
    title: "Experience Across Industries",
    desc: "We bring experience across different sectors, organizational structures and operational environments, adapting our approach to each organization's requirements.",
  },
  {
    num: "4",
    title: "Support Through Implementation",
    desc: "From initial assessment and gap identification to implementation, internal audits and certification readiness, we help organizations progress through each stage.",
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
          <span className="tag">{"Compliance & Assurance"}</span>
          <h1>
            {"Compliance Must Work "}
            <em>Beyond</em>
            {" the Certificate."}
          </h1>
          <p className="lead">
            Meeting a requirement is only the beginning. The real test is whether your systems,
            processes and people can deliver consistently. Meridian helps organizations navigate
            international standards, regulatory obligations and industry requirements. We identify
            gaps, strengthen management systems and prepare businesses for the demands of external
            assessments and changing expectations.
          </p>
          <div className="acts">
            <Link className="btn p" to="/contact-us">
              Discuss Your Requirements ↗
            </Link>
            <a className="btn line" href="#areas">
              Explore Our Capabilities ↓
            </a>
          </div>
          <div className="compliance-stats">
            <div>
              <b>4</b>
              <span>Compliance capabilities</span>
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
            {"Different Requirements. "}
            <em>One Connected Approach.</em>
          </h2>
          <p>
            Every organization faces a different combination of standards, regulatory expectations
            and operational challenges. Meridian brings together compliance advisory, standards
            implementation, sector-specific expertise, sustainability support and business
            improvement to help organizations address those requirements in a connected way.
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
              {"A Failed Audit Is "}
              <em>Not the Only Risk.</em>
            </h2>
            <p
              style={{
              marginTop: "20px",
              maxWidth: "620px",
              lineHeight: 1.75,
              color: "#52676a",
            }}
            >
              Compliance affects more than whether an organization passes an assessment. It
              influences how decisions are made, how risks are controlled and how confidently a
              business can operate. When requirements are understood and built into everyday
              operations, organizations are better positioned to:
            </p>
            <ul className="compliance-wl">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <b>0{index + 1}</b>
                  <span>
                    {benefit.title}
                    <small
                      style={{
                        display: "block",
                        marginTop: "8px",
                        fontSize: "15px",
                        fontWeight: 400,
                        letterSpacing: 0,
                        lineHeight: 1.6,
                        color: "#52676a",
                      }}
                    >
                      {benefit.desc}
                    </small>
                  </span>
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
              {"Capability "}
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
      <section className="sec" id="approach">
        <span className="eyebrow">Our approach</span>
        <h2>
          {"First, Understand What Is Happening. "}
          <em>Then Fix What Matters.</em>
        </h2>
        <p
          style={{
              marginTop: "20px",
              maxWidth: "620px",
              lineHeight: 1.75,
              color: "#52676a",
            }}
        >
          A successful compliance programme starts with understanding the organization, its
          requirements and the gaps between current practices and expected performance. We work
          through four connected stages.
        </p>
        <div className="compliance-wc">
          {approachSteps.map((approachStep) => (
            <div key={approachStep.num}>
              <b>{approachStep.num}</b>
              <div>
                <h3>{approachStep.title}</h3>
                <p>{approachStep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="sec">
        <span className="eyebrow">The Meridian approach</span>
        <h2>
          {"Compliance Knowledge. "}
          <em>Practical Business Experience.</em>
        </h2>
        <p
          style={{
              marginTop: "20px",
              maxWidth: "620px",
              lineHeight: 1.75,
              color: "#52676a",
            }}
        >
          Understanding a standard is one thing. Applying it to the realities of an organization is
          another. Meridian helps businesses translate requirements into practical systems, clearer
          processes and stronger operational controls. Our approach connects international
          standards with the way organizations actually work.
        </p>
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
            {"Where Does Your Organization "}
            <em>Need to Be More Certain?</em>
          </h2>
          <p>
            Whether you are preparing for certification, addressing regulatory requirements or
            strengthening existing management systems, Meridian can help you identify what needs
            attention and determine the next steps. Speak with Meridian about your requirements and
            the practical steps involved.
          </p>
          <Link className="btn p" to="/contact-us">
            Discuss Your Requirements ↗
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
