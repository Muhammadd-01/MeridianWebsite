import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Mostadam",
  "Vision 2030",
  "Green building",
  "Design",
  "Construction",
  "Operation",
  "Pre-assessment",
  "Audit readiness",
  "Documentation",
  "Saudi Arabia",
];
const stages = [
  {
    n: 8,
    id: "t0",
    label: "Stage A",
    title: "Design + Construction",
    heading: "New buildings: Design + Construction",
    desc: "Appraises the sustainability of newly constructed buildings, from early design decisions through to the finished project.",
    cats: [
      "Site attributes",
      "Community connectivity",
      "Community wellbeing",
      "Region & culture",
      "Education & innovation",
      "Energy",
      "Water",
      "Management & operations",
    ],
  },
  {
    n: 4,
    id: "t1",
    label: "Stage B",
    title: "Operation + Existing",
    heading: "Existing buildings: Operation + Existing",
    desc: "Assesses sustainability initiatives in buildings that are already in use, including renovation projects.",
    cats: ["Policies, management & maintenance", "Energy", "Water", "Education & innovation"],
  },
];
const processSteps = [
  {
    num: "01",
    title: "Pre-Assessment & Strategy",
    desc: "Determine the applicable Mostadam rating for Design, Construction, and Operation stages of the project.",
    tag: "Start here",
  },
  {
    num: "02",
    title: "Design Advisory & Support",
    desc: "Provide guidance and technical support to architectural and engineering teams on aligning with Mostadam criteria and standards.",
    tag: "Architects & engineers",
  },
  {
    num: "03",
    title: "Audit Readiness & Support",
    desc: "Assist during evaluations and site inspections, ensuring project alignment with Mostadam standards for certification.",
    tag: "Evaluations & inspections",
  },
  {
    num: "04",
    title: "Documentation & Review",
    desc: "Prepare and submit documentation to the Urban Planning Authority, ensuring compliance with Mostadam.",
    tag: "Submission",
  },
];
export default function Mostadam() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = stages[activeStage];
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
              <b>Mostadam Certification</b>
            </p>
            <h1>
              {"Support Vision 2030 with "}
              <span>sustainable building excellence.</span>
            </h1>
            <p className="mos-lead">
              Mostadam is the Kingdom of Saudi Arabia’s green building rating system. We guide your
              project from early planning through to certification.
            </p>
            <div className="mos-acts">
              <Link className="mos-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="mos-btn o" href="#what">
                {"What is Mostadam? "}
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
                  <textPath href="#mosCp">VISION 2030 · GREEN BUILDING · KSA ·</textPath>
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
            <b>Operation</b>
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
              <span className="mos-lab">What is Mostadam certification?</span>
              <h2 className="mos-h2">
                {"The Kingdom’s own "}
                <em>green building</em>
                {" rating system."}
              </h2>
              <p className="def">
                <b>Mostadam</b>
                {
                  " is the Kingdom of Saudi Arabia’s green building rating system, promoting sustainability in commercial and residential real estate, aligned with Vision 2030."
                }
              </p>
              <p className="def">
                {
                  "In simple terms, it is a scorecard for buildings. Independent reviewers assess how a project performs on things like "
                }
                <b>energy, water, wellbeing and management</b>, then award a rating level. A
                certified building has been checked against a recognised Saudi standard, rather than
                simply described as “green”.
              </p>
              <p className="def">
                It was created for the Kingdom’s own conditions: the hot climate, scarce water,
                Saudi Building Codes and local culture. That is why it sits alongside, and is often
                considered together with, international schemes such as LEED.
              </p>
            </div>
            <div className="mos-seal">
              <span className="mos-lab">Saudi Arabia</span>
              <div>
                <div className="mos-ar" lang="ar" dir="rtl">
                  مستدام
                </div>
                <span className="mean">Mostadam · Arabic for “sustainable”</span>
                <p>
                  {"A rating that measures "}
                  <em>how well a building serves people, resources and the Kingdom.</em>
                </p>
              </div>
            </div>
          </div>
          <div className="mos-facts">
            <div className="mos-fact">
              <b>2019</b>
              <span>Launched</span>
              <p>
                Introduced to meet the needs of real estate development projects and operational
                assets in the Kingdom.
              </p>
            </div>
            <div className="mos-fact">
              <b>3</b>
              <span>Asset types</span>
              <p>
                Separate rating systems for residential buildings, commercial buildings and
                communities.
              </p>
            </div>
            <div className="mos-fact">
              <b>2</b>
              <span>Stages</span>
              <p>
                Every system covers new buildings (design and construction) and existing ones
                (operation).
              </p>
            </div>
            <div className="mos-fact">
              <b>5</b>
              <span>Rating levels</span>
              <p>
                {"From "}
                <em>Green</em>
                {" at the entry level up to "}
                <em>Diamond</em>, the highest.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mos-sec mos-ex" id="how-rated">
        <div className="mos-wrap">
          <div className="mos-ex-h">
            <div>
              <span className="mos-lab">How a building is rated</span>
              <h2 className="mos-h2">
                {"What gets "}
                <em>assessed.</em>
              </h2>
            </div>
            <p>
              Choose a stage to see the areas Mostadam looks at, then see how points translate into
              a rating level.
            </p>
          </div>
          <div className="mos-exg">
            <div className="mos-tabs" role="tablist" aria-label="Mostadam stages">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  className="mos-tab"
                  role="tab"
                  aria-selected={activeStage === index}
                  onClick={() => setActiveStage(index)}
                >
                  <small>{stage.label}</small>
                  <b>{stage.title}</b>
                </button>
              ))}
              <p className="note">
                <b>Not sure which applies?</b>
                {
                  " Our pre-assessment identifies the right Mostadam rating for your project’s design, construction and operation stages."
                }
              </p>
            </div>
            <div className="mos-panel" data-big={currentStage.n}>
              <div key={currentStage.id} className="mos-pin" role="tabpanel" aria-live="polite">
                <h3>{currentStage.heading}</h3>
                <p>{currentStage.desc}</p>
                <div className="cnt">
                  <b>{currentStage.n}</b>
                  <span>assessed categories</span>
                </div>
                <div className="mos-cats">
                  {currentStage.cats.map((cat, index) => (
                    <span key={index}>{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mos-lv">
            <div className="mos-lv-h">
              <div>
                <span className="mos-lab">Rating levels</span>
                <h3>
                  {"Score higher, "}
                  <em>rise higher.</em>
                </h3>
              </div>
              <p>
                Projects earn points across the assessed categories. The more a project achieves,
                the higher the level it can reach.
              </p>
            </div>
            <div className="mos-ladder" role="list">
              <div className="mos-stp" role="listitem">
                <small>LEVEL 1</small>
                <b>Green</b>
              </div>
              <div className="mos-stp" role="listitem">
                <small>LEVEL 2</small>
                <b>Bronze</b>
              </div>
              <div className="mos-stp" role="listitem">
                <small>LEVEL 3</small>
                <b>Silver</b>
              </div>
              <div className="mos-stp" role="listitem">
                <small>LEVEL 4</small>
                <b>Gold</b>
              </div>
              <div className="mos-stp" role="listitem">
                <small>LEVEL 5</small>
                <b>Diamond</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mos-sec mos-why" id="why">
        <div className="mos-wrap">
          <div className="mos-why-h">
            <div>
              <span className="mos-lab">Why Mostadam certification matters</span>
              <h2 className="mos-h2">
                {"Five reasons to "}
                <em>certify.</em>
              </h2>
            </div>
            <p>
              From national alignment to lower running costs, certification pays back across the
              building’s life.
            </p>
          </div>
          <p className="mos-why-in">
            {"In a hot country where water is scarce, "}
            <b>buildings are some of the biggest users of energy and water</b>. Mostadam gives
            owners and developers a clear, locally relevant way to design, build and run better
            buildings, and to prove it to regulators, tenants and investors.
          </p>
          <ul className="mos-rows">
            <li>
              <span>01</span>
              <h3>Align with national development goals.</h3>
              <p>
                Mostadam is part of the Kingdom’s sustainable building effort under Vision 2030.
                Certifying shows your project supports the national environmental and social
                ambitions.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Meet green building mandates in KSA.</h3>
              <p>
                Expectations for green buildings keep growing across the Kingdom. Certification
                gives you a recognised route to demonstrate compliance. We help confirm what applies
                to your project.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Improve building lifecycle performance.</h3>
              <p>
                The rating covers design, construction and operation, so good decisions are made
                early and carried through for as long as the building is in use.
              </p>
            </li>
            <li>
              <span>04</span>
              <h3>Lower energy, water, and operational costs.</h3>
              <p>
                Energy and water carry real weight in the assessment. Efficient cooling, fixtures
                and management translate into lower bills year after year.
              </p>
            </li>
            <li>
              <span>05</span>
              <h3>Achieve market differentiation in the Kingdom.</h3>
              <p>
                A recognised rating, from Green to Diamond, is a clear signal to buyers, tenants and
                investors that your building has been independently assessed.
              </p>
            </li>
          </ul>
          <div className="mos-kingdom">
            <h3>
              {"Built for the Kingdom, "}
              <span>not borrowed.</span>
            </h3>
            <p>
              Mostadam was developed to fit Saudi Arabia’s legislation, climate and local customs,
              and is linked to the Saudi Building Codes. It rewards what matters for buildings here,
              from cooling and water use to community and cultural fit.
            </p>
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
            <span className="mos-lab">Our Mostadam pathway</span>
            <h2 className="mos-h2">
              {"Four steps to "}
              <span>certification.</span>
            </h2>
            <p>
              A clear route through design, construction and operation, with expert support at every
              stage.
            </p>
            <div className="mos-meter" aria-hidden="true">
              <i
                style={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
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
                className={`mos-sc ${activeStep === index ? "act" : ""}`}
                onClick={() => setActiveStep(index)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="n">{processStep.num}</div>
                <div>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                  <span className="tg">{processStep.tag}</span>
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
              <span className="mos-lab">Key benefits</span>
              <h2 className="mos-h2">
                {"What you "}
                <em>gain.</em>
              </h2>
            </div>
            <p>Four outcomes that matter to owners, developers and project teams.</p>
          </div>
          <div className="mos-bg">
            <div className="mos-bx">
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 38V20L22 8l16 12v18" />
                <path d="M16 38V26h12v12" />
              </svg>
              <b>Government recognition.</b>
            </div>
            <div className="mos-bx">
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 4L10 24h10l-2 16 16-22H24z" />
              </svg>
              <b>Enhanced building efficiency.</b>
            </div>
            <div className="mos-bx">
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4l14 6v10c0 10-6 17-14 20C14 37 8 30 8 20V10z" />
                <path d="M15 21l5 5 9-10" />
              </svg>
              <b>Regulatory compliance under Vision 2030.</b>
            </div>
            <div className="mos-bx">
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 34l10-10 7 6 15-18" />
                <path d="M28 12h10v10" />
              </svg>
              <b>Increased market appeal in Saudi real estate.</b>
            </div>
          </div>
        </div>
      </section>
      <section className="mos-sec" id="meridian">
        <div className="mos-wrap mos-vs">
          <div className="mos-pn a">
            <span
              className="mos-lab"
              style={{
                color: "var(--mos-rust)",
              }}
            >
              Why choose Meridian?
            </span>
            <h2 className="mos-h2">
              {"Support from "}
              <em>plan</em>
              {" to occupancy."}
            </h2>
            <ul>
              <li>
                <div>
                  <b>Ongoing Support</b>
                  <span>From early planning to post-occupancy.</span>
                </div>
              </li>
              <li>
                <div>
                  <b>KSA Experts</b>
                  <span>Proven track record in Saudi green building projects.</span>
                </div>
              </li>
              <li>
                <div>
                  <b>Policy Aligned</b>
                  <span>Deep understanding of national sustainability mandates.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mos-pn b">
            <div>
              <span
                className="mos-lab"
                style={{
                  color: "var(--mos-rust)",
                }}
              >
                Role of Mostadam consultants
              </span>
              <p
                className="q"
                style={{
                  marginTop: "26px",
                }}
              >
                {"Your strategic "}
                <span>green-building partner.</span>
              </p>
            </div>
            <p
              style={{
                marginTop: "34px",
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#52676a",
              }}
            >
              We act as your strategic green-building partner, ensuring compliance, quality, and
              value.
            </p>
          </div>
        </div>
      </section>
      <section className="mos-role">
        <div className="mos-wrap">
          <span className="mos-lab">Compliance · Quality · Value</span>
          <p className="q">
            {"Building for "}
            <span>Vision 2030?</span>
          </p>
          <p className="s">Let’s explore your Mostadam roadmap together.</p>
        </div>
      </section>
      <section className="mos-cta dark" id="contact">
        <div className="mos-wrap mos-cg">
          <div>
            <span className="mos-lab">Free consultation</span>
            <h2
              style={{
                marginTop: "18px",
              }}
            >
              {"Ready to certify "}
              <span>your building?</span>
            </h2>
            <p className="t">
              To explore your Mostadam roadmap, book a free consultation with our team.
            </p>
            <Link className="mos-btn" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="mos-ct">
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
