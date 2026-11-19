import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Scope 1",
  "Scope 2",
  "Scope 3",
  "ISO 14064",
  "GHG Protocol",
  "Net Zero",
  "Green financing",
  "ESG ratings",
];
const scopes = [
  {
    num: 1,
    t: "Scope 1",
    h: "Direct emissions",
    p: "Emissions from sources your organization owns or controls directly.",
  },
  {
    num: 2,
    t: "Scope 2",
    h: "Purchased energy",
    p: "Indirect emissions from the electricity, heat or steam your operations buy.",
  },
  {
    num: 3,
    t: "Scope 3",
    h: "Value chain",
    p: "All other indirect emissions across your supply chain, products and services.",
  },
];
export default function CarbonFootprint() {
  const [activeScope, setActiveScope] = useState(0);
  const circumference = 2 * Math.PI * 84;
  const segmentLength = circumference / 3;
  const segmentGap = 8;
  const currentScope = scopes[activeScope];
  return (
    <div className="cfa-page">
      <section className="cfa-hero dark">
        <div className="cfa-hero-bg" aria-hidden="true" />
        <div className="cfa-wrap">
          <p className="cfa-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services">Services</Link>
            {" / "}
            <Link to="/services/sustainability">Sustainability</Link>
            {" / "}
            <b>Carbon Footprint Assessment</b>
          </p>
          <h1>
            {"Quantify and reduce your greenhouse gas emissions "}
            <span>with precision.</span>
          </h1>
          <p className="cfa-lead">
            A carbon footprint assessment shows where your emissions come from, so you can cut them,
            report them and build a credible path to Net Zero.
          </p>
          <div className="cfa-acts">
            <Link className="cfa-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="cfa-btn o" href="#what">
              {"What is it? "}
              <i>↓</i>
            </a>
          </div>
          <div className="cfa-scopes">
            <div>
              <small>Step 01</small>
              <b>Scope identification</b>
            </div>
            <div>
              <small>Step 02</small>
              <b>{"Data & emission factors"}</b>
            </div>
            <div>
              <small>Step 03</small>
              <b>Footprint calculation</b>
            </div>
            <div>
              <small>Step 04</small>
              <b>{"Mitigation & offsets"}</b>
            </div>
          </div>
        </div>
      </section>
      <div className="cfa-tape" aria-hidden="true">
        <div className="cfa-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="cfa-sec" id="what">
        <div className="cfa-wrap cfa-wh">
          <div>
            <span className="cfa-lab">What is a Carbon Footprint Assessment?</span>
            <h2 className="cfa-h2">
              {"Every "}
              <em>emission,</em>
              {" measured and accounted for."}
            </h2>
            <p className="cfa-def">
              {"It measures the "}
              <b>total GHG emissions</b>
              {
                " caused directly or indirectly by your organization, product, or service — helping identify reduction opportunities and support carbon neutrality goals."
              }
            </p>
            <div className="cfa-std">
              <span>ISO 14064</span>
              <span>GHG Protocol</span>
              <span>Scope 1 · 2 · 3</span>
              <span>Net Zero</span>
            </div>
          </div>
          <div className="cfa-gauge">
            <div className="top">
              <span>Emission scopes</span>
              <b>Tap a segment</b>
            </div>
            <svg viewBox="0 0 240 240" role="group" aria-label="Scope 1, 2 and 3 emissions">
              <circle
                cx="120"
                cy="120"
                r="84"
                fill="none"
                stroke="rgba(255,255,255,.05)"
                strokeWidth="26"
              />
              <g transform="rotate(-90 120 120)">
                {scopes.map((scope, index) => (
                  <circle
                    key={scope.t}
                    className={`cfa-arc ${activeScope === index ? "on" : ""}`}
                    tabIndex="0"
                    role="button"
                    aria-label={scope.t}
                    cx="120"
                    cy="120"
                    r="84"
                    strokeDasharray={`${segmentLength - segmentGap} ${circumference - segmentLength + segmentGap}`}
                    strokeDashoffset={-index * segmentLength}
                    onClick={() => setActiveScope(index)}
                  />
                ))}
              </g>
              <text x="120" y="118" fontSize="40">
                {currentScope.num}
              </text>
              <text
                x="120"
                y="142"
                fontSize="13"
                style={{
                  fontStyle: "normal",
                  letterSpacing: ".14em",
                  fontFamily: "var(--cfa-mono)",
                  fill: "var(--cfa-soft2)",
                }}
              >
                SCOPE
              </text>
            </svg>
            <div key={currentScope.t} className="cfa-gd">
              <small>
                {currentScope.t}
                {" of 3"}
              </small>
              <h3>{currentScope.h}</h3>
              <p>{currentScope.p}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cfa-sec cfa-why" id="why">
        <div className="cfa-wrap">
          <div className="cfa-why-h">
            <div>
              <span className="cfa-lab">Why It Matters</span>
              <h2 className="cfa-h2">
                {"Why carbon footprint "}
                <em>assessment</em>
                {" matters."}
              </h2>
            </div>
            <p>
              Measuring your emissions is the first move toward funding, credibility and a lower
              impact.
            </p>
          </div>
          <ul className="cfa-wl">
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="1"
            >
              <small>01</small>
              <b>Unlock green financing opportunities.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="2"
            >
              <small>02</small>
              <b>Understand your environmental impact.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="3"
            >
              <small>03</small>
              <b>Strengthen your brand’s climate leadership.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="4"
            >
              <small>04</small>
              <b>Enhance ESG disclosures and sustainability ratings.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="5"
            >
              <small>05</small>
              <b>Meet Net Zero, ISO 14064, or science-based targets.</b>
            </li>
          </ul>
        </div>
      </section>
      <section className="cfa-sec cfa-proc dark" id="steps">
        <div className="cfa-wrap cfa-pg">
          <div className="sticky">
            <span className="cfa-lab">Our Process</span>
            <h2 className="cfa-h2">
              {"Our GHG "}
              <em>assessment</em>
              {" steps."}
            </h2>
            <p>
              Four clear stages take you from defining what to measure to a practical plan for
              reducing it.
            </p>
          </div>
          <div>
            <ul className="cfa-tl">
              <li>
                <i>01</i>
                <div>
                  <h3>Scope Identification</h3>
                  <p>Define Scope 1, 2, and 3 emissions relevant to your business operations.</p>
                </div>
              </li>
              <li>
                <i>02</i>
                <div>
                  <h3>{"Data Collection & Emission Factors"}</h3>
                  <p>
                    Compile, normalize, and verify emissions data with appropriate emission factors.
                  </p>
                </div>
              </li>
              <li>
                <i>03</i>
                <div>
                  <h3>Carbon Footprint Calculation</h3>
                  <p>
                    Calculate the carbon footprint using ISO 14064 and GHG Protocol methodologies.
                  </p>
                </div>
              </li>
              <li
                style={{
                  borderBottom: "1px solid #1f3d44",
                }}
              >
                <i>04</i>
                <div>
                  <h3>{"Mitigation Strategy & Offset Planning"}</h3>
                  <p>Develop practical emission reduction strategies and create offset pathways.</p>
                </div>
              </li>
            </ul>
            <div className="cfa-kb">
              <small>Key Benefits</small>
              <ul>
                <li>Actionable emissions data.</li>
                <li>Cost and energy savings.</li>
                <li>Strategic roadmap toward Net Zero.</li>
                <li>Improved ESG and investor ratings.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cfa-sec" id="meridian">
        <div className="cfa-wrap">
          <div className="cfa-ch-h">
            <div>
              <span className="cfa-lab">Why Choose Meridian?</span>
              <h2 className="cfa-h2">
                {"Why choose "}
                <em>Meridian?</em>
              </h2>
            </div>
          </div>
          <ul className="cfa-cl">
            <li>
              <svg
                viewBox="0 0 40 40"
                fill="none"
                stroke="#093f50"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="7" y="5" width="26" height="30" rx="4" />
                <path d="M13 14h14M13 20h14M13 26h8" />
                <circle cx="29" cy="30" r="6" fill="#f2e6a2" />
                <path d="m26.5 30 2 2 3.5-4" />
              </svg>
              <span>ISO 14064 Expertise.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 40 40"
                fill="none"
                stroke="#093f50"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="20" cy="16" r="9" fill="#f2e6a2" />
                <path d="m16 16 3 3 5-6" />
                <path d="m14 24-3 11 9-4 9 4-3-11" />
              </svg>
              <span>Certified Carbon Auditors.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 40 40"
                fill="none"
                stroke="#093f50"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 30 15 20l6 5 13-15" />
                <path d="M26 10h8v8" />
                <circle cx="15" cy="20" r="3" fill="#f2e6a2" />
                <circle cx="21" cy="25" r="3" fill="#f2e6a2" />
              </svg>
              <span>Real-World Mitigation Planning.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="cfa-role dark">
        <div className="cfa-wrap">
          <span className="cfa-lab">Role of Carbon Footprint Consultants</span>
          <h2 className="cfa-h2">
            {"Climate responsibility, "}
            <em>made practical.</em>
          </h2>
          <p>
            We offer clarity, compliance, and strategy — turning climate responsibility into
            business advantage.
          </p>
        </div>
      </section>
      <section className="cfa-cta-w" id="contact">
        <div className="cfa-wrap">
          <div className="cfa-cta">
            <span className="cfa-lab">Start your emissions audit today</span>
            <h2>
              {"Ready to cut carbon, "}
              <span>not corners?</span>
            </h2>
            <p className="t">Start your emissions audit today with our certified specialists.</p>
            <Link className="cfa-btn dk" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
            <dl className="cfa-ct">
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
