import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "Environmental",
  "Social",
  "Governance",
  "GRI Standards",
  "IFRS Sustainability Disclosure Standards",
  "SASB Standards",
  "SDG mapping",
  "Materiality",
  "ESG data",
  "Report preparation",
];
const steps = [
  {
    num: "01",
    title: "Reporting scope and framework selection",
    desc: "Determine the purpose, intended audience and appropriate reporting basis. This may include GRI Standards, IFRS Sustainability Disclosure Standards, SASB Standards and relevant SDG mapping.",
  },
  {
    num: "02",
    title: "Materiality assessment",
    desc: "Identify and prioritise the sustainability impacts and topics relevant to the organisation, with appropriate stakeholder input.",
  },
  {
    num: "03",
    title: "Data and performance review",
    desc: "Review available information, identify gaps and establish the evidence needed to support disclosures.",
  },
  {
    num: "04",
    title: "Report preparation and publication",
    desc: "Develop the report, organise disclosures, prepare visualisations and support review and publication.",
  },
];
const gains = [
  "A structured account of sustainability performance.",
  "Better visibility of material ESG issues and information gaps.",
  "More consistent reporting across reporting periods.",
  "Clearer communication with customers, investors and other stakeholders.",
  "A stronger basis for sustainability targets and improvement plans.",
];
export default function SustainabilityReporting() {
  usePageMeta(
    "Sustainability Reporting Services | ESG Reports | Meridian",
    "Prepare sustainability and ESG reports with Meridian. Get support with materiality assessments, reporting frameworks, ESG data and report development.",
  );
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="rep-page">
      <section className="rep-hero dark">
        <div className="rep-wrap rep-hg">
          <div>
            <p className="rep-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Sustainability Reporting</b>
            </p>
            <h1 className="rep-h1">
              {"Give stakeholders a clear account of your environmental and social impact, "}
              <span>and how your business manages it.</span>
            </h1>
            <p className="rep-lead">
              Customers, investors, regulators and business partners increasingly want more than
              general sustainability commitments. They want information about an organisation&apos;s
              impacts, its priorities, the way it manages ESG issues and the progress it can
              demonstrate.
            </p>
            <p className="rep-lead">
              Meridian helps organisations collect and assess sustainability information, identify
              material topics and prepare reports using recognised reporting standards and
              disclosure frameworks.
            </p>
            <div className="rep-acts">
              <a className="rep-btn" href="#contact">
                Discuss Your Reporting Requirements ↗
              </a>
              <a className="rep-btn o" href="#process">
                Our reporting support ↓
              </a>
            </div>
          </div>
          <div>
            <div className="rep-orb" aria-hidden="true">
              <svg viewBox="0 0 400 400">
                <defs>
                  <path id="cp" d="M200,200 m-176,0 a176,176 0 1,1 352,0 a176,176 0 1,1 -352,0" />
                </defs>
                <g className="rep-rot">
                  <text
                    fontFamily="ui-monospace,Menlo,monospace"
                    fontSize="13"
                    letterSpacing="5.2"
                    fill="#c1d2d1"
                  >
                    <textPath href="#cp">
                      GRI STANDARDS ◆ IFRS ◆ SASB STANDARDS ◆ SDG MAPPING ◆ GRI STANDARDS ◆ IFRS ◆
                    </textPath>
                  </text>
                </g>
                <g transform="rotate(-90 200 200)" fill="none" strokeWidth="14">
                  <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,.12)" />
                  <circle cx="200" cy="200" r="112" stroke="rgba(255,255,255,.12)" />
                  <circle cx="200" cy="200" r="84" stroke="rgba(255,255,255,.12)" />
                  <circle
                    className="rep-ring"
                    cx="200"
                    cy="200"
                    r="140"
                    stroke="#f2e6a2"
                    style={{
                      "--c": 880,
                      "--o": 150,
                    }}
                  />
                  <circle
                    className="rep-ring"
                    cx="200"
                    cy="200"
                    r="112"
                    stroke="#f78d00"
                    style={{
                      "--c": 704,
                      "--o": 230,
                    }}
                  />
                  <circle
                    className="rep-ring"
                    cx="200"
                    cy="200"
                    r="84"
                    stroke="#1c7d86"
                    style={{
                      "--c": 528,
                      "--o": 200,
                    }}
                  />
                </g>
              </svg>
              <div className="rep-core">
                <div>
                  <b>ESG</b>
                  <span>One clear story</span>
                </div>
              </div>
            </div>
            <div className="rep-leg">
              <span>
                <i
                  style={{
                    background: "#f2e6a2",
                  }}
                />
                Environmental
              </span>
              <span>
                <i
                  style={{
                    background: "#f78d00",
                  }}
                />
                Social
              </span>
              <span>
                <i
                  style={{
                    background: "#1c7d86",
                  }}
                />
                Governance
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="rep-tape" aria-hidden="true">
        <div className="rep-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="rep-sec" id="what">
        <div className="rep-wrap">
          <div className="rep-sh">
            <div>
              <span className="rep-lab">01. What your report should communicate</span>
              <h2
                className="rep-h2"
                style={{
                  marginTop: "18px",
                }}
              >
                {"What should your sustainability report "}
                <em>communicate?</em>
              </h2>
            </div>
          </div>
          <div className="rep-bento rep-bento-single">
            <div className="rep-cell rep-c-def">
              <div>
                <span
                  className="rep-lab"
                  style={{
                    color: "var(--primrose)",
                  }}
                >
                  A useful report
                </span>
              </div>
              <div>
                <h3>
                  {"A useful report should explain "}
                  <em>what matters</em>
                  {
                    " to your organisation and its stakeholders, what the organisation is doing about those issues and what the results show."
                  }
                </h3>
                <p>
                  That starts with identifying material impacts, understanding stakeholder
                  expectations and reviewing the information already available across the business.
                </p>
                <p>
                  A report built around unsupported claims or disconnected figures will not give
                  readers a reliable picture of performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="rep-sec rep-proc"
        id="process"
        style={{
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="rep-wrap rep-pg dark">
          <div className="rep-sticky">
            <span className="rep-lab">02. Our reporting support</span>
            <h2
              className="rep-h2"
              style={{
                color: "#fff",
                marginTop: "18px",
              }}
            >
              {"Our reporting "}
              <span>support.</span>
            </h2>
            <div className="rep-meter" aria-hidden="true">
              <i
                style={{
                  width: ((activeStep + 1) / steps.length) * 100 + "%",
                }}
              />
            </div>
            <small>
              {"STEP "}
              {activeStep + 1}
              {" OF "}
              {steps.length}
            </small>
          </div>
          <div className="rep-stack">
            {steps.map((step, index) => (
              <article
                key={step.num}
                className={"rep-sc " + (activeStep === index ? "act" : "")}
                onClick={() => setActiveStep(index)}
              >
                <div className="rep-n">{step.num}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="rep-sec">
        <div className="rep-wrap rep-vs">
          <div className="rep-pn a">
            <span className="rep-lab">03. What your organisation gains</span>
            <h2 className="rep-h2">
              {"What your organisation "}
              <em>gains.</em>
            </h2>
            <ul>
              {gains.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rep-pn b dark">
            <span
              className="rep-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              04. Why work with Meridian?
            </span>
            <h2
              className="rep-h2"
              style={{
                color: "#fff",
              }}
            >
              {"Why work with "}
              <span>Meridian?</span>
            </h2>
            <p className="rep-pn-copy">
              We connect sustainability reporting with the operational information behind it. Our
              work considers the organisation&apos;s activities, available evidence, reporting
              requirements and the needs of its intended readers.
            </p>
            <p className="rep-pn-copy">
              We support the reporting process from initial assessment through report preparation,
              rather than treating publication as a design exercise alone.
            </p>
          </div>
        </div>
      </section>
      <section className="rep-cta dark" id="contact">
        <div className="rep-wrap rep-cg">
          <div>
            <span className="rep-lab">05. Request a Sustainability Reporting Consultation</span>
            <h2>
              {"Preparing your next "}
              <span>sustainability report?</span>
            </h2>
            <p className="rep-t">
              Whether you are preparing your first report or improving an existing one, speak with
              Meridian about the reporting requirements, data and framework relevant to your
              organisation.
            </p>
          </div>
          <EnquiryForm
            subjectPrefix="Sustainability reporting consultation"
            submitLabel="Request a Sustainability Reporting Consultation"
          />
        </div>
      </section>
    </div>
  );
}
