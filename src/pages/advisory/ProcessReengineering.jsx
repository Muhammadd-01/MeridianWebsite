import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Process mapping",
  "Root cause analysis",
  "Future-state design",
  "KPIs",
  "Lean",
  "Six Sigma",
  "BPR",
  "Agility",
  "Efficiency",
];
const processSteps = [
  {
    step: "First step",
    num: "01",
    title: "Process Mapping & Diagnosis",
    desc: "Detailed mapping of current workflows to identify inefficiencies, duplication, and non-value-adding activities.",
  },
  {
    step: "Second step",
    num: "02",
    title: "Root Cause Analysis",
    desc: "Pinpointing systemic failures and performance barriers using Lean, Six Sigma, and data-based insights.",
  },
  {
    step: "Third step",
    num: "03",
    title: "Future-State Design",
    desc: "We co-create optimized, scalable processes aligned with your business goals and digital transformation plans.",
  },
  {
    step: "Fourth step",
    num: "04",
    title: "Implementation & Monitoring",
    desc: "We manage the rollout, embed KPIs, and ensure continuous tracking with stakeholder alignment and change support.",
  },
];
const currentStateMap = {
  d: "M50 70H170V160H290V70H410V230H530V150H590",
  n: [
    [50, 70],
    [170, 70],
    [170, 160],
    [290, 160],
    [290, 70],
    [410, 70],
    [410, 230],
    [530, 230],
    [590, 150],
  ],
  x: [2, 4, 6],
  h: "Current state",
  p: "Existing workflows with bottlenecks, duplication and outdated steps.",
};
const futureStateMap = {
  d: "M60 150H580",
  n: [
    [60, 150],
    [220, 150],
    [400, 150],
    [580, 150],
  ],
  x: [],
  h: "Future state",
  p: "Optimized, scalable, future-ready systems aligned with strategic goals.",
};
export default function ProcessReengineering() {
  const [showFutureState, setShowFutureState] = useState(false);
  const [openPanel, setOpenPanel] = useState(0);
  const activeMap = showFutureState ? futureStateMap : currentStateMap;
  return (
    <div className="bpr-page">
      <section className="bpr-hero dark" id="top">
        <div className="bpr-hero-bg" aria-hidden="true" />
        <div className="bpr-wrap bpr-hg">
          <div>
            <p className="bpr-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>Process Reengineering Consulting</b>
            </p>
            <h1>
              Rethink, redesign, and revitalize your business processes{" "}
              <span>for greater agility and efficiency.</span>
            </h1>
            <p className="bpr-lead">
              Rethink, redesign, and revitalize your business processes for greater agility,
              efficiency, and competitive advantage.
            </p>
            <div className="bpr-acts">
              <Link className="bpr-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="bpr-btn o" href="#what">
                {"What is reengineering? "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="bpr-hs">
            <div>
              <small>Cost reductions</small>
              <b>30–50%</b>
              <span>Achievable with BPR</span>
            </div>
            <div>
              <small>Cycle time improvements</small>
              <b>50–75%</b>
              <span>Achievable with BPR</span>
            </div>
          </div>
        </div>
      </section>
      <div className="bpr-tape" aria-hidden="true">
        <div className="bpr-tp">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="bpr-sec" id="what">
        <div className="bpr-wrap bpr-wh">
          <div>
            <span className="bpr-lab">What Is Process Reengineering?</span>
            <h2 className="bpr-h2">
              {"Rethink workflows "}
              <em>from the ground up.</em>
            </h2>
            <p className="bpr-def">
              {"Process Reengineering is a "}
              <b>transformative approach</b>
              {
                " that rethinks existing workflows from the ground up — eliminating bottlenecks, reducing costs, and aligning operations with strategic goals."
              }
            </p>
            <p className="bpr-def">
              We help you unlock innovation by shifting from outdated processes to high-impact,
              future-ready systems.
            </p>
          </div>
          <div className="bpr-fl">
            <div className="bpr-seg" role="group" aria-label="Process state">
              <button
                type="button"
                aria-pressed={!showFutureState}
                onClick={() => setShowFutureState(false)}
              >
                Current state
              </button>
              <button
                type="button"
                aria-pressed={showFutureState}
                onClick={() => setShowFutureState(true)}
              >
                Future state
              </button>
            </div>
            <svg viewBox="0 0 640 290" role="img" aria-label="Workflow diagram">
              <g key={showFutureState ? "future" : "current"}>
                <path
                  d={activeMap.d}
                  fill="none"
                  stroke={showFutureState ? "#f2e6a2" : "#9fbab9"}
                  strokeWidth={showFutureState ? 5 : 3}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeDasharray={showFutureState ? "none" : "2 8"}
                />
                {activeMap.n.map((item, index) => {
                  const isHighlighted = activeMap.x.includes(index);
                  const isLast = index === activeMap.n.length - 1;
                  if (isHighlighted) {
                    return (
                      <g key={index}>
                        <circle
                          cx={item[0]}
                          cy={item[1]}
                          r="18"
                          fill="none"
                          stroke="#f78d00"
                          strokeWidth="2.5"
                          strokeDasharray="5 4"
                        />
                        <text
                          x={item[0]}
                          y={item[1] + 6}
                          textAnchor="middle"
                          fontSize="18"
                          fill="#f78d00"
                          fontFamily="ui-monospace,monospace"
                        >
                          ×
                        </text>
                      </g>
                    );
                  }
                  const radius = showFutureState ? (isLast ? 26 : 20) : 16;
                  return (
                    <g key={index}>
                      <circle
                        cx={item[0]}
                        cy={item[1]}
                        r={radius}
                        fill={isLast ? "#f2e6a2" : "#145d68"}
                        stroke={isLast ? "#f2e6a2" : "#9fbab9"}
                        strokeWidth="2.5"
                      />
                      {isLast && showFutureState && (
                        <text
                          x={item[0]}
                          y={item[1] + 7}
                          textAnchor="middle"
                          fontSize="22"
                          fill="#093f50"
                          fontWeight="700"
                        >
                          ✓
                        </text>
                      )}
                    </g>
                  );
                })}
                <circle r="7" fill="#f78d00">
                  <animateMotion
                    dur={showFutureState ? "3.2s" : "9s"}
                    repeatCount="indefinite"
                    path={activeMap.d}
                  />
                </circle>
                <text
                  x={activeMap.n[0][0]}
                  y={showFutureState ? 205 : 290}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#c1d2d1"
                  fontFamily="ui-monospace,monospace"
                  letterSpacing="2"
                >
                  START
                </text>
                <text
                  x={activeMap.n[activeMap.n.length - 1][0]}
                  y={showFutureState ? 205 : 195}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#c1d2d1"
                  fontFamily="ui-monospace,monospace"
                  letterSpacing="2"
                >
                  OUTCOME
                </text>
              </g>
            </svg>
            <div key={activeMap.h} className="cap">
              <b>{activeMap.h}</b>
              {activeMap.p}
            </div>
          </div>
        </div>
      </section>
      <section className="bpr-sec bpr-why" id="why">
        <div className="bpr-wrap">
          <div className="bpr-why-h">
            <div>
              <span className="bpr-lab">Why It Matters</span>
              <h2 className="bpr-h2">
                {"Why process reengineering "}
                <em>matters.</em>
              </h2>
            </div>
            <p>Five shifts that move operations closer to strategy.</p>
          </div>
          <ul className="bpr-vb">
            <li>
              <b>Eliminate</b>
              <span>redundant and outdated steps in critical workflows.</span>
              <em>→</em>
            </li>
            <li>
              <b>Align</b>
              <span>operational performance with business strategy.</span>
              <em>→</em>
            </li>
            <li>
              <b>Boost</b>
              <span>efficiency, speed, and stakeholder satisfaction.</span>
              <em>→</em>
            </li>
            <li>
              <b>Reduce</b>
              <span>overhead and resource wastage.</span>
              <em>→</em>
            </li>
            <li>
              <b>Improve</b>
              <span>responsiveness in dynamic market conditions.</span>
              <em>→</em>
            </li>
          </ul>
        </div>
      </section>
      <section className="bpr-stats dark" id="results">
        <div className="bpr-wrap">
          <span className="bpr-lab">The Evidence</span>
          <h2>
            {"What reengineering "}
            <em>can deliver.</em>
          </h2>
          <p className="by">
            <b>According to a McKinsey study</b>, organizations that implement Business Process
            Reengineering (BPR) can achieve <b>30–50% cost reductions</b>
            {" and "}
            <b>cycle time improvements of 50–75%</b>.
          </p>
          <div className="bpr-sg">
            <div>
              <div className="n">30–50%</div>
              <div className="t">Cost reductions</div>
              <div className="bpr-rng">
                <i
                  style={{
                    left: "30%",
                    width: "20%",
                  }}
                />
              </div>
              <div className="bpr-sc-range">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
            <div>
              <div className="n">50–75%</div>
              <div className="t">Cycle time improvements</div>
              <div className="bpr-rng">
                <i
                  style={{
                    left: "50%",
                    width: "25%",
                  }}
                />
              </div>
              <div className="bpr-sc-range">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
          <p className="bpr-src">
            Source:{" "}
            <a
              href="https://www.sixsigma-institute.org/Six_Sigma_Vs_Business_Process_Reengineering_Comparison.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Six Sigma vs. Business Process Reengineering – Six Sigma Institute
            </a>
          </p>
        </div>
      </section>
      <section className="bpr-sec bpr-proc dark" id="steps">
        <div className="bpr-wrap">
          <div className="bpr-ph">
            <div>
              <span className="bpr-lab">Our Framework</span>
              <h2 className="bpr-h2">
                {"Our 4-step reengineering "}
                <em>framework.</em>
              </h2>
            </div>
            <p>Select a step to read more.</p>
          </div>
          <div className="bpr-ex">
            {processSteps.map((processStep, index) => (
              <button
                key={processStep.num}
                type="button"
                className={`bpr-pnl ${openPanel === index ? "on" : ""}`}
                aria-expanded={openPanel === index}
                onClick={() => setOpenPanel(index)}
                onMouseEnter={() => setOpenPanel(index)}
              >
                <div>
                  <i>{processStep.num}</i>
                </div>
                <div>
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bpr-ben" id="benefits">
        <div className="bpr-wrap">
          <div>
            <span className="bpr-lab">Key Benefits</span>
            <h2 className="bpr-h2">Key benefits.</h2>
          </div>
          <ul className="bpr-cp">
            <li>Agile, streamlined operations.</li>
            <li>Significant cost and time savings.</li>
            <li>Enhanced process transparency and accountability.</li>
            <li>Better customer, employee, and vendor experiences.</li>
            <li>Stronger alignment between strategy and execution.</li>
          </ul>
        </div>
      </section>
      <section className="bpr-sec" id="meridian">
        <div className="bpr-wrap">
          <div className="bpr-ch-h">
            <span className="bpr-lab">Why Choose Meridian?</span>
            <h2 className="bpr-h2">
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ol className="bpr-er">
            <li>
              <i>01</i>
              <b>Proven Reengineering Expertise</b>
              <p>
                From supply chains to service delivery, our specialists have redesigned processes
                across industries and functions.
              </p>
            </li>
            <li>
              <i>02</i>
              <b>Customized for Your Business</b>
              <p>
                We don’t apply templates. Every reengineering project is grounded in your unique
                business context and needs.
              </p>
            </li>
            <li>
              <i>03</i>
              <b>Quantifiable Results</b>
              <p>
                Our clients consistently report measurable ROI, reduced cycle times, and improved
                stakeholder satisfaction.
              </p>
            </li>
            <li>
              <i>04</i>
              <b>Cross-Functional Experience</b>
              <p>
                From healthcare and hospitality to manufacturing and logistics — we stay in sync
                with your industry’s evolving dynamics.
              </p>
            </li>
            <li>
              <i>05</i>
              <b>Full Lifecycle Engagement</b>
              <p>
                We stay through the transformation journey — from diagnostics to rollout and
                post-implementation refinement.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="bpr-role dark">
        <div className="bpr-wrap">
          <span className="bpr-lab">Role of Process Reengineering Consultants</span>
          <h2>
            {"Transformation "}
            <em>catalysts.</em>
          </h2>
          <p>
            Our consultants act as transformation catalysts — engaging with teams, identifying
            inefficiencies, driving innovation, and ensuring full adoption of reengineered
            workflows.
          </p>
          <div className="bpr-verbs">
            <span>Engaging teams</span>
            <span>Identifying inefficiencies</span>
            <span>Driving innovation</span>
            <span>Ensuring full adoption</span>
          </div>
        </div>
      </section>
      <section className="bpr-cta-w" id="contact">
        <div className="bpr-wrap">
          <div className="bpr-cta">
            <div>
              <span className="bpr-lab">Book a Free Consultation</span>
              <h2>
                {"Ready to reimagine "}
                <span>your business processes?</span>
              </h2>
              <p className="t">
                To explore how process reengineering can unlock agility, efficiency, and innovation
                in your operations.
              </p>
              <Link className="bpr-btn dk" to="/contact-us">
                {"Book a Free Consultation "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="bpr-ct">
              <div>
                <dt>Call us</dt>
                <dd>
                  <a href="tel:+966509394640">+966 50 939 4640</a>
                </dd>
              </div>
              <div>
                <dt>Need support</dt>
                <dd>
                  <a href="mailto:info@meqmp.com">info@meqmp.com</a>
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
