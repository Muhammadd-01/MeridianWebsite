import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "Mostadam",
  "Saudi green building",
  "Rating pathway",
  "Design stage",
  "Construction evidence",
  "Assessment coordination",
  "Energy",
  "Water",
  "Materials",
  "Indoor conditions",
];
const processSteps = [
  {
    num: "01",
    title: "Rating pathway and project assessment",
    desc: "Review the project type, stage and intended use to identify the applicable Mostadam assessment pathway.",
  },
  {
    num: "02",
    title: "Design-stage coordination",
    desc: "Review relevant criteria with the project team and identify design measures, documentation and responsibilities.",
  },
  {
    num: "03",
    title: "Construction and evidence review",
    desc: "Help organise records, specifications, site evidence and supporting information required for assessment.",
  },
  {
    num: "04",
    title: "Assessment coordination",
    desc: "Support the project team in preparing information for the applicable Mostadam review and addressing clarification requests.",
  },
];
const outcomes = [
  "Better consideration of energy and water performance.",
  "Improved management of materials and construction impacts.",
  "Greater attention to indoor environmental conditions.",
  "Clearer sustainability responsibilities across the project team.",
  "Documented progress against the applicable Mostadam criteria.",
];
const icons = [
  [<path key="a" d="M24 4L10 24h10l-2 16 16-22H24z" />],
  [<path key="a" d="M6 38V20L22 8l16 12v18" />, <path key="b" d="M16 38V26h12v12" />],
  [
    <path key="a" d="M22 4l14 6v10c0 10-6 17-14 20C14 37 8 30 8 20V10z" />,
    <path key="b" d="M15 21l5 5 9-10" />,
  ],
  [<path key="a" d="M6 34l10-10 7 6 15-18" />, <path key="b" d="M28 12h10v10" />],
  [
    <rect key="a" x="8" y="5" width="28" height="34" rx="4" />,
    <path key="b" d="M15 15h14M15 22h14M15 29h8" />,
  ],
];
export default function Mostadam() {
  usePageMeta(
    "Mostadam Certification Support | Saudi Green Building | Meridian",
    "Get support with Mostadam project assessment, design coordination, sustainability documentation and certification review in Saudi Arabia.",
  );
  const [activeStep, setActiveStep] = useState(0);
  const chartBars = [
    {
      x: 18,
      w: 58,
      h: 170,
    },
    {
      x: 84,
      w: 48,
      h: 250,
    },
    {
      x: 140,
      w: 64,
      h: 330,
      spire: true,
    },
    {
      x: 212,
      w: 52,
      h: 220,
    },
    {
      x: 272,
      w: 44,
      h: 150,
    },
    {
      x: 322,
      w: 60,
      h: 110,
    },
  ];
  return (
    <div className="mos-page">
      <section className="mos-hero dark">
        <div className="mos-hero-bg" aria-hidden="true" />
        <div className="mos-wrap mos-hg">
          <div>
            <p className="mos-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Mostadam Certification Support</b>
            </p>
            <h1>
              {"Planning a building project in Saudi Arabia? "}
              <span>Address sustainability requirements from the design stage.</span>
            </h1>
            <p className="mos-lead">
              Building performance in the Kingdom must respond to local conditions, resource demands
              and the requirements of the applicable sustainability assessment.
            </p>
            <p className="mos-lead">
              Mostadam is Saudi Arabia&apos;s building sustainability rating system. It evaluates
              buildings and communities across environmental performance and aspects of occupant
              quality of life. Meridian supports developers, owners and project teams in
              understanding applicable Mostadam requirements, planning their response and
              coordinating the information needed for assessment.
            </p>
            <div className="mos-acts">
              <a className="mos-btn" href="#contact">
                {"Discuss Your Mostadam Project "}
                <i>↗</i>
              </a>
              <a className="mos-btn o" href="#pathway">
                {"Our Mostadam support "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="mos-sky" aria-hidden="true">
            <div className="mos-badge">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="mosCp" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
                </defs>
                <text
                  fontFamily="ui-monospace,Menlo,monospace"
                  fontSize="10.5"
                  letterSpacing="3.4"
                  fill="#f2e6a2"
                >
                  <textPath href="#mosCp">MOSTADAM · SAUDI GREEN BUILDING ·</textPath>
                </text>
                <circle cx="60" cy="60" r="5" fill="#f78d00" />
              </svg>
            </div>
            <svg viewBox="0 0 400 440">
              <g className="mos-sun">
                <circle
                  cx="330"
                  cy="80"
                  r="46"
                  fill="none"
                  stroke="#f2e6a2"
                  strokeOpacity="0.35"
                  strokeDasharray="3 7"
                />
                <circle cx="330" cy="80" r="24" fill="#f78d00" />
              </g>
              <g>
                {chartBars.map((chartBar, index) => {
                  const roofY = 420 - chartBar.h;
                  const columns = Math.floor((chartBar.w - 14) / 16);
                  const rows = Math.floor((chartBar.h - 18) / 22);
                  const windows = [];
                  for (let row = 0; row < rows; row++) {
                    for (let col = 0; col < columns; col++) {
                      const windowX = chartBar.x + 10 + col * 16;
                      const windowY = roofY + 12 + row * 22;
                      const isLit = (row * 7 + col * 13 + index * 5) % 3 !== 0;
                      windows.push(
                        <rect
                          key={`${row}-${col}`}
                          className={`mos-win ${isLit ? "lit" : ""}`}
                          x={windowX}
                          y={windowY}
                          width="9"
                          height="12"
                          rx="1.5"
                        />,
                      );
                    }
                  }
                  return (
                    <g key={index}>
                      <rect
                        x={chartBar.x}
                        y={roofY}
                        width={chartBar.w}
                        height={chartBar.h}
                        rx="4"
                        fill="#093f50"
                        stroke="#2f6070"
                      />
                      {windows}
                      {chartBar.spire && (
                        <>
                          <path
                            d={`M${chartBar.x + chartBar.w / 2} ${roofY}V${roofY - 34}`}
                            stroke="#f2e6a2"
                            strokeWidth="2"
                          />
                          <circle
                            cx={chartBar.x + chartBar.w / 2}
                            cy={roofY - 38}
                            r="4"
                            fill="#f78d00"
                          />
                        </>
                      )}
                    </g>
                  );
                })}
              </g>
              <rect x="0" y="420" width="400" height="2" fill="#f2e6a2" opacity="0.4" />
            </svg>
          </div>
        </div>
        <div className="mos-wrap mos-life">
          <div>
            <small>Stage 01</small>
            <b>Design</b>
          </div>
          <div>
            <small>Stage 02</small>
            <b>Construction</b>
          </div>
          <div>
            <small>Stage 03</small>
            <b>Assessment</b>
          </div>
        </div>
      </section>
      <div className="mos-tape" aria-hidden="true">
        <div className="mos-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="mos-sec" id="what">
        <div className="mos-wrap">
          <div className="mos-wh">
            <div>
              <span className="mos-lab">01. Early project attention</span>
              <h2 className="mos-h2">
                {"Why Mostadam needs "}
                <em>early project attention.</em>
              </h2>
              <p className="def">
                <b>
                  Energy use, water demand, materials, indoor conditions and construction decisions
                </b>{" "}
                all affect building sustainability.
              </p>
              <p className="def">
                If these matters are considered too late, project teams may face redesign, missing
                documentation or difficulty demonstrating compliance with the applicable criteria.
              </p>
              <p className="def">
                Early coordination gives designers, engineers, contractors and owners a clearer
                understanding of the requirements.
              </p>
            </div>
            <div className="mos-seal">
              <span className="mos-lab">Saudi Arabia</span>
              <div>
                <div className="mos-ar" lang="ar" dir="rtl">
                  مستدام
                </div>
                <span className="mean">Mostadam</span>
                <p>
                  {"Saudi Arabia's "}
                  <em>building sustainability rating system.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="mos-sec mos-proc"
        id="pathway"
        style={{
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="mos-wrap mos-pg dark">
          <div className="mos-sticky">
            <span className="mos-lab">02. Our Mostadam support</span>
            <h2 className="mos-h2">
              {"Our Mostadam "}
              <span>support.</span>
            </h2>
            <div className="mos-meter" aria-hidden="true">
              <i
                style={{
                  width: ((activeStep + 1) / processSteps.length) * 100 + "%",
                }}
              />
            </div>
            <small>
              {"STEP "}
              {activeStep + 1}
              {" OF "}
              {processSteps.length}
            </small>
          </div>
          <div className="mos-stack">
            {processSteps.map((processStep, index) => (
              <article
                key={processStep.num}
                className={"mos-sc " + (activeStep === index ? "act" : "")}
                onClick={() => setActiveStep(index)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="n">{processStep.num}</div>
                <div>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mos-sec mos-ben dark" id="benefits">
        <div className="mos-wrap">
          <div className="mos-ben-h">
            <div>
              <span className="mos-lab">03. What the project can work towards</span>
              <h2 className="mos-h2">
                {"What the project "}
                <em>can work towards.</em>
              </h2>
            </div>
          </div>
          <div className="mos-bg mos-bg-five">
            {outcomes.map((item, index) => (
              <div key={item} className="mos-bx">
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
                <b>{item}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mos-sec" id="meridian">
        <div className="mos-wrap mos-vs">
          <div className="mos-pn a">
            <span className="mos-lab">04. Why work with Meridian?</span>
            <h2 className="mos-h2">
              {"Why work with "}
              <em>Meridian?</em>
            </h2>
            <p className="mos-pn-copy">
              Mostadam requirements need to be understood in the context of the actual building and
              its project stage.
            </p>
          </div>
          <div className="mos-pn b">
            <p className="mos-pn-copy">
              Meridian helps connect sustainability criteria with design decisions, construction
              evidence and project coordination, with attention to Saudi requirements and the
              conditions in which the building will operate.
            </p>
          </div>
        </div>
      </section>
      <section className="mos-cta dark" id="contact">
        <div className="mos-wrap mos-cg">
          <div>
            <span className="mos-lab">05. Request Mostadam Project Support</span>
            <h2
              style={{
                marginTop: "18px",
              }}
            >
              {"Is your project "}
              <span>pursuing Mostadam?</span>
            </h2>
            <p className="t">
              Share the project type, location and current stage with our team. We can discuss the
              relevant assessment pathway and the support needed.
            </p>
          </div>
          <EnquiryForm
            subjectPrefix="Mostadam project support request"
            submitLabel="Request Mostadam Project Support"
          />
        </div>
      </section>
    </div>
  );
}
