import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Environmental aspects",
  "Compliance obligations",
  "Life cycle",
  "Context",
  "Leadership",
  "Planning",
  "Operation",
  "Evaluation",
  "Improvement",
  "ISO 19011",
  "Lead Auditor",
];
const courseDays = [
  {
    num: "01",
    day: "DAY 1 OF 5",
    title: "EMS fundamentals",
    desc: "Introduction to environmental management, the ISO 14001:2015 structure, key terms and the PDCA approach.",
  },
  {
    num: "02",
    day: "DAY 2 OF 5",
    title: "Requirements in depth",
    desc: "Work through clauses 4 to 10: context, leadership, planning, support, operation, evaluation and improvement.",
  },
  {
    num: "03",
    day: "DAY 3 OF 5",
    title: "Audit principles & planning",
    desc: "ISO 19011 principles, audit programme management, roles of the lead auditor, and preparing the audit plan.",
  },
  {
    num: "04",
    day: "DAY 4 OF 5",
    title: "Conducting the audit",
    desc: "Opening meeting, gathering evidence, interviewing, evaluating findings and writing nonconformities.",
  },
  {
    num: "05",
    day: "DAY 5 OF 5",
    title: "Reporting, follow-up & exam",
    desc: "Closing meeting, audit report, corrective action follow-up, then the final assessment.",
  },
];
const clauses = [
  {
    code: "4",
    title: "Context of the organization",
    points: [
      "Understand the organisation and its context.",
      "Identify the needs and expectations of interested parties.",
      "Determine the scope of the EMS.",
    ],
  },
  {
    code: "5",
    title: "Leadership",
    points: [
      "Top management leadership and commitment.",
      "Environmental policy.",
      "Organisational roles, responsibilities and authorities.",
    ],
  },
  {
    code: "6",
    title: "Planning",
    points: [
      "Environmental aspects and compliance obligations.",
      "Risks and opportunities.",
      "Environmental objectives and planning to achieve them.",
    ],
  },
  {
    code: "7",
    title: "Support",
    points: [
      "Resources, competence and awareness.",
      "Internal and external communication.",
      "Documented information.",
    ],
  },
  {
    code: "8",
    title: "Operation",
    points: [
      "Operational planning and control with a life cycle perspective.",
      "Emergency preparedness and response.",
    ],
  },
  {
    code: "9",
    title: "Performance evaluation",
    points: [
      "Monitoring, measurement, analysis and evaluation.",
      "Evaluation of compliance.",
      "Internal audit and management review.",
    ],
  },
  {
    code: "10",
    title: "Improvement",
    points: ["Nonconformity and corrective action.", "Continual improvement of the EMS."],
  },
];
const pdcaPhases = [
  {
    letter: "P",
    name: "Plan",
    clauses: "Clauses 4, 5, 6 and 7",
    desc: "Understand context, secure leadership commitment, assess environmental aspects, risks and opportunities, set objectives and provide support.",
  },
  {
    letter: "D",
    name: "Do",
    clauses: "Clause 8",
    desc: "Implement the plan through operational control, with a life cycle perspective, and prepare for emergencies.",
  },
  {
    letter: "C",
    name: "Check",
    clauses: "Clause 9",
    desc: "Monitor, measure and evaluate performance and compliance, run internal audits and hold management reviews.",
  },
  {
    letter: "A",
    name: "Act",
    clauses: "Clause 10",
    desc: "Correct nonconformities and drive continual improvement of the EMS.",
  },
];
const faqs = [
  {
    q: "Who is this course for?",
    a: "Anyone who wants to audit environmental management systems: professionals in environment, health and safety, quality, compliance, or consulting.",
  },
  {
    q: "Do I need prior knowledge?",
    a: "Familiarity with environmental management and management system concepts helps. Contact us for the exact entry requirements for your intake.",
  },
  {
    q: "How is the course assessed?",
    a: "Lead auditor courses typically combine continuous assessment of workshops with a final written exam. Confirm the format for your session with our team.",
  },
  {
    q: "Can the training be delivered to my team?",
    a: "Yes. Ask about in-house delivery tailored to your organisation and sector.",
  },
];
const audience = [
  "Environmental managers",
  "Internal auditors",
  "HSE professionals",
  "Quality managers",
  "Consultants",
  "Aspiring lead auditors",
];
export default function Iso14001LeadAuditor() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeClause, setActiveClause] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const currentClause = clauses[activeClause];
  const currentPhase = pdcaPhases[activePhase];
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const segmentLength = circumference / 4;
  return (
    <div className="iso-page">
      <section className="iso-hero dark">
        <div className="iso-wrap iso-hg">
          <div>
            <p className="iso-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>ISO 14001:2015 Lead Auditor</b>
            </p>
            <h1 className="iso-h1">
              {"Audit with authority. "}
              <span>Lead environmental performance.</span>
            </h1>
            <p className="iso-lead">
              Become a qualified ISO 14001:2015 Lead Auditor and learn to plan, conduct, report and
              follow up audits of environmental management systems.
            </p>
            <div className="iso-acts">
              <Link className="iso-btn" to="/contact-us">
                Enrol on the course ↗
              </Link>
              <a className="iso-btn o" href="#clauses">
                Explore the clauses ↓
              </a>
            </div>
          </div>
          <div className="iso-orb" aria-hidden="true">
            <svg viewBox="0 0 400 400">
              <g className="iso-ring1">
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="#f2e6a2"
                  strokeOpacity=".35"
                  strokeDasharray="3 9"
                />
                <circle cx="200" cy="10" r="7" fill="#f78d00" />
              </g>
              <g className="iso-ring2">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#1c7d86" strokeWidth="2" />
                <circle cx="350" cy="200" r="6" fill="#f2e6a2" />
                <circle cx="50" cy="200" r="4" fill="#f2e6a2" opacity=".6" />
              </g>
              <g className="iso-pulse">
                <circle
                  cx="200"
                  cy="200"
                  r="108"
                  fill="#093f50"
                  stroke="#f2e6a2"
                  strokeOpacity=".4"
                  strokeWidth="2"
                />
                <path
                  d="M200 120c-38 6-62 34-62 68 0 34 24 58 62 66 38-8 62-32 62-66 0-34-24-62-62-68z"
                  fill="#145d68"
                />
                <path
                  d="M200 134v110M200 176c-18-6-30-16-38-30M200 200c20-6 34-18 42-34M200 224c-16-4-28-12-36-24"
                  stroke="#f2e6a2"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
              <text
                x="200"
                y="372"
                textAnchor="middle"
                fontFamily="ui-monospace,Menlo,monospace"
                fontSize="13"
                letterSpacing="3"
                fill="#9fbab9"
              >
                ISO 14001 · 2015
              </text>
            </svg>
          </div>
        </div>
        <div className="iso-wrap iso-stats">
          <div>
            <b>7</b>
            <span>Core clauses</span>
          </div>
          <div>
            <b>5</b>
            <span>Training days*</span>
          </div>
          <div>
            <b>PDCA</b>
            <span>Framework</span>
          </div>
          <div>
            <b>19011</b>
            <span>Audit guidance</span>
          </div>
        </div>
      </section>
      <div className="iso-tape" aria-hidden="true">
        <div className="iso-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="iso-sec" id="what">
        <div className="iso-wrap iso-wh">
          <div>
            <span className="iso-lab">What is ISO 14001:2015?</span>
            <h2 className="iso-h2">
              {"The global standard for "}
              <em>environmental</em>
              {" management."}
            </h2>
            <p className="iso-def">
              ISO 14001:2015 sets out the requirements for an Environmental Management System (EMS).
              It helps organisations manage environmental responsibilities systematically, protect
              the environment, meet compliance obligations and improve performance. The Lead Auditor
              course teaches you how to audit an EMS against it.
            </p>
          </div>
          <div>
            <span
              className="iso-lab"
              style={{
                marginBottom: "16px",
              }}
            >
              Why this course matters
            </span>
            <ul className="iso-rows">
              <li>Audit an EMS against ISO 14001:2015 with confidence.</li>
              <li>Apply recognised audit principles and techniques.</li>
              <li>Lead an audit team from planning to follow-up.</li>
              <li>Identify risks, opportunities and nonconformities.</li>
              <li>Advance a career in environmental assurance.</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="iso-sec iso-proc"
        id="process"
        style={{
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="iso-wrap iso-pg dark">
          <div className="iso-sticky">
            <span className="iso-lab">Your learning journey</span>
            <h2
              className="iso-h2"
              style={{
                color: "#fff",
                marginTop: "18px",
              }}
            >
              {"Five days to "}
              <span>lead auditor.</span>
            </h2>
            <p>
              A practical, case-study driven path from EMS fundamentals to a full audit cycle and
              assessment.
            </p>
            <div className="iso-meter" aria-hidden="true">
              <i
                style={{
                  width: `${((activeDay + 1) / 5) * 100}%`,
                }}
              />
            </div>
            <small>{courseDays[activeDay].day}</small>
          </div>
          <div className="iso-stack">
            {courseDays.map((courseDay, index) => (
              <article
                key={courseDay.num}
                className={`iso-sc ${activeDay === index ? "act" : ""}`}
                onClick={() => setActiveDay(index)}
              >
                <div className="iso-n">{courseDay.num}</div>
                <div>
                  <h3>{courseDay.title}</h3>
                  <p>{courseDay.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="iso-sec" id="clauses">
        <div className="iso-wrap iso-fr">
          <div className="iso-fc" data-big={currentClause.code}>
            <div key={currentClause.code} className="iso-fp" role="tabpanel">
              <h3>{currentClause.title}</h3>
              <span className="iso-full">
                {"Clause "}
                {currentClause.code}
                {" · ISO 14001:2015"}
              </span>
              <ul>
                {currentClause.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <span className="iso-lab">The standard, clause by clause</span>
            <h2
              className="iso-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Pick a clause. "}
              <em>See what you audit.</em>
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "var(--mut)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              Clauses 4 to 10 hold the auditable requirements of ISO 14001:2015.
            </p>
            <div className="iso-chips" role="tablist" aria-label="ISO 14001 clauses">
              {clauses.map((clause, index) => (
                <button
                  key={clause.code}
                  className="iso-chip"
                  role="tab"
                  aria-selected={activeClause === index}
                  onClick={() => setActiveClause(index)}
                >
                  {"Clause "}
                  {clause.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="iso-sec iso-pd-sec" id="pdca">
        <div className="iso-wrap">
          <div className="iso-eb dark">
            <div className="iso-ringbox">
              <svg viewBox="0 0 240 240" aria-hidden="true">
                {pdcaPhases.map((pdcaPhase, index) => (
                  <circle
                    key={pdcaPhase.letter}
                    className={`iso-seg ${activePhase === index ? "on" : ""}`}
                    cx="120"
                    cy="120"
                    r={radius}
                    strokeDasharray={`${segmentLength - 6} ${circumference - segmentLength + 6}`}
                    transform={`rotate(${index * 90 - 90 + 3} 120 120)`}
                    onClick={() => setActivePhase(index)}
                  />
                ))}
              </svg>
              <div className="iso-ctr">
                <b>{currentPhase.letter}</b>
                <span>{currentPhase.name}</span>
              </div>
            </div>
            <div>
              <span className="iso-lab">PDCA cycle</span>
              <h2>
                {"One cycle. "}
                <em>Seven clauses.</em>
              </h2>
              <p className="iso-t">
                ISO 14001 is built on Plan-Do-Check-Act. Select a stage to see how the clauses map
                to continual improvement.
              </p>
              <div className="iso-pdgrid" role="tablist" aria-label="PDCA stages">
                {pdcaPhases.map((pdcaPhase, index) => (
                  <button
                    key={pdcaPhase.letter}
                    className="iso-pdbtn"
                    role="tab"
                    aria-selected={activePhase === index}
                    onClick={() => setActivePhase(index)}
                  >
                    <b>{pdcaPhase.name}</b>
                    {pdcaPhase.clauses}
                  </button>
                ))}
              </div>
              <div key={currentPhase.letter} className="iso-pdinfo">
                <h3>
                  {currentPhase.name}
                  {" · "}
                  {currentPhase.clauses}
                </h3>
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {currentPhase.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="iso-sec"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="iso-wrap iso-vs">
          <div className="iso-pn a">
            <span className="iso-lab">What you will learn</span>
            <h2 className="iso-h2">
              {"Skills you "}
              <em>gain.</em>
            </h2>
            <ul>
              <li>Interpret ISO 14001:2015 requirements for audit purposes.</li>
              <li>Plan, conduct, report and follow up an EMS audit.</li>
              <li>Apply ISO 19011 audit principles and techniques.</li>
              <li>Write clear findings and manage nonconformities.</li>
            </ul>
          </div>
          <div className="iso-pn b dark">
            <span
              className="iso-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              Why train with Meridian?
            </span>
            <h2
              className="iso-h2"
              style={{
                color: "#fff",
              }}
            >
              {"Taught by "}
              <span>practitioners.</span>
            </h2>
            <ul>
              <li>Experienced auditors and quality professionals as trainers.</li>
              <li>Hands-on workshops, role plays and real-world case studies.</li>
              <li>Offices across Saudi Arabia, Bahrain, Canada and Pakistan.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="iso-sec iso-cmp">
        <div className="iso-wrap">
          <div
            style={{
              maxWidth: "820px",
            }}
          >
            <span className="iso-lab">Who should attend</span>
            <h2
              className="iso-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Built for people who "}
              <em>assure</em>
              {" the environment."}
            </h2>
            <div className="iso-who">
              {audience.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="iso-role">
        <div className="iso-wrap">
          <span className="iso-lab">Role of a lead auditor</span>
          <p className="iso-q">
            {"Turn audit findings into "}
            <span>real environmental improvement,</span>
            {" not just a report."}
          </p>
          <div className="iso-faq">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                open={openFaq === index}
                onClick={(event) => {
                  event.preventDefault();
                  setOpenFaq(openFaq === index ? -1 : index);
                }}
              >
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="iso-cta dark" id="contact">
        <div className="iso-wrap iso-cg">
          <div>
            <h2>
              {"Ready to audit "}
              <span>with confidence?</span>
            </h2>
            <p className="iso-t">Reserve your seat on the ISO 14001:2015 Lead Auditor course.</p>
            <Link className="iso-btn" to="/contact-us">
              Enrol today ↗
            </Link>
          </div>
          <dl className="iso-ct">
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
