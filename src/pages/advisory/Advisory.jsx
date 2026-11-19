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
const advisoryServices = [
  {
    num: "01",
    title: "Supply Chain",
    link: "/services/advisory/supply-chain",
  },
  {
    num: "02",
    title: "Lean Six Sigma",
    link: "/services/advisory/lean-six-sigma",
  },
  {
    num: "03",
    title: "Project Management",
    link: "/services/advisory/project-management",
  },
  {
    num: "04",
    title: "Change Management",
    link: "/services/advisory/change-management",
  },
  {
    num: "05",
    title: "Corporate Wellbeing",
    link: "/services/corporate-wellbeing",
  },
  {
    num: "06",
    title: "Process Reengineering",
    link: "/services/advisory/process-reengineering",
  },
];
const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    desc: "Understand your needs and define tailored objectives.",
  },
  {
    step: "2",
    title: "Strategic Planning",
    desc: "Develop customized action plans aligned with your goals.",
  },
  {
    step: "3",
    title: "Implementation Support",
    desc: "Guide execution with hands-on support to ensure success.",
  },
  {
    step: "4",
    title: "Monitoring & Evaluation",
    desc: "Track progress and refine strategies for sustainable results.",
  },
  {
    step: "5",
    title: "Continuous Advisory & Capacity Building",
    desc: "Provide ongoing guidance and facilitate knowledge transfer to empower your team.",
  },
  {
    step: "6",
    title: "Assessment & Analysis",
    desc: "Conduct deep evaluations to identify critical challenges and improvement opportunities.",
  },
];
const standards = [
  {
    code: "ISO 31000",
    name: "Risk Management",
    link: "/services/advisory/iso-31000",
  },
  {
    code: "ISO 50001",
    name: "Energy Management",
    link: "/services/advisory/iso-50001",
  },
  {
    code: "ISO 9001",
    name: "Quality Management",
    link: "/services/advisory/iso-9001",
  },
  {
    code: "ISO 41001",
    name: "Facility Management",
    link: "/services/advisory/iso-41001",
  },
  {
    code: "ISO 27001",
    name: "Information Security",
    link: "/services/advisory/iso-27001",
  },
  {
    code: "ISO 42001",
    name: "AI Management Systems",
    link: "/services/advisory/ai-governance",
  },
  {
    code: "ISO 22000",
    name: "Food Safety Management",
    link: "/services/advisory/iso-22000",
  },
  {
    code: "ISO 37001",
    name: "Anti-Bribery Management",
  },
  {
    code: "ISO 14001",
    name: "Environmental Management",
    link: "/services/advisory/iso-14001-environmental-management",
  },
  {
    code: "ISO 20121",
    name: "Sustainable Event Management",
    link: "/services/advisory/iso-20121",
  },
  {
    code: "ISO 17020",
    name: "Inspection Body Requirements",
    link: "/services/advisory/iso-17020",
  },
  {
    code: "ISO 45001",
    name: "Occupational Health & Safety",
    link: "/services/advisory/iso-45001",
  },
  {
    code: "ISO 17021",
    name: "Certification Body Requirements",
  },
  {
    code: "ISO 17025",
    name: "Laboratory Testing & Calibration",
  },
  {
    code: "API Q1 / Q2",
    name: "Oil & Gas Quality Standards",
    link: "/services/advisory/oil-and-gas",
  },
];
export default function Advisory() {
  return (
    <div className="adv-page">
      <section className="adv-hero dark">
        <div className="adv-hero-bg" aria-hidden="true" />
        <div className="adv-wrap">
          <p className="adv-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services">Services</Link>
            {" / "}
            <b>Advisory</b>
          </p>
          <h1 className="adv-h1">
            Comprehensive advisory solutions
            <span>{"Strategies, standards & sustainable growth"}</span>
          </h1>
          <p className="adv-lead">
            Empowering your business with sustainable strategies and people-centered excellence.
          </p>
          <div className="adv-acts">
            <Link className="adv-btn" to="/contact-us">
              Book a free consultation ↗
            </Link>
            <a className="adv-btn o" href="#standards">
              View our standards ↓
            </a>
          </div>
        </div>
      </section>
      <div className="adv-wrap">
        <div className="adv-strip">
          <div>
            <b>6</b>
            <span>{"Management & excellence disciplines"}</span>
          </div>
          <div>
            <b>9</b>
            <span>{"Sustainability & ESG services"}</span>
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
      <section className="adv-sec" id="what">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">{"Management strategies & excellence models"}</span>
            <h2 className="adv-h2">
              {"Streamline operations. "}
              <em>Boost efficiency.</em>
            </h2>
            <p>
              Streamline operations, boost efficiency, and embed sustainability with our expert
              advisory services.
            </p>
          </div>
          <div className="adv-mg">
            {advisoryServices.map((advisoryService) => (
              <Link key={advisoryService.num} className="adv-mc" to={advisoryService.link}>
                <b>{advisoryService.num}</b>
                <h3>{advisoryService.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="adv-sec adv-proc dark" id="process">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">Our advisory process</span>
            <h2 className="adv-h2">
              {"Your roadmap to "}
              <span>transformation.</span>
            </h2>
            <p>Your roadmap to transformation — a simple journey.</p>
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
            <span className="adv-lab">{"Sustainability & ESG Integration"}</span>
            <h2 className="adv-h2">
              {"Growth that is "}
              <em>sustainable.</em>
            </h2>
            <p>
              Integrate environmental, social, and governance (ESG) principles seamlessly across all
              operational levels to drive sustainable growth.
            </p>
            <div
              style={{
                marginTop: "16px",
              }}
            >
              <Link
                to="/services/advisory/sustainability-esg-integration"
                className="adv-btn"
                style={{
                  padding: "10px 18px",
                  fontSize: "13px",
                }}
              >
                {"Explore Sustainability & ESG Integration ↗"}
              </Link>
            </div>
          </div>
          <div className="adv-vs3">
            <div className="adv-pn a">
              <span className="adv-lab">Certifications</span>
              <h3>Recognised credentials.</h3>
              <ul>
                <li>
                  <Link
                    to="/services/sustainability/leed"
                    style={{
                      color: "inherit",
                    }}
                  >
                    LEED Certification ↗
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/ecovadis"
                    style={{
                      color: "inherit",
                    }}
                  >
                    EcoVadis Certification (CSR, ethics, environment) ↗
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/mostadam"
                    style={{
                      color: "inherit",
                    }}
                  >
                    Mostadam Certification (Saudi Arabia Vision 2030) ↗
                  </Link>
                </li>
              </ul>
            </div>
            <div className="adv-pn b dark">
              <span
                className="adv-lab"
                style={{
                  color: "var(--primrose)",
                }}
              >
                {"Reporting & impact"}
              </span>
              <h3>Measure what matters.</h3>
              <ul>
                <li>
                  <Link
                    to="/services/sustainability/reporting"
                    style={{
                      color: "inherit",
                    }}
                  >
                    Sustainability Reporting (GRI / SASB / SDGs) ↗
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/carbon-footprint"
                    style={{
                      color: "inherit",
                    }}
                  >
                    Carbon Footprint Assessment ↗
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/lca"
                    style={{
                      color: "inherit",
                    }}
                  >
                    Product Life Cycle Analysis (LCA) ↗
                  </Link>
                </li>
              </ul>
            </div>
            <div className="adv-pn c">
              <span className="adv-lab">{"Buildings & energy"}</span>
              <h3>Efficient by design.</h3>
              <ul>
                <li>
                  <Link
                    to="/services/sustainability/green-building-advisory"
                    style={{
                      color: "inherit",
                    }}
                  >
                    Green Building Advisory ↗
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/energy-audits"
                    style={{
                      color: "inherit",
                    }}
                  >
                    {"Energy Audits & Resource Optimization ↗"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/iso-50001"
                    style={{
                      color: "inherit",
                    }}
                  >
                    {"Energy Management Systems & ISO 50001 ↗"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/sustainability/training"
                    style={{
                      color: "inherit",
                    }}
                  >
                    {"Sustainability Training & Capacity Building ↗"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="adv-sec adv-stdwrap" id="standards">
        <div className="adv-wrap">
          <div className="adv-ctr">
            <span className="adv-lab">{"International standards & certification frameworks"}</span>
            <h2 className="adv-h2">
              {"Certified with "}
              <em>confidence.</em>
            </h2>
            <p>
              We guide your organization to achieve and maintain global certifications with ease and
              confidence.
            </p>
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
                    : void 0
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
                    <span>
                      {standard.name}
                      {" (Lead Auditor)"}
                    </span>
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
              {"Need to reach "}
              <span>us?</span>
            </h2>
            <p className="adv-t">
              We’re here to answer all your questions. Fill out our contact form and we’ll connect
              you with the people who can help.
            </p>
            <Link className="adv-btn" to="/contact-us">
              Contact us ↗
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
