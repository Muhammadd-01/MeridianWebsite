import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Energy",
  "Water",
  "Utilities",
  "HVAC",
  "Lighting",
  "Boilers",
  "Benchmarking",
  "ROI Modeling",
  "ISO 50001",
];
const auditAreas = [
  {
    t: "Energy",
    h: "Energy usage",
    p: "Analyze your facility’s energy usage and pinpoint waste.",
  },
  {
    t: "Water",
    h: "Water usage",
    p: "Resource optimization improves water usage to drive efficiency and sustainability.",
  },
  {
    t: "Materials",
    h: "Material usage",
    p: "Resource optimization improves materials usage to drive efficiency and sustainability.",
  },
  {
    t: "Utilities",
    h: "Utility usage",
    p: "Resource optimization improves utility usage to drive efficiency and sustainability.",
  },
];
export default function EnergyAudits() {
  const [activeArea, setActiveArea] = useState(0);
  const circumference = 2 * Math.PI * 84;
  const segmentLength = circumference / auditAreas.length;
  const segmentGap = 8;
  return (
    <div className="ea-page">
      <section className="ea-hero dark" id="top">
        <div className="ea-hero-bg" aria-hidden="true" />
        <div className="ea-wrap">
          <p className="ea-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services">Services</Link>
            {" /"} <Link to="/services/sustainability">Sustainability</Link>
            {" / "}
            <b>Energy Audits</b>
          </p>
          <h1>
            Identify inefficiencies, reduce costs, and boost sustainability{" "}
            <span>across your operations.</span>
          </h1>
          <p className="ea-lead">
            Energy audits analyze your facility’s energy usage and pinpoint waste, then go further
            to optimize water, materials, and utilities.
          </p>
          <div className="ea-acts">
            <Link className="ea-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="ea-btn o" href="#what">
              {"What are energy audits? "}
              <i>↓</i>
            </a>
          </div>
          <div className="ea-scopes">
            <div>
              <small>Step 01</small>
              <b>Baseline assessment</b>
            </div>
            <div>
              <small>Step 02</small>
              <b>Site-level walkthrough</b>
            </div>
            <div>
              <small>Step 03</small>
              <b>{"Data analysis & benchmarking"}</b>
            </div>
            <div>
              <small>Step 04</small>
              <b>{"Recommendations & ROI"}</b>
            </div>
          </div>
        </div>
      </section>
      <div className="ea-tape" aria-hidden="true">
        <div className="ea-tp">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="ea-sec" id="what">
        <div className="ea-wrap ea-wh">
          <div>
            <span className="ea-lab">{"What Are Energy Audits & Resource Optimization?"}</span>
            <h2 className="ea-h2">
              {"Every "}
              <em>kilowatt,</em>
              {" accounted for."}
            </h2>
            <p className="ea-def">
              {"Energy audits "}
              <b>analyze your facility’s energy usage</b>
              {
                " and pinpoint waste. Resource optimization goes beyond — improving water, materials, and utility usage to drive efficiency and sustainability."
              }
            </p>
            <div className="ea-std">
              <span>Energy</span>
              <span>Water</span>
              <span>Materials</span>
              <span>Utilities</span>
              <span>ISO 50001</span>
            </div>
          </div>
          <div className="ea-gauge">
            <div className="top">
              <span>Audit focus</span>
              <b>Tap a segment</b>
            </div>
            <svg
              viewBox="0 0 240 240"
              role="group"
              aria-label="Energy, water, materials and utilities"
            >
              <circle
                cx="120"
                cy="120"
                r="84"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="26"
              />
              <g transform="rotate(-90 120 120)">
                {auditAreas.map((auditArea, index) => (
                  <circle
                    key={auditArea.t}
                    className={`ea-arc ${activeArea === index ? "on" : ""}`}
                    tabIndex={0}
                    role="button"
                    aria-label={auditArea.t}
                    cx="120"
                    cy="120"
                    r="84"
                    strokeDasharray={`${segmentLength - segmentGap} ${circumference - segmentLength + segmentGap}`}
                    strokeDashoffset={-index * segmentLength}
                    onClick={() => setActiveArea(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveArea(index);
                      }
                    }}
                  />
                ))}
              </g>
              <text x="120" y="118" fontSize="40">
                {activeArea + 1}
              </text>
              <text
                x="120"
                y="142"
                fontSize="13"
                style={{
                  fontStyle: "normal",
                  letterSpacing: "0.14em",
                  fontFamily: "var(--ea-mono)",
                  fill: "var(--ea-soft2)",
                }}
              >
                FOCUS
              </text>
            </svg>
            <div key={activeArea} className="ea-gd">
              <small>
                {auditAreas[activeArea].t}
                {" · "}
                {activeArea + 1}
                {" of "}
                {auditAreas.length}
              </small>
              <h3>{auditAreas[activeArea].h}</h3>
              <p>{auditAreas[activeArea].p}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ea-sec ea-why" id="why">
        <div className="ea-wrap">
          <div className="ea-why-h">
            <div>
              <span className="ea-lab">Why It Matters</span>
              <h2 className="ea-h2">
                {"Why energy "}
                <em>audits</em>
                {" matter."}
              </h2>
            </div>
            <p>
              Finding where energy and resources are wasted is the first step to lower costs and
              better performance.
            </p>
          </div>
          <ul className="ea-wl">
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="1"
            >
              <small>01</small>
              <b>Strengthen environmental stewardship.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="2"
            >
              <small>02</small>
              <b>Reduce operational costs and energy waste.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="3"
            >
              <small>03</small>
              <b>Meet sustainability and ESG performance goals.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="4"
            >
              <small>04</small>
              <b>Enhance asset performance and maintenance planning.</b>
            </li>
            <li
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=75')",
              }}
              data-n="5"
            >
              <small>05</small>
              <b>Improve compliance with ISO 50001 or national regulations.</b>
            </li>
          </ul>
        </div>
      </section>
      <section className="ea-sec ea-proc dark" id="steps">
        <div className="ea-wrap ea-pg">
          <div className="ea-sticky">
            <span className="ea-lab">Our Process</span>
            <h2 className="ea-h2">
              {"Our audit & "}
              <em>optimization</em>
              {" process."}
            </h2>
            <p>
              Four clear stages take you from understanding current consumption to a costed plan for
              saving.
            </p>
          </div>
          <div>
            <ul className="ea-tl">
              <li>
                <i>01</i>
                <div>
                  <h3>Baseline Assessment</h3>
                  <p>Analyze current energy, water, and utility consumption.</p>
                </div>
              </li>
              <li>
                <i>02</i>
                <div>
                  <h3>Site-Level Walkthrough</h3>
                  <p>Inspect systems (HVAC, lighting, boilers, etc.) for inefficiencies.</p>
                </div>
              </li>
              <li>
                <i>03</i>
                <div>
                  <h3>{"Data Analysis & Benchmarking"}</h3>
                  <p>Compare usage against industry standards and KPIs.</p>
                </div>
              </li>
              <li
                style={{
                  borderBottom: "1px solid #1f3d44",
                }}
              >
                <i>04</i>
                <div>
                  <h3>{"Recommendations & ROI Modeling"}</h3>
                  <p>Provide savings opportunities and ROI estimates.</p>
                </div>
              </li>
            </ul>
            <div className="ea-kb">
              <small>Key Benefits</small>
              <ul>
                <li>Up to 30% reduction in utility costs.</li>
                <li>Improved asset lifespan and performance.</li>
                <li>Quick wins and long-term sustainability gains.</li>
                <li>{"Supports green certification & ISO 50001 readiness."}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ea-sec" id="meridian">
        <div className="ea-wrap">
          <div className="ea-ch-h">
            <div>
              <span className="ea-lab">Why Choose Meridian?</span>
              <h2 className="ea-h2">
                {"Why choose "}
                <em>Meridian?</em>
              </h2>
            </div>
          </div>
          <ul className="ea-cl">
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
              {"Certified Energy Auditors & Engineers."}
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
              Technology-Driven Insights with Real-Time Data Options.
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
                <rect x="7" y="5" width="26" height="30" rx="4" />
                <path d="M13 14h14M13 20h14M13 26h8" />
                <circle cx="29" cy="30" r="6" fill="#f2e6a2" />
                <path d="m26.5 30 2 2 3.5-4" />
              </svg>
              Sector-Specific Experience (Manufacturing, Healthcare, Hospitality, etc.).
            </li>
          </ul>
        </div>
      </section>
      <section className="ea-role dark">
        <div className="ea-wrap">
          <span className="ea-lab">Role of Energy Consultants</span>
          <h2>
            {"Hidden savings, "}
            <em>found from the inside out.</em>
          </h2>
          <p>
            We help you uncover hidden savings and build efficient, sustainable operations from the
            inside out.
          </p>
        </div>
      </section>
      <section className="ea-cta-w" id="contact">
        <div className="ea-wrap">
          <div className="ea-cta">
            <div>
              <span className="ea-lab">Book a Free Consultation</span>
              <h2>
                {"Want to slash energy costs "}
                <span>without sacrificing performance?</span>
              </h2>
              <p className="t">Contact our audit experts today.</p>
              <Link className="ea-btn dk" to="/contact-us">
                {"Book a Free Consultation "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="ea-ct">
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
