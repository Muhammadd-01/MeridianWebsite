import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Environmental",
  "Social",
  "Governance",
  "GRI",
  "SASB",
  "UN SDGs",
  "TCFD",
  "Materiality",
  "Gap analysis",
  "Stakeholder trust",
  "Green capital",
];
const benefits = [
  {
    num: "01",
    title: "Data collection & gap analysis",
    desc: "Assess current metrics, data availability and readiness for sustainability reporting.",
  },
  {
    num: "02",
    title: "Report development",
    desc: "Draft and design sustainability reports aligned with GRI, SASB or SDG frameworks.",
  },
  {
    num: "03",
    title: "Materiality assessment",
    desc: "Identify the ESG factors most relevant to your business and stakeholders.",
  },
  {
    num: "04",
    title: "Publishing & communication",
    desc: "Deliver final reports with visual design, digital publishing and stakeholder distribution.",
  },
];
const frameworks = [
  {
    code: "GRI",
    name: "Global Reporting Initiative",
    points: [
      "Widely used standards for reporting an organisation’s impacts on the economy, environment and people.",
      "Supports clear, consistent and comparable disclosure.",
      "A strong foundation for stakeholder-facing reports.",
    ],
  },
  {
    code: "SASB",
    name: "Sustainability Accounting Standards Board",
    points: [
      "Industry-specific topics and metrics focused on issues that matter most to investors.",
      "Helps benchmark performance against sector peers.",
      "Useful for improving ESG ratings and access to green capital.",
    ],
  },
  {
    code: "SDGs",
    name: "UN Sustainable Development Goals",
    points: [
      "Map your activities and results to goals stakeholders already recognise.",
      "Showcase alignment with the UN SDGs clearly and credibly.",
      "Connects local initiatives to international priorities.",
    ],
  },
  {
    code: "TCFD",
    name: "Task Force on Climate-related Financial Disclosures",
    points: [
      "Structured disclosure of climate-related risks and opportunities.",
      "Supports risk mitigation through transparency.",
      "Strengthens regulatory and compliance readiness.",
    ],
  },
];
export default function SustainabilityReporting() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFramework, setActiveFramework] = useState(0);
  const currentFramework = frameworks[activeFramework];
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
              {"Turn transparency "}
              <span>into trust.</span>
            </h1>
            <p className="rep-lead">
              Globally aligned sustainability reports that show stakeholders what your organisation
              stands for, and how it performs.
            </p>
            <div className="rep-acts">
              <Link className="rep-btn" to="/contact-us">
                Book a free consultation ↗
              </Link>
              <a className="rep-btn o" href="#frameworks">
                Explore frameworks ↓
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
                    font-family="ui-monospace,Menlo,monospace"
                    fontSize="13"
                    letterSpacing="5.2"
                    fill="#c1d2d1"
                  >
                    <textPath href="#cp">
                      GRI ◆ SASB ◆ UN SDGs ◆ TCFD ◆ GRI ◆ SASB ◆ UN SDGs ◆ TCFD ◆
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
              <span className="rep-lab">What it is</span>
              <h2
                className="rep-h2"
                style={{
                  marginTop: "18px",
                }}
              >
                {"Disclosure that "}
                <em>earns</em>
                {" belief."}
              </h2>
            </div>
            <p>
              Why sustainability reporting matters for your stakeholders, your investors and your
              people.
            </p>
          </div>
          <div className="rep-bento">
            <div className="rep-cell rep-c-def">
              <div>
                <span
                  className="rep-lab"
                  style={{
                    color: "var(--primrose)",
                  }}
                >
                  Definition
                </span>
              </div>
              <div>
                <h3>
                  {"What is sustainability reporting? It is how you disclose your "}
                  <em>environmental, social and governance</em>
                  {" impacts."}
                </h3>
                <p>
                  It follows recognised frameworks like GRI, SASB and the SDGs to ensure clarity,
                  consistency and comparability.
                </p>
                <p>
                  The result is a published report that explains what your organisation does about
                  the issues that affect people, communities and the planet, and backs it up with
                  measurable data.
                </p>
              </div>
            </div>
            <div className="rep-cell rep-c-sm">
              <b>01</b>
              <h3>Showcase alignment with the UN SDGs.</h3>
            </div>
            <div className="rep-cell rep-c-sm">
              <b>02</b>
              <h3>Build credibility with stakeholders and investors.</h3>
            </div>
            <div className="rep-cell rep-c-sm">
              <b>03</b>
              <h3>Benchmark ESG performance year-over-year.</h3>
            </div>
            <div className="rep-cell rep-c-sm">
              <b>04</b>
              <h3>Improve regulatory and compliance readiness.</h3>
            </div>
            <div className="rep-cell rep-c-sm">
              <b>05</b>
              <h3>Attract sustainability-conscious partners and talent.</h3>
            </div>
            <div className="rep-cell rep-c-wide">
              <b>↗</b>
              <h3>
                Reporting turns scattered ESG data into a story stakeholders can verify, compare and
                trust.
              </h3>
            </div>
          </div>
          <div className="rep-xp">
            <div>
              <span className="rep-lab">In plain words</span>
              <h3>
                A sustainability report is your organisation's account of how it affects people and
                the planet, and how it manages that impact.
              </h3>
              <p className="rep-def">
                Alongside your financial statements, it covers the topics that shape long-term
                value: energy and emissions, water and waste, workforce health and safety, community
                impact, ethics, and how the organisation is governed.
              </p>
              <p className="rep-def">
                Instead of general claims, a good report uses defined metrics, a stated reporting
                period and an agreed framework. That lets readers check the figures and compare them
                with other organisations and with your own past years.
              </p>
              <p className="rep-def">
                It is also a management tool. Collecting the data shows where you are efficient,
                where your risks sit, and which targets are realistic.
              </p>
            </div>
            <div className="rep-esg">
              <div>
                <b>E</b>
                <div>
                  <h4>Environmental</h4>
                  <p>
                    Energy use, greenhouse gas emissions, water, waste, materials and biodiversity.
                  </p>
                </div>
              </div>
              <div>
                <b>S</b>
                <div>
                  <h4>Social</h4>
                  <p>
                    Employee wellbeing, health and safety, diversity, human rights, supply chain and
                    community relations.
                  </p>
                </div>
              </div>
              <div>
                <b>G</b>
                <div>
                  <h4>Governance</h4>
                  <p>
                    Board oversight, ethics and anti-corruption, risk management, policies and
                    transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rep-inc">
            <span
              className="rep-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              Inside the report
            </span>
            <h3>
              {"What a sustainability report "}
              <em>typically includes.</em>
            </h3>
            <p>
              The exact structure depends on the framework you follow, but most reports cover the
              same core elements.
            </p>
            <ul>
              <li>
                <b>Leadership message</b>Senior management's commitment and view of the year.
              </li>
              <li>
                <b>About the organisation</b>Activities, operations, markets and value chain.
              </li>
              <li>
                <b>Materiality and stakeholders</b>The ESG topics that matter most, and who you
                consulted to decide.
              </li>
              <li>
                <b>Strategy and targets</b>Goals, policies and progress against them.
              </li>
              <li>
                <b>ESG performance data</b>Metrics with units, reporting boundaries and prior-year
                comparisons.
              </li>
              <li>
                <b>Framework index</b>A content index mapping disclosures to GRI, SASB, SDGs or
                TCFD, and external assurance where chosen.
              </li>
            </ul>
          </div>
          <div className="rep-who">
            <span className="rep-lab">Who reads it</span>
            <ul>
              <li>Investors and lenders</li>
              <li>Customers and clients</li>
              <li>Regulators</li>
              <li>Employees and candidates</li>
              <li>Suppliers and partners</li>
              <li>Communities and NGOs</li>
            </ul>
            <p>
              Whether reporting is voluntary or required depends on your country, sector and size.
              We confirm what applies to you during the first step of the process.
            </p>
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
            <span className="rep-lab">Our 4-step reporting process</span>
            <h2
              className="rep-h2"
              style={{
                color: "#fff",
                marginTop: "18px",
              }}
            >
              {"From data to "}
              <span>disclosure.</span>
            </h2>
            <p>A clear path from framework selection to final publication.</p>
            <div className="rep-meter" aria-hidden="true">
              <i
                style={{
                  width: `${((activeStep + 1) / 4) * 100}%`,
                }}
              />
            </div>
            <small>
              {"STEP "}
              {activeStep + 1}
              {" OF 4"}
            </small>
          </div>
          <div className="rep-stack">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.num}
                className={`rep-sc ${activeStep === index ? "act" : ""}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="rep-n">{benefit.num}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="rep-sec" id="frameworks">
        <div className="rep-wrap rep-fr">
          <div>
            <span className="rep-lab">Framework expertise</span>
            <h2
              className="rep-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Pick a framework. "}
              <em>See the fit.</em>
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "var(--mut)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              We select and combine GRI, SASB, SDGs and TCFD to suit your sector, stakeholders and
              region.
            </p>
            <div className="rep-chips" role="tablist" aria-label="Frameworks">
              {frameworks.map((framework, index) => (
                <button
                  key={framework.code}
                  className="rep-chip"
                  role="tab"
                  aria-selected={activeFramework === index}
                  onClick={() => setActiveFramework(index)}
                >
                  {framework.code}
                </button>
              ))}
            </div>
          </div>
          <div className="rep-fc" data-big={currentFramework.code}>
            <div key={currentFramework.code} className="rep-fp" role="tabpanel">
              <h3>{currentFramework.code}</h3>
              <span className="rep-full">{currentFramework.name}</span>
              <ul>
                {currentFramework.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="rep-sec"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="rep-wrap rep-vs">
          <div className="rep-pn a">
            <span className="rep-lab">Key benefits</span>
            <h2 className="rep-h2">
              {"What you "}
              <em>gain.</em>
            </h2>
            <ul>
              <li>
                <span>Greater stakeholder engagement and trust.</span>
              </li>
              <li>
                <span>Risk mitigation through transparent disclosure.</span>
              </li>
              <li>
                <span>Performance benchmarking across industries.</span>
              </li>
              <li>
                <span>Improved ESG ratings and access to green capital.</span>
              </li>
              <li>
                <span>Attract sustainability-conscious partners and talent.</span>
              </li>
              <li>
                <span>Regulatory and compliance readiness.</span>
              </li>
            </ul>
          </div>
          <div className="rep-pn b dark">
            <span
              className="rep-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              Why choose Meridian?
            </span>
            <h2
              className="rep-h2"
              style={{
                color: "#fff",
              }}
            >
              {"Built for "}
              <span>insight.</span>
            </h2>
            <ul>
              <li>
                <span>Framework expertise: GRI, SASB, SDGs, TCFD.</span>
              </li>
              <li>
                <span>Local and global alignment for regional and international audiences.</span>
              </li>
              <li>
                <span>Insight-driven — more than data, we tell your sustainability story.</span>
              </li>
              <li>
                <span>End-to-end support from data collection to final publication.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="rep-role">
        <div className="rep-wrap">
          <span className="rep-lab">Role of sustainability reporting consultants</span>
          <p className="rep-q">
            {"We guide you from "}
            <span>framework selection</span>
            {" to final publication."}
          </p>
          <p className="rep-s">Reports that are insightful, compliant and compelling.</p>
        </div>
      </section>
      <section className="rep-cta dark" id="contact">
        <div className="rep-wrap rep-cg">
          <div>
            <h2>
              {"Ready to report "}
              <span>with confidence?</span>
            </h2>
            <p className="rep-t">To craft a sustainability report that speaks volumes.</p>
            <Link className="rep-btn" to="/contact-us">
              Book a free consultation ↗
            </Link>
          </div>
          <dl className="rep-ct">
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
        </div>
      </section>
    </div>
  );
}
