import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Life cycle analysis",
  "Raw materials",
  "Manufacturing",
  "Distribution",
  "Use",
  "End of life",
  "Goal & scope",
  "Inventory",
  "Impact assessment",
  "Interpretation",
  "ISO 14040/44",
];
const lifecycleStages = [
  {
    t: "Raw materials",
    p: [220, 75],
    l: [220, 44, "middle"],
    q: [
      "Which resources are extracted, and how much?",
      "How much energy and water does extraction need?",
      "Are recycled inputs available?",
    ],
  },
  {
    t: "Manufacturing",
    p: [320, 148],
    l: [352, 152, "start"],
    q: [
      "How much energy and water does production use?",
      "What emissions and waste does the process create?",
      "Where are the biggest efficiency gains?",
    ],
  },
  {
    t: "Distribution",
    p: [282, 265],
    l: [282, 304, "middle"],
    q: [
      "How far, and by what transport mode, do products travel?",
      "How much packaging is used?",
      "Can logistics be shortened or lightened?",
    ],
  },
  {
    t: "Use",
    p: [158, 265],
    l: [158, 304, "middle"],
    q: [
      "How much energy or water is consumed in use?",
      "How long does the product last?",
      "What maintenance or consumables does it need?",
    ],
  },
  {
    t: "End of life",
    p: [120, 148],
    l: [88, 152, "end"],
    q: [
      "Is the product reused, recycled or disposed of?",
      "How much material can be recovered?",
      "What does disposal add to the footprint?",
    ],
  },
];
const benefits = [
  {
    n: "1",
    num: "01",
    title: "Design more sustainable products",
    desc: "See the footprint of materials, processes and design choices before they are locked in, so the greener option is also the practical one.",
  },
  {
    n: "2",
    num: "02",
    title: "Enable circular economy strategies",
    desc: "Understand what happens at end of life and compare reuse, recycling and recycled-content options using real data rather than guesswork.",
  },
  {
    n: "3",
    num: "03",
    title: "Identify hotspots in your supply chain",
    desc: "Pinpoint the stages, components or suppliers that cause a disproportionate share of impact, so improvement effort is aimed where it counts.",
  },
  {
    n: "4",
    num: "04",
    title: "Meet customer and regulatory expectations",
    desc: "Buyers and regulators increasingly ask for credible, standards-based environmental evidence. LCA gives you data you can stand behind.",
  },
  {
    n: "5",
    num: "05",
    title: "Support eco-labeling and ESG reporting",
    desc: "LCA results underpin environmental product declarations, eco-labels and ESG disclosures, and help you avoid unsubstantiated green claims.",
  },
];
const methodology = [
  {
    n: "1",
    h: "Goal & Scope Definition",
    p: "Clarify project purpose, boundaries, and metrics for effective assessment. We agree what is being measured, why, and for whom, so every later step stays focused.",
    c: ["Purpose & audience", "System boundaries", "Functional unit", "Data requirements"],
    o: "A clearly defined study: purpose, boundaries and metrics.",
  },
  {
    n: "2",
    h: "Inventory Analysis",
    p: "Collect and analyze data on inputs, outputs, emissions, and consumption across every stage of the product’s life, from raw materials through to disposal.",
    c: ["Materials & energy in", "Water use", "Emissions & waste out", "Primary & secondary data"],
    o: "A quantified inventory of everything going in and out.",
  },
  {
    n: "3",
    h: "Impact Assessment",
    p: "Translate collected data into environmental impacts, such as CO₂ and water use, so very different flows can be compared in meaningful terms.",
    c: ["Climate change (CO₂)", "Water use", "Acidification", "Eutrophication"],
    o: "Impacts expressed in comparable environmental terms.",
  },
  {
    n: "4",
    h: "Interpretation & Optimization",
    p: "Recommend changes to design or processes to minimize environmental impact. We check results against your goal, flag the hotspots and turn them into priorities.",
    c: [
      "Hotspot identification",
      "Check against goal & scope",
      "Design changes",
      "Process improvements",
    ],
    o: "Prioritised recommendations to cut your product’s impact.",
  },
];
export default function Lca() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = lifecycleStages[activeStage];
  const currentStep = methodology[activeStep];
  return (
    <div className="lca-page">
      <section className="lca-hero dark">
        <div className="lca-hero-bg" aria-hidden="true" />
        <div className="lca-wrap">
          <div className="lca-hc">
            <p className="lca-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Product Life Cycle Analysis (LCA)</b>
            </p>
            <h1>
              {"Understand your product’s total footprint, "}
              <span>from concept through disposal.</span>
            </h1>
            <p className="lca-lead">
              Life Cycle Analysis shows where your product’s environmental impact really comes from,
              so you can design smarter, source better and make claims you can prove.
            </p>
            <div className="lca-acts">
              <Link className="lca-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="lca-btn o" href="#what">
                {"What is LCA? "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="lca-stages">
            <div>
              <small>Stage 01</small>
              <b>Raw materials</b>
            </div>
            <div>
              <small>Stage 02</small>
              <b>Manufacturing</b>
            </div>
            <div>
              <small>Stage 03</small>
              <b>Distribution</b>
            </div>
            <div>
              <small>Stage 04</small>
              <b>Use</b>
            </div>
            <div>
              <small>Stage 05</small>
              <b>End of life</b>
            </div>
          </div>
        </div>
      </section>
      <div className="lca-tape" aria-hidden="true">
        <div className="lca-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="lca-sec" id="what">
        <div className="lca-wrap lca-wh">
          <div>
            <span className="lca-lab">What is Life Cycle Analysis (LCA)?</span>
            <h2 className="lca-h2">
              {"The full "}
              <em>environmental</em>
              {" story of a product."}
            </h2>
            <p className="def">
              <b>LCA</b>
              {
                " evaluates the full environmental footprint of a product, process or service, from raw material extraction to disposal, enabling data-driven sustainability decisions."
              }
            </p>
            <p className="def">
              {"Instead of looking only at the factory, LCA follows the product through "}
              <b>every stage of its life</b>: where materials come from, how it is made and shipped,
              how it is used, and what happens when it is thrown away or recycled. Each stage is
              measured so impacts such as carbon emissions and water use can be compared on a
              like-for-like basis.
            </p>
            <p className="def">
              The method is defined by international standards, which is what makes the results
              consistent, repeatable and credible when you share them with customers, regulators or
              investors.
            </p>
            <div className="lca-std">
              <span>{"ISO 14040 · Principles & framework"}</span>
              <span>{"ISO 14044 · Requirements & guidelines"}</span>
            </div>
          </div>
          <div className="lca-wheel">
            <div className="top">
              <span>Explore the life cycle</span>
              <b>Select a stage</b>
            </div>
            <svg viewBox="0 0 440 360" role="group" aria-label="Product life cycle stages">
              <g className="lca-ring">
                <circle
                  cx="220"
                  cy="180"
                  r="105"
                  fill="none"
                  stroke="#f2e6a2"
                  strokeOpacity="0.4"
                  strokeDasharray="3 9"
                />
              </g>
              <circle cx="220" cy="180" r="60" fill="#145d68" stroke="#3a6a79" />
              <text className="lca-ctx" x="220" y="176" fontSize="17">
                Life
              </text>
              <text className="lca-ctx" x="220" y="196" fontSize="17">
                cycle
              </text>
              {lifecycleStages.map((lifecycleStage, index) => (
                <g key={lifecycleStage.t}>
                  <g
                    className={`lca-nd ${activeStage === index ? "on" : ""}`}
                    tabIndex="0"
                    role="button"
                    aria-label={lifecycleStage.t}
                    onClick={() => setActiveStage(index)}
                  >
                    <circle cx={lifecycleStage.p[0]} cy={lifecycleStage.p[1]} r="22" />
                    <text x={lifecycleStage.p[0]} y={lifecycleStage.p[1] + 6}>
                      {index + 1}
                    </text>
                  </g>
                  <text
                    className={`lca-nl ${activeStage === index ? "on" : ""}`}
                    x={lifecycleStage.l[0]}
                    y={lifecycleStage.l[1]}
                    textAnchor={lifecycleStage.l[2]}
                    onClick={() => setActiveStage(index)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {lifecycleStage.t.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
            <div key={currentStage.t} className="lca-wd" aria-live="polite">
              <small>
                {"Stage "}
                {activeStage + 1}
                {" of 5"}
              </small>
              <h3>{currentStage.t}</h3>
              <ul>
                {currentStage.q.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="lca-sec lca-why" id="why">
        <div className="lca-wrap">
          <div className="lca-why-h">
            <div>
              <span className="lca-lab">Why product life cycle analysis matters</span>
              <h2 className="lca-h2">
                {"Five reasons to "}
                <em>measure.</em>
              </h2>
            </div>
            <p>Hover or tap a panel to read more.</p>
          </div>
          <p className="lca-why-in">
            {"A product’s biggest impacts often sit "}
            <b>outside the factory gate</b>, in raw materials, transport or use. LCA makes them
            visible, so decisions rest on data instead of assumptions, and effort goes where it
            makes the most difference.
          </p>
          <div className="lca-xp">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.num}
                className={`lca-xi ${activeBenefit === index ? "on" : ""}`}
                tabIndex="0"
                data-n={benefit.n}
                onClick={() => setActiveBenefit(index)}
                onMouseEnter={() => setActiveBenefit(index)}
              >
                <span className="nn">{benefit.num}</span>
                <span className="vt">{benefit.title}</span>
                <div className="op lca-op">
                  <h3>{benefit.title}.</h3>
                  <p>{benefit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="lca-sec" id="approach">
        <div className="lca-wrap">
          <div className="lca-ph-h">
            <div>
              <span className="lca-lab">Our 4-phase LCA approach</span>
              <h2 className="lca-h2">
                {"From question to "}
                <em>action.</em>
              </h2>
            </div>
            <p>
              We follow the four phases set out in ISO 14040/44. Select a phase to see what happens
              and what you get.
            </p>
          </div>
          <div className="lca-pt" role="tablist" aria-label="LCA phases">
            {methodology.map((item, index) => (
              <button
                key={item.n}
                role="tab"
                aria-selected={activeStep === index}
                onClick={() => setActiveStep(index)}
              >
                <small>PHASE 0{item.n}</small>
                <b>{item.h}</b>
              </button>
            ))}
          </div>
          <div className="lca-pb">
            <div className="lca-pm" data-n={currentStep.n}>
              <div key={currentStep.n} className="in" role="tabpanel" aria-live="polite">
                <h3>{currentStep.h}</h3>
                <p>{currentStep.p}</p>
                <div className="lca-chs">
                  {currentStep.c.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lca-po">
              <div>
                <small>WHAT YOU GET</small>
                <strong>{currentStep.o}</strong>
              </div>
              <p className="lp">
                <b>Not strictly one-way.</b>
                {
                  " The phases feed back into each other. Findings can refine your scope and improve data quality, so the study gets sharper with each pass."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lca-sec lca-ben-sec" id="benefits">
        <div className="lca-wrap">
          <div className="lca-ben-h">
            <div>
              <span className="lca-lab">Key benefits</span>
              <h2 className="lca-h2">
                {"What you "}
                <em>gain.</em>
              </h2>
            </div>
            <p>Four outcomes that strengthen your products and the way you talk about them.</p>
          </div>
          <ul className="lca-bl">
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 36l10-12 8 6 14-20" />
                <path d="M28 10h10v10" />
              </svg>
              <span>Competitive differentiation.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 38V18" />
                <path d="M22 24c-9 0-14-5-14-13 9 0 14 5 14 13z" />
                <path d="M22 28c7 0 12-4 12-11-7 0-12 4-12 11z" />
              </svg>
              <span>Improved product sustainability.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22h6l22-14v28L12 22" />
                <path d="M38 17c2 3 2 7 0 10" />
              </svg>
              <span>Enhanced marketing and eco-claims.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 28a14 14 0 0 1 24 0" />
                <path d="M22 28l6-10" />
                <circle cx="22" cy="28" r="2.5" />
                <path d="M6 38h32" />
              </svg>
              <span>Reduced environmental footprint.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="lca-sec lca-mer dark" id="meridian">
        <div className="lca-wrap lca-mg">
          <div>
            <span className="lca-lab">Why choose Meridian?</span>
            <h2 className="lca-h2">
              {"Insight you can "}
              <em>act on.</em>
            </h2>
            <div className="lca-role">
              <small>Role of LCA consultants</small>
              <p>
                We make sustainability measurable, enabling smarter product design and supply chain
                management.
              </p>
            </div>
          </div>
          <ul className="lca-mm">
            <li>
              <i>01</i>
              <div>
                <b>Verified Methodologies</b>
                <span>ISO 14040/44 compliant.</span>
              </div>
            </li>
            <li>
              <i>02</i>
              <div>
                <b>Practical Outcomes</b>
                <span>Actionable insights, not just reports.</span>
              </div>
            </li>
            <li>
              <i>03</i>
              <div>
                <b>Deep Technical Capability</b>
                <span>{"Environmental engineers & LCA specialists."}</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="lca-cta-w" id="contact">
        <div className="lca-wrap">
          <div className="lca-cta">
            <span className="lca-lab">Free consultation</span>
            <h2>
              {"Want a clearer view of "}
              <span>your product’s impact?</span>
            </h2>
            <p className="t">To start your LCA journey, book a free consultation with our team.</p>
            <Link className="lca-btn dk" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
            <dl className="lca-ct">
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
        </div>
      </section>
    </div>
  );
}
