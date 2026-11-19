import { Link } from "react-router-dom";
const marqueeItems = [
  "Supply Chain",
  "Lean Six Sigma",
  "Project Management",
  "Change Management",
  "Corporate Wellbeing",
  "Process Reengineering",
  "ESG",
  "ISO",
  "API Q1 / Q2",
];
const advisoryAreas = [
  {
    num: "01",
    title: "Business & Operational Improvement",
    desc: "Reviewing processes, management practices and organizational performance.",
    link: "#what",
  },
  {
    num: "02",
    title: "Sustainability & ESG Advisory",
    desc: "Addressing environmental impacts, sustainability requirements and reporting needs.",
    link: "#esg",
  },
  {
    num: "03",
    title: "Standards & Management Systems",
    desc: "Developing and improving systems around relevant international standards and industry requirements.",
    link: "#standards",
  },
];
const advisoryServices = [
  {
    num: "01",
    title: "Supply Chain Optimization",
    desc: "Reviewing procurement, supplier relationships, logistics and supply chain processes to identify inefficiencies and improve coordination.",
    link: "/services/advisory/supply-chain",
  },
  {
    num: "02",
    title: "Lean Six Sigma",
    desc: "Using structured process improvement methods to reduce waste, address variation and improve the consistency of operations.",
    link: "/services/advisory/lean-six-sigma",
  },
  {
    num: "03",
    title: "Project Management",
    desc: "Supporting project planning, governance, coordination and delivery through structured project management practices.",
    link: "/services/advisory/project-management",
  },
  {
    num: "04",
    title: "Change Management",
    desc: "Helping organizations prepare for and manage changes to their structures, processes, systems and working practices.",
    link: "/services/advisory/change-management",
  },
  {
    num: "05",
    title: "Business Process Reengineering",
    desc: "Examining existing workflows and redesigning processes to remove unnecessary steps, improve accountability and make operations more effective.",
    link: "/services/advisory/process-reengineering",
  },
  {
    num: "06",
    title: "Corporate Wellbeing",
    desc: "Developing workplace wellbeing initiatives and programmes that address employee needs and support healthier working environments.",
    link: "/services/corporate-wellbeing",
  },
];
const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    desc: "We discuss your objectives, business challenges and expectations to establish what the engagement needs to address.",
  },
  {
    step: "2",
    title: "Assessment & Analysis",
    desc: "We review existing processes, management systems and relevant requirements to identify gaps, constraints and opportunities.",
  },
  {
    step: "3",
    title: "Strategic Planning",
    desc: "We establish priorities and develop an action plan with defined activities, responsibilities and intended outcomes.",
  },
  {
    step: "4",
    title: "Implementation Support",
    desc: "We work with your team to put agreed recommendations into practice, develop systems and address challenges during implementation.",
  },
  {
    step: "5",
    title: "Monitoring & Evaluation",
    desc: "We review progress against agreed objectives and identify where further adjustments or improvements are needed.",
  },
  {
    step: "6",
    title: "Ongoing Advisory & Capacity Building",
    desc: "Where required, we provide continued guidance, professional development and knowledge transfer to support the organization's internal capabilities.",
  },
];
const sustainabilityGroups = [
  {
    className: "a",
    label: "Group A",
    title: "Measurement & Reporting",
    services: [
      {
        name: "Sustainability Reporting",
        desc: "Support with sustainability disclosures and reporting based on relevant frameworks and organizational requirements.",
        link: "/services/sustainability/reporting",
      },
      {
        name: "Carbon Footprint Assessment",
        desc: "Assessing greenhouse gas emissions across relevant operational boundaries, including Scope 1, Scope 2 and Scope 3 where applicable.",
        link: "/services/sustainability/carbon-footprint",
      },
      {
        name: "Product Life Cycle Assessment",
        desc: "Examining environmental impacts across a product's life cycle, from raw materials and production to use and end of life.",
        link: "/services/sustainability/lca",
      },
    ],
  },
  {
    className: "b dark",
    label: "Group B",
    title: "Buildings & Assessment",
    services: [
      {
        name: "Green Building Advisory",
        desc: "Advisory support relating to sustainable building requirements and assessment frameworks, including LEED, WELL and BREEAM.",
        link: "/services/sustainability/green-building-advisory",
      },
      {
        name: "Mostadam Advisory",
        desc: "Supporting organizations with applicable Mostadam requirements and preparation for assessment under Saudi Arabia's green building framework.",
        link: "/services/sustainability/mostadam",
      },
      {
        name: "EcoVadis Assessment Preparation",
        desc: "Reviewing sustainability practices, identifying gaps and helping organizations prepare the information and evidence required for EcoVadis assessment.",
        link: "/services/sustainability/ecovadis",
      },
    ],
  },
  {
    className: "c",
    label: "Group C",
    title: "Energy & Resources",
    services: [
      {
        name: "Energy Audits & Resource Optimization",
        desc: "Reviewing energy consumption and resource use to identify opportunities for more efficient operations.",
        link: "/services/sustainability/energy-audits",
      },
      {
        name: "Energy Management Systems",
        desc: "Supporting the development and implementation of energy management systems aligned with ISO 50001.",
        link: "/services/sustainability/iso-50001",
      },
    ],
  },
];
const standards = [
  {
    code: "ISO 9001",
    name: "Quality Management Systems",
    link: "/services/advisory/iso-9001",
  },
  {
    code: "ISO 31000",
    name: "Risk Management Guidelines",
    link: "/services/advisory/iso-31000",
  },
  {
    code: "ISO 14001",
    name: "Environmental Management Systems",
    link: "/services/advisory/iso-14001-environmental-management",
  },
  {
    code: "ISO 45001",
    name: "Occupational Health and Safety Management Systems",
    link: "/services/advisory/iso-45001",
  },
  {
    code: "ISO 50001",
    name: "Energy Management Systems",
    link: "/services/advisory/iso-50001",
  },
  {
    code: "ISO/IEC 27001",
    name: "Information Security Management Systems",
    link: "/services/advisory/iso-27001",
  },
  {
    code: "ISO/IEC 42001",
    name: "Artificial Intelligence Management Systems",
    link: "/services/advisory/ai-governance",
  },
  {
    code: "ISO 37001",
    name: "Anti-Bribery Management Systems",
  },
  {
    code: "ISO 22000",
    name: "Food Safety Management Systems",
    link: "/services/advisory/iso-22000",
  },
  {
    code: "ISO 41001",
    name: "Facility Management Systems",
    link: "/services/advisory/iso-41001",
  },
  {
    code: "ISO 20121",
    name: "Event Sustainability Management Systems",
    link: "/services/advisory/iso-20121",
  },
  {
    code: "API Q1 / API Q2",
    name: "Quality Management Requirements for Relevant Oil and Gas Organizations",
    link: "/services/advisory/oil-and-gas",
  },
  {
    code: "ISO/IEC 17020",
    name: "Requirements for Inspection Bodies",
    link: "/services/advisory/iso-17020",
  },
  {
    code: "ISO/IEC 17021-1",
    name: "Requirements for Bodies Providing Audit and Certification of Management Systems",
  },
  {
    code: "ISO/IEC 17025",
    name: "Requirements for Testing and Calibration Laboratories",
  },
];
const valuePoints = [
  {
    num: "01",
    title: "Start with the Actual Problem",
    desc: "We begin by understanding the organization's situation rather than assuming that the same solution will work everywhere.",
  },
  {
    num: "02",
    title: "Connect the Different Requirements",
    desc: "Business processes, management systems, people and sustainability objectives often affect one another. We consider these relationships when developing recommendations.",
  },
  {
    num: "03",
    title: "Focus on Application",
    desc: "We consider how recommendations will work within existing operations, resources and responsibilities.",
  },
  {
    num: "04",
    title: "Develop Internal Capability",
    desc: "We support knowledge transfer and professional development so that people within the organization can understand and maintain the improvements.",
  },
];
const cardTextStyle = {
  margin: "18px 0 0",
  fontSize: "15px",
  lineHeight: 1.6,
  color: "var(--mut)",
};
export default function Advisory() {
  return (
    <div className="adv-page">
      <section className="adv-hero dark">
        <div className="adv-hero-bg" aria-hidden="true" />
        <div className="adv-wrap">
          <p className="adv-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <b>Advisory</b>
          </p>
          <h1 className="adv-h1">
            Better Decisions. Better Business Systems.
            <span>Advisory for the way your business needs to work.</span>
          </h1>
          <p className="adv-lead">
            From operational improvement and international standards to sustainability and
            organizational development, Meridian helps businesses identify what needs to change and
            put practical solutions in place.
          </p>
          <div className="adv-acts">
            <Link className="adv-btn" to="/contact-us">
              Talk to Our Advisory Team ↗
            </Link>
            <a className="adv-btn o" href="#expertise">
              Explore Our Expertise ↓
            </a>
          </div>
        </div>
      </section>
      <div className="adv-wrap">
        <div className="adv-strip">
          <div>
            <b>6</b>
            <span>{"Business & operational improvement services"}</span>
          </div>
          <div>
            <b>8</b>
            <span>{"Sustainability & ESG advisory services"}</span>
          </div>
          <div>
            <b>15</b>
            <span>{"International standards & frameworks"}</span>
          </div>
          <div>
            <b>6</b>
            <span>Steps in our advisory process</span>
          </div>
        </div>
      </div>
      <div
        className="adv-tape"
        aria-hidden="true"
        style={{
          marginTop: "clamp(60px, 8vw, 110px)",
        }}
      >
        <div className="adv-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="adv-sec" id="intro">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">The work behind better performance</span>
            <h2 className="adv-h2">
              {"Good Advice Starts with "}
              <em>Understanding the Business.</em>
            </h2>
            <p>
              Every organization has its own way of working. Its processes, people, systems and
              priorities determine where problems develop and where improvements can make a
              difference. Meridian begins by understanding those conditions. We examine the issues
              affecting performance, identify areas that need attention and work with organizations
              to develop practical responses.
            </p>
            <p
              style={{
                marginTop: "16px",
              }}
            >
              Our advisory work brings together three connected areas:
            </p>
          </div>
          <div className="adv-mg">
            {advisoryAreas.map((advisoryArea) => (
              <a key={advisoryArea.num} className="adv-mc" href={advisoryArea.link}>
                <b>{advisoryArea.num}</b>
                <div>
                  <h3>{advisoryArea.title}</h3>
                  <p style={cardTextStyle}>{advisoryArea.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="adv-sec" id="expertise">
        <div className="adv-wrap">
          <div
            className="adv-ctr"
            style={{
              marginBottom: 0,
            }}
          >
            <span className="adv-lab">Where we can help</span>
            <h2 className="adv-h2">
              {"Different Challenges. "}
              <em>Connected Expertise.</em>
            </h2>
            <p>
              Organizations approach advisory work for different reasons. Some need to improve
              operational performance. Others need to address sustainability requirements or develop
              management systems. Meridian brings these areas together to help organizations
              identify the work that matters and determine how to approach it.
            </p>
          </div>
        </div>
      </section>
      <section className="adv-sec" id="what">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">{"01 / Business & Operational Improvement"}</span>
            <h2 className="adv-h2">
              {"Improve the Work "}
              <em>Behind the Results.</em>
            </h2>
            <p>
              Inefficient processes, unclear responsibilities and disconnected business functions
              can affect performance across an organization. We help businesses review how work is
              currently carried out, identify areas for improvement and introduce better ways of
              managing operations.
            </p>
          </div>
          <div className="adv-mg">
            {advisoryServices.map((advisoryService) => (
              <Link key={advisoryService.num} className="adv-mc" to={advisoryService.link}>
                <b>{advisoryService.num}</b>
                <div>
                  <h3>{advisoryService.title}</h3>
                  <p style={cardTextStyle}>{advisoryService.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="adv-sec adv-proc dark" id="process">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">How we approach the work</span>
            <h2 className="adv-h2">
              {"Understand the Situation. Set the Priorities. "}
              <span>Make the Changes.</span>
            </h2>
            <p>
              Each advisory engagement starts with the organization's requirements and current
              position. The work then moves from assessment and planning to implementation and
              review.
            </p>
          </div>
          <div className="adv-tl">
            {processSteps.map((processStep) => (
              <article key={processStep.step}>
                <div className="adv-dot">{processStep.step}</div>
                <div className="adv-bx">
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="adv-sec" id="esg">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">{"02 / Sustainability & ESG Advisory"}</span>
            <h2 className="adv-h2">
              {"Put Sustainability "}
              <em>into Practice.</em>
            </h2>
            <p>
              Environmental performance, resource consumption and sustainability requirements
              increasingly affect how organizations plan, operate and report their activities.
              Meridian helps businesses assess their current position, understand relevant
              requirements and identify practical areas for improvement.
            </p>
            <div
              style={{
                marginTop: "16px",
              }}
            >
              <Link
                to="/services/sustainability"
                className="adv-btn"
                style={{
                  padding: "10px 18px",
                  fontSize: "13px",
                }}
              >
                Explore Sustainability Services ↗
              </Link>
            </div>
          </div>
          <div className="adv-vs3">
            {sustainabilityGroups.map((group) => (
              <div key={group.label} className={`adv-pn ${group.className}`}>
                <span
                  className="adv-lab"
                  style={
                    group.className.startsWith("b")
                      ? {
                          color: "var(--primrose)",
                        }
                      : undefined
                  }
                >
                  {group.label}
                </span>
                <h3>{group.title}</h3>
                <ul>
                  {group.services.map((service) => (
                    <li key={service.name}>
                      <span>
                        <Link
                          to={service.link}
                          style={{
                            color: "inherit",
                          }}
                        >
                          {service.name} ↗
                        </Link>
                        <small
                          style={{
                            display: "block",
                            marginTop: "6px",
                            fontWeight: 400,
                            opacity: 0.8,
                          }}
                        >
                          {service.desc}
                        </small>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="adv-sec adv-stdwrap" id="standards">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">{"03 / Standards & Management Systems"}</span>
            <h2 className="adv-h2">
              {"Build Systems Around the "}
              <em>Requirements That Matter.</em>
            </h2>
            <p>
              International standards provide organizations with structured ways to manage quality,
              risk, safety, environmental performance, information security and other business
              requirements. Meridian helps organizations understand the standards relevant to their
              activities and apply their requirements through management system development,
              implementation support, internal audits, training and preparation for external
              certification assessments.
            </p>
            <p
              style={{
                marginTop: "16px",
                fontSize: "14px",
              }}
            >
              Meridian provides consultancy, management system implementation and
              certification-readiness support within its confirmed scope. It does not award external
              ISO certifications or grant accreditation. Certification and accreditation decisions
              remain with the relevant independent bodies.
            </p>
            <div
              style={{
                marginTop: "16px",
              }}
            >
              <Link
                to="/services/compliance"
                className="adv-btn"
                style={{
                  padding: "10px 18px",
                  fontSize: "13px",
                }}
              >
                Explore Compliance Services ↗
              </Link>
            </div>
          </div>
          <ul className="adv-std">
            {standards.map((standard) => (
              <li
                key={standard.code}
                style={
                  standard.link
                    ? {
                        border: "1px solid var(--accent, #a6ff00)",
                      }
                    : undefined
                }
              >
                {standard.link ? (
                  <Link
                    to={standard.link}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <b>
                      {standard.code}
                      {" ↗"}
                    </b>
                    <span>{standard.name}</span>
                  </Link>
                ) : (
                  <>
                    <b>{standard.code}</b>
                    <span>{standard.name}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="adv-sec" id="why">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">The value of the work</span>
            <h2 className="adv-h2">
              {"Advice Should Lead to "}
              <em>Better Ways of Working.</em>
            </h2>
            <p>
              An advisory engagement should leave an organization with more than a set of
              recommendations. It should help people understand what needs to change, why it
              matters and what to do next. Meridian brings together business improvement,
              management systems, professional training and specialist advisory services to address
              the practical requirements of each organization.
            </p>
          </div>
          <div
            className="adv-mg"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            }}
          >
            {valuePoints.map((valuePoint) => (
              <div key={valuePoint.num} className="adv-mc">
                <b>{valuePoint.num}</b>
                <div>
                  <h3>{valuePoint.title}</h3>
                  <p style={cardTextStyle}>{valuePoint.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="adv-role">
        <div className="adv-wrap">
          <span className="adv-lab">Our promise</span>
          <p className="adv-q">
            {"Empowering your business with "}
            <span>sustainable strategies</span>
            {" and people-centered excellence."}
          </p>
        </div>
      </section>
      <section className="adv-cta dark" id="contact">
        <div className="adv-wrap adv-cg">
          <div>
            <h2
              className="adv-h2"
              style={{
                color: "#fff",
              }}
            >
              {"What Needs to Work Better "}
              <span>in Your Organization?</span>
            </h2>
            <p className="adv-t">
              Whether the priority is improving operations, reviewing management systems, addressing
              sustainability requirements or managing organizational change, start with a discussion
              about the issue you need to address. Meridian can help you identify the areas that
              need attention and determine the next steps.
            </p>
            <Link className="adv-btn" to="/contact-us">
              Talk to Our Advisory Team ↗
            </Link>
          </div>
          <dl className="adv-ct">
            <div>
              <dt>Call us</dt>
              <dd>
                <a
                  href="tel:+966509394640"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  +966 50 939 4640
                </a>
              </dd>
            </div>
            <div>
              <dt>Need support</dt>
              <dd>
                <a
                  href="mailto:info@meqmp.com"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  info@meqmp.com
                </a>
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
