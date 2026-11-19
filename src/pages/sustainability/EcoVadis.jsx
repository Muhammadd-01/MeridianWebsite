import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "EcoVadis",
  "Environment",
  "Labour & Human Rights",
  "Ethics",
  "Sustainable Procurement",
  "Evidence",
  "Gap identification",
  "Improvement planning",
  "Scorecard review",
];
const themes = ["Environment", "Labour & Human Rights", "Ethics", "Sustainable Procurement"];
const support = [
  {
    h: "Initial assessment",
    p: "Review existing policies, procedures, certifications, performance data and supporting records against the relevant assessment areas.",
  },
  {
    h: "Gap identification",
    p: "Identify missing documentation, incomplete evidence and areas where sustainability practices need further development.",
  },
  {
    h: "Improvement planning",
    p: "Help prioritise actions relating to environmental management, labour and human rights, business ethics and sustainable procurement.",
  },
  {
    h: "Questionnaire and evidence preparation",
    p: "Help organise responses and supporting documents for submission through the EcoVadis platform.",
  },
  {
    h: "Scorecard review",
    p: "Once results are available, review the assessment feedback and identify priorities for the next improvement cycle.",
  },
];
const gains = [
  "A clearer view of its current sustainability management practices.",
  "Better organised policies, procedures and supporting evidence.",
  "Visibility of gaps across the four assessment themes.",
  "A prioritised improvement plan.",
  "Better preparation for customer sustainability requests.",
];
const icons = [
  [
    <circle key="a" cx="22" cy="22" r="17" />,
    <path key="b" d="M5 22h34M22 5c6 5 8 11 8 17s-2 12-8 17c-6-5-8-11-8-17s2-12 8-17z" />,
  ],
  [
    <rect key="a" x="8" y="5" width="28" height="34" rx="4" />,
    <path key="b" d="M15 15h14M15 22h14M15 29h8" />,
  ],
  [
    <path key="a" d="M3 22s7-13 19-13 19 13 19 13-7 13-19 13S3 22 3 22z" />,
    <circle key="b" cx="22" cy="22" r="5" />,
  ],
  [<path key="a" d="M6 36l10-12 8 6 14-20" />, <path key="b" d="M28 10h10v10" />],
  [
    <circle key="a" cx="16" cy="15" r="6" />,
    <path key="b" d="M4 36c0-7 5-11 12-11s12 4 12 11" />,
    <path key="c" d="M30 20l4 4 8-9" />,
  ],
];
const radarPoints = [
  { cx: 200, cy: 92, tx: 200, ty: 54, anchor: "middle", label: "ENVIRONMENT" },
  { cx: 263, cy: 170, tx: 392, ty: 174, anchor: "end", label: "LABOUR & HR" },
  { cx: 200, cy: 240, tx: 200, ty: 296, anchor: "middle", label: "ETHICS" },
  { cx: 146, cy: 170, tx: 8, ty: 174, anchor: "start", label: "PROCUREMENT" },
];
export default function EcoVadis() {
  usePageMeta(
    "EcoVadis Assessment Support and Consulting | Meridian",
    "Prepare for your EcoVadis sustainability assessment with support in gap analysis, documentation, improvement planning and scorecard review.",
  );
  const [activeTheme, setActiveTheme] = useState(0);
  return (
    <div className="eco-page">
      <section className="eco-hero dark">
        <div className="eco-hero-bg" aria-hidden="true" />
        <div className="eco-wrap eco-hg">
          <div>
            <p className="eco-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>EcoVadis Assessment Support</b>
            </p>
            <h1>
              {"When a customer asks for your EcoVadis score, "}
              <span>are you ready to show how your business manages sustainability?</span>
            </h1>
            <p className="eco-lead">
              For organisations supplying multinational companies and international supply chains,
              sustainability assessments can influence how customers evaluate suppliers and
              business partners.
            </p>
            <p className="eco-lead">
              EcoVadis assesses a company&apos;s sustainability management practices across
              Environment, Labour &amp; Human Rights, Ethics and Sustainable Procurement. Meridian
              helps organisations review their existing practices, identify evidence gaps and
              prepare for the assessment process.
            </p>
            <div className="eco-acts">
              <a className="eco-btn" href="#contact">
                {"Discuss Your EcoVadis Assessment "}
                <i>↗</i>
              </a>
              <a className="eco-btn o" href="#roadmap">
                {"Our EcoVadis support "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="eco-glass" aria-label="The four EcoVadis assessment themes">
            <div className="top">
              <span>Assessment themes</span>
              <b>4 themes</b>
            </div>
            <svg
              className="eco-radar"
              viewBox="0 0 400 340"
              role="img"
              aria-label="The four EcoVadis assessment themes"
            >
              <g>
                <polygon className="eco-rg" points="200,138 232,170 200,202 168,170" />
                <polygon className="eco-rg" points="200,106 264,170 200,234 136,170" />
                <polygon className="eco-rg" points="200,75 295,170 200,265 105,170" />
                <line className="eco-ra" x1="200" y1="75" x2="200" y2="265" />
                <line className="eco-ra" x1="105" y1="170" x2="295" y2="170" />
              </g>
              <polygon className="eco-rp" points="200,92 263,170 200,240 146,170" />
              {radarPoints.map((point, index) => (
                <g key={point.label}>
                  <circle
                    className={`eco-rd ${activeTheme === index ? "on" : ""}`}
                    cx={point.cx}
                    cy={point.cy}
                    r="4.5"
                    onClick={() => setActiveTheme(index)}
                  />
                  <text
                    className={`eco-rt ${activeTheme === index ? "on" : ""}`}
                    x={point.tx}
                    y={point.ty}
                    textAnchor={point.anchor}
                    onClick={() => setActiveTheme(index)}
                  >
                    {point.label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="cap">Illustration of the four themes only. Not a score.</p>
          </div>
        </div>
        <div className="eco-wrap eco-life">
          {themes.map((theme, index) => (
            <div
              key={theme}
              onClick={() => setActiveTheme(index)}
              style={{
                cursor: "pointer",
              }}
            >
              <small>Theme {String(index + 1).padStart(2, "0")}</small>
              <b>{theme}</b>
            </div>
          ))}
        </div>
      </section>
      <div className="eco-tape" aria-hidden="true">
        <div className="eco-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="eco-sec" id="what">
        <div className="eco-wrap">
          <div className="eco-wh eco-wh-single">
            <div>
              <span className="eco-lab">01. What your assessment needs to demonstrate</span>
              <h2 className="eco-h2">
                {"What does your assessment "}
                <em>need to demonstrate?</em>
              </h2>
              <p className="def">
                A strong response is not simply a collection of policies. It needs to show{" "}
                <b>how sustainability commitments are put into practice</b> and how the organisation
                tracks the results.
              </p>
              <p className="def">
                That means reviewing what is documented, what is implemented, which business areas
                are covered and what evidence is available.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="eco-sec eco-proc dark"
        id="roadmap"
        style={{
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div className="eco-wrap">
          <div className="eco-pr-h">
            <div>
              <span className="eco-lab">02. Our EcoVadis support</span>
              <h2 className="eco-h2">
                {"Our EcoVadis "}
                <span>support.</span>
              </h2>
            </div>
          </div>
          <div className="eco-road eco-road-five">
            <div className="fill" />
            {support.map((step, index) => (
              <div key={step.h} className="eco-st">
                <span className="dot" />
                <div className="card">
                  <div className="n">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.h}</h3>
                  <p>{step.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="eco-sec eco-ben-sec" id="benefits">
        <div className="eco-wrap">
          <div className="intro">
            <span className="eco-lab">03. What your organisation gains</span>
            <h2 className="eco-h2">
              {"What your organisation "}
              <em>gains.</em>
            </h2>
          </div>
          <ul className="eco-bl eco-bl-five">
            {gains.map((item, index) => (
              <li key={item}>
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  stroke="#f78d00"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[index % icons.length]}
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="eco-sec eco-mer dark" id="meridian">
        <div className="eco-wrap">
          <div className="eco-mer-h">
            <div>
              <span className="eco-lab">04. Why work with Meridian?</span>
              <h2 className="eco-h2">
                {"Why work with "}
                <em>Meridian?</em>
              </h2>
            </div>
            <div>
              <p>
                EcoVadis preparation requires an understanding of both sustainability practices and
                the evidence used to demonstrate them.
              </p>
              <p>
                Meridian works with your team to connect existing policies and operational
                activities with the assessment requirements, helping turn gaps into practical
                improvement actions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="eco-cta-w" id="contact">
        <div className="eco-wrap">
          <div className="eco-cta">
            <div>
              <span className="eco-lab">05. Request EcoVadis Support</span>
              <h2>
                {"Preparing for an "}
                <span>EcoVadis assessment?</span>
              </h2>
              <p className="t">
                Whether this is your first assessment or a review of an existing scorecard, Meridian
                can help you understand the requirements and prepare your organisation.
              </p>
            </div>
            <EnquiryForm subjectPrefix="EcoVadis support request" submitLabel="Request EcoVadis Support" />
          </div>
        </div>
      </section>
    </div>
  );
}
