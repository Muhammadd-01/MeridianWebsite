import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Define",
  "Measure",
  "Analyze",
  "Improve",
  "Control",
  "Value stream",
  "Root cause",
  "Kaizen",
  "5S",
  "Green Belt",
  "Black Belt",
  "Zero defects",
];
const dmaicPhases = [
  {
    num: "01",
    phase: "PHASE 1 OF 5",
    title: "Define",
    desc: "Clarify the problem, customer requirements and project scope. Agree a charter with clear goals and sponsors.",
    tools: ["SIPOC", "VOC", "Charter"],
  },
  {
    num: "02",
    phase: "PHASE 2 OF 5",
    title: "Measure",
    desc: "Map the current process, validate the measurement system and collect baseline data on performance.",
    tools: ["Process map", "MSA", "Baseline"],
  },
  {
    num: "03",
    phase: "PHASE 3 OF 5",
    title: "Analyze",
    desc: "Find the root causes of waste and variation using data, statistical tests and structured problem solving.",
    tools: ["Fishbone", "Pareto", "Hypothesis tests"],
  },
  {
    num: "04",
    phase: "PHASE 4 OF 5",
    title: "Improve",
    desc: "Design, pilot and implement solutions that remove root causes, then verify the improvement.",
    tools: ["Kaizen", "DOE", "Poka-yoke"],
  },
  {
    num: "05",
    phase: "PHASE 5 OF 5",
    title: "Control",
    desc: "Lock in the gains with control plans, standard work, dashboards and a smooth handover to process owners.",
    tools: ["SPC", "Control plan", "Standard work"],
  },
];
const keyConcepts = [
  {
    code: "Y",
    name: "Yellow Belt",
    role: "Awareness level",
    points: [
      "Understand Lean Six Sigma basics and vocabulary.",
      "Support projects and spot everyday waste.",
      "Contribute data and ideas to improvement teams.",
    ],
  },
  {
    code: "G",
    name: "Green Belt",
    role: "Project leader",
    points: [
      "Lead focused DMAIC projects within your own function.",
      "Apply core statistical and process tools.",
      "Work part-time on improvement alongside the day job.",
    ],
  },
  {
    code: "B",
    name: "Black Belt",
    role: "Expert & coach",
    points: [
      "Lead complex, cross-functional improvement projects.",
      "Apply advanced statistics and mentor Green Belts.",
      "Drive significant financial and quality impact.",
    ],
  },
  {
    code: "M",
    name: "Champions & sponsors",
    role: "Leadership",
    points: [
      "Select and prioritise the right projects.",
      "Remove barriers and secure resources.",
      "Embed continuous improvement in strategy and culture.",
    ],
  },
];
const beltLevels = [
  {
    level: 1,
    dpmo: "691,462",
    yield: "30.9%",
    desc: "Largely uncontrolled. Most output has defects.",
  },
  {
    level: 2,
    dpmo: "308,538",
    yield: "69.1%",
    desc: "Typical of poorly controlled, error-prone processes.",
  },
  {
    level: 3,
    dpmo: "66,807",
    yield: "93.3%",
    desc: "Common in many organisations, with significant cost of poor quality.",
  },
  {
    level: 4,
    dpmo: "6,210",
    yield: "99.38%",
    desc: "Industry-average performance for many sectors.",
  },
  {
    level: 5,
    dpmo: "233",
    yield: "99.977%",
    desc: "Strong, well-controlled and highly capable.",
  },
  {
    level: 6,
    dpmo: "3.4",
    yield: "99.99966%",
    desc: "World-class. Near-zero defects.",
  },
];
const services = [
  {
    num: "01",
    title: "Operational efficiency",
    desc: "Value stream mapping, flow and 5S to cut lead time, inventory and waiting.",
  },
  {
    num: "02",
    title: "Quality & defect reduction",
    desc: "Root cause analysis and statistical control to eliminate recurring defects.",
  },
  {
    num: "03",
    title: "Service & process excellence",
    desc: "Streamline approvals, onboarding and customer journeys across functions.",
  },
];
const industries = [
  "Manufacturing",
  "Healthcare",
  "Oil & gas",
  "Logistics",
  "Banking & finance",
  "Government",
];
const faqs = [
  {
    q: "Do we need to start with training?",
    a: "Not necessarily. Most engagements begin with a diagnostic to find the highest-value projects, then add belt training alongside live delivery.",
  },
  {
    q: "How long does a DMAIC project take?",
    a: "Typically a few months, depending on scope and data availability. We agree timelines and milestones during scoping.",
  },
  {
    q: "Is Lean Six Sigma only for manufacturing?",
    a: "No. It applies wherever there are processes: healthcare, finance, logistics, government and service organisations.",
  },
  {
    q: "How do you sustain the gains?",
    a: "Through control plans, dashboards, standard work and building internal belts who own the process long term.",
  },
];
export default function LeanSixSigma() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeConcept, setActiveConcept] = useState(0);
  const [beltLevel, setBeltLevel] = useState(3);
  const [openFaq, setOpenFaq] = useState(0);
  const currentConcept = keyConcepts[activeConcept];
  const currentBelt =
    beltLevels.find((beltLevel2) => beltLevel2.level === beltLevel) || beltLevels[2];
  return (
    <div className="lss-page">
      <section className="lss-hero dark">
        <div className="lss-wrap lss-hg">
          <div>
            <p className="lss-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>Lean Six Sigma</b>
            </p>
            <h1 className="lss-h1">
              {"Less waste. Less variation. "}
              <span>More measurable results.</span>
            </h1>
            <p className="lss-lead">
              We embed Lean Six Sigma in your organisation, from diagnosis and DMAIC projects to
              belt-level capability, so improvement is delivered, measured and sustained.
            </p>
            <div className="lss-acts">
              <Link className="lss-btn" to="/contact-us">
                Book a consultation ↗
              </Link>
              <a className="lss-btn o" href="#sigma">
                Try the sigma calculator ↓
              </a>
            </div>
          </div>
          <div className="lss-curve" aria-hidden="true">
            <svg viewBox="0 0 400 300">
              <path
                className="lss-bfill"
                d="M40 250C100 250 140 230 160 150C175 85 190 50 200 50C210 50 225 85 240 150C260 230 300 250 360 250Z"
                fill="#145d68"
                opacity=".5"
              />
              <path
                className="lss-bell"
                d="M20 250C100 250 140 230 160 150C175 85 190 50 200 50C210 50 225 85 240 150C260 230 300 250 380 250"
                fill="none"
                stroke="#f2e6a2"
                strokeWidth="3"
              />
              <line
                x1="200"
                y1="40"
                x2="200"
                y2="250"
                stroke="#f2e6a2"
                strokeOpacity=".4"
                strokeDasharray="4 6"
              />
              <line
                x1="70"
                y1="90"
                x2="70"
                y2="250"
                stroke="#f78d00"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <line
                x1="330"
                y1="90"
                x2="330"
                y2="250"
                stroke="#f78d00"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <circle className="lss-dot" cx="200" cy="50" r="7" fill="#f78d00" />
              <g
                fontFamily="ui-monospace,Menlo,monospace"
                fontSize="12"
                letterSpacing="2"
                fill="#9fbab9"
                textAnchor="middle"
              >
                <text x="70" y="75" fill="#f78d00">
                  LSL
                </text>
                <text x="330" y="75" fill="#f78d00">
                  USL
                </text>
                <text x="200" y="278">
                  6 σ · 3.4 DPMO
                </text>
              </g>
            </svg>
          </div>
        </div>
        <div className="lss-wrap lss-stats">
          <div>
            <b>5</b>
            <span>DMAIC phases</span>
          </div>
          <div>
            <b>3.4</b>
            <span>Defects per million</span>
          </div>
          <div>
            <b>4</b>
            <span>Belt levels</span>
          </div>
          <div>
            <b>8</b>
            <span>Wastes targeted</span>
          </div>
        </div>
      </section>
      <div className="lss-tape" aria-hidden="true">
        <div className="lss-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="lss-sec" id="what">
        <div className="lss-wrap lss-wh">
          <div>
            <span className="lss-lab">What is Lean Six Sigma?</span>
            <h2 className="lss-h2">
              {"Speed from "}
              <em>Lean.</em>
              {" Precision from Six Sigma."}
            </h2>
            <p className="lss-def">
              Lean Six Sigma combines Lean's focus on removing waste and improving flow with Six
              Sigma's data-driven approach to reducing variation and defects. Together they help
              organisations deliver higher quality, faster and at lower cost, in any sector from
              manufacturing to healthcare and services.
            </p>
          </div>
          <div>
            <span
              className="lss-lab"
              style={{
                marginBottom: "16px",
              }}
            >
              What our consulting delivers
            </span>
            <ul className="lss-rows">
              <li>Lower operating costs and cycle times.</li>
              <li>Fewer defects, errors and rework loops.</li>
              <li>Processes that are stable, measured and capable.</li>
              <li>A trained, confident improvement workforce.</li>
              <li>A culture of continuous improvement that lasts.</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="lss-sec lss-proc"
        id="process"
        style={{
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="lss-wrap lss-pg dark">
          <div className="lss-sticky">
            <span className="lss-lab">Our implementation method</span>
            <h2
              className="lss-h2"
              style={{
                color: "#fff",
                marginTop: "18px",
              }}
            >
              {"Five phases to "}
              <span>sustained results.</span>
            </h2>
            <p>
              We deliver improvement projects with the proven DMAIC roadmap, working alongside your
              teams so capability stays when we leave.
            </p>
            <div className="lss-meter" aria-hidden="true">
              <i
                style={{
                  width: `${((activePhase + 1) / 5) * 100}%`,
                }}
              />
            </div>
            <small>{dmaicPhases[activePhase].phase}</small>
          </div>
          <div className="lss-stack">
            {dmaicPhases.map((dmaicPhase, index) => (
              <article
                key={dmaicPhase.num}
                className={`lss-sc ${activePhase === index ? "act" : ""}`}
                onClick={() => setActivePhase(index)}
              >
                <div className="lss-n">{dmaicPhase.num}</div>
                <div>
                  <h3>{dmaicPhase.title}</h3>
                  <p>{dmaicPhase.desc}</p>
                  <div className="lss-tools">
                    {dmaicPhase.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="lss-sec" id="belts">
        <div className="lss-wrap lss-fr">
          <div className="lss-fc" data-big={currentConcept.code}>
            <div key={currentConcept.code} className="lss-fp" role="tabpanel">
              <h3>{currentConcept.name}</h3>
              <span className="lss-full">
                {currentConcept.role}
                {" · Lean Six Sigma"}
              </span>
              <ul>
                {currentConcept.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <span className="lss-lab">Building capability</span>
            <h2
              className="lss-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Pick a belt. "}
              <em>See the role.</em>
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "var(--mut)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              We develop people at every level, so improvement is owned by your organisation, not by
              consultants.
            </p>
            <div className="lss-chips" role="tablist" aria-label="Belt levels">
              {keyConcepts.map((keyConcept, index) => (
                <button
                  key={keyConcept.code}
                  className="lss-chip"
                  role="tab"
                  aria-selected={activeConcept === index}
                  onClick={() => setActiveConcept(index)}
                >
                  {keyConcept.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lss-sec lss-est" id="sigma">
        <div className="lss-wrap">
          <div className="lss-eb dark">
            <div>
              <span className="lss-lab">Sigma calculator</span>
              <h2>
                {"How capable is "}
                <em>your process?</em>
              </h2>
              <p className="lss-t">
                Drag the slider to see how each sigma level translates to defects per million
                opportunities and process yield.
              </p>
              <div className="lss-big">
                <b>{currentBelt.level}</b>
                <span>σ level</span>
              </div>
            </div>
            <div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={beltLevel}
                onChange={(event) => setBeltLevel(Number(event.target.value))}
                aria-label="Sigma level"
              />
              <div className="lss-sg">
                {beltLevels.map((beltLevel2) => (
                  <div
                    key={beltLevel2.level}
                    className={`lss-tier ${beltLevel2.level === beltLevel ? "on" : ""}`}
                    onClick={() => setBeltLevel(beltLevel2.level)}
                  >
                    <b>{beltLevel2.level}σ</b>level
                  </div>
                ))}
              </div>
              <div key={currentBelt.level} className="lss-glass">
                <h3>
                  {currentBelt.level}
                  {" sigma"}
                </h3>
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {currentBelt.desc}
                </p>
                <div className="lss-sv">
                  <div>
                    <b>{currentBelt.dpmo}</b>
                    <span>DPMO</span>
                  </div>
                  <div>
                    <b>{currentBelt.yield}</b>
                    <span>Yield</span>
                  </div>
                </div>
              </div>
              <p className="lss-note">
                Values use the conventional 1.5σ long-term shift. Indicative figures only.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lss-sec lss-cmp">
        <div className="lss-wrap">
          <div
            style={{
              maxWidth: "820px",
            }}
          >
            <span className="lss-lab">Where we apply it</span>
            <h2
              className="lss-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Real problems. "}
              <em>Real savings.</em>
            </h2>
          </div>
          <div className="lss-cs">
            {services.map((service) => (
              <article key={service.num}>
                <b>{service.num}</b>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="lss-sec"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="lss-wrap lss-vs">
          <div className="lss-pn a">
            <span className="lss-lab">Benefits for you</span>
            <h2 className="lss-h2">
              {"What you "}
              <em>gain.</em>
            </h2>
            <ul>
              <li>Measurable reductions in cost, waste and cycle time.</li>
              <li>Consistent quality and higher customer satisfaction.</li>
              <li>Decisions grounded in data, not opinion.</li>
              <li>Engaged teams equipped with practical tools.</li>
            </ul>
          </div>
          <div className="lss-pn b dark">
            <span
              className="lss-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              Why partner with Meridian?
            </span>
            <h2
              className="lss-h2"
              style={{
                color: "#fff",
              }}
            >
              {"Guided by "}
              <span>practitioners.</span>
            </h2>
            <ul>
              <li>Experienced Black Belts and quality professionals.</li>
              <li>Hands-on coaching tied to real business projects.</li>
              <li>Offices across Saudi Arabia, Bahrain, Canada and Pakistan.</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="lss-sec lss-cmp"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="lss-wrap">
          <div
            style={{
              maxWidth: "820px",
            }}
          >
            <span className="lss-lab">Who we work with</span>
            <h2
              className="lss-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Built for teams that "}
              <em>improve</em>
              {" for a living."}
            </h2>
            <div className="lss-who">
              {industries.map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lss-role">
        <div className="lss-wrap">
          <span className="lss-lab">Questions answered</span>
          <p className="lss-q">
            {"Improvement that "}
            <span>pays for itself,</span>
            {" and keeps paying."}
          </p>
          <div className="lss-faq">
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
      <section className="lss-cta dark" id="contact">
        <div className="lss-wrap lss-cg">
          <div>
            <h2>
              {"Ready to improve "}
              <span>with confidence?</span>
            </h2>
            <p className="lss-t">
              Talk to our team about a Lean Six Sigma diagnostic for your organisation.
            </p>
            <Link className="lss-btn" to="/contact-us">
              Book a consultation ↗
            </Link>
          </div>
          <dl className="lss-ct">
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
