import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "HVAC",
  "Lighting",
  "Compressed air",
  "Boilers",
  "Motors",
  "Production equipment",
  "Utilities",
  "ISO 50001",
];
const SITE_REVIEW =
  "Reviewed as part of the site assessment of major energy users and their operating conditions.";
const auditAreas = [
  { t: "HVAC", h: "HVAC", p: SITE_REVIEW },
  { t: "Lighting", h: "Lighting", p: SITE_REVIEW },
  { t: "Compressed air", h: "Compressed air", p: SITE_REVIEW },
  { t: "Boilers", h: "Boilers", p: SITE_REVIEW },
  { t: "Motors", h: "Motors", p: SITE_REVIEW },
  { t: "Production equipment", h: "Production equipment and other utilities", p: SITE_REVIEW },
];
const approach = [
  {
    h: "Energy data review",
    p: "Examine utility bills, consumption records, operating schedules and available equipment information to establish a baseline.",
  },
  {
    h: "Site assessment",
    p: "Review relevant systems and operating conditions, including HVAC, lighting, motors, boilers and other major energy users.",
  },
  {
    h: "Analysis and opportunity assessment",
    p: "Identify inefficiencies, compare performance where suitable and estimate potential savings using stated assumptions.",
  },
  {
    h: "Recommendations and action planning",
    p: "Prioritise improvement measures by expected energy impact, cost, implementation requirements and operational considerations.",
  },
];
const findings = [
  { b: "Excessive energy consumption in major systems.", img: "1466611653911-95081537e5b7" },
  { b: "Inefficient operating schedules and controls.", img: "1554224155-6726b3ff858f" },
  { b: "Equipment or maintenance issues affecting performance.", img: "1581092918056-0c4c3acd3789" },
  { b: "Opportunities to reduce electricity, fuel and water use.", img: "1552664730-d307ca884978" },
  { b: "Potential improvements to monitoring and maintenance.", img: "1450101499163-c8848c66ca85" },
  { b: "Measures that may support ISO 50001 implementation.", img: "1581091226825-a6a2a5aee158" },
];
export default function EnergyAudits() {
  usePageMeta(
    "Energy Audit Services & Resource Optimization | Meridian",
    "Identify energy and resource inefficiencies through facility and process energy audits. Get consumption analysis, improvement recommendations and action planning.",
  );
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
            <b>Energy Audits &amp; Resource Optimization</b>
          </p>
          <h1>
            Find out where energy and resources are being used,{" "}
            <span>and where they are being wasted.</span>
          </h1>
          <p className="ea-lead">
            High utility costs do not always mean an organisation needs new equipment. Inefficient
            operating schedules, poor system controls, maintenance issues and unnecessary
            consumption can all affect performance.
          </p>
          <p className="ea-lead">
            An energy audit examines how a facility, process or system uses energy and identifies
            opportunities to improve efficiency. Meridian provides energy audit and resource
            assessment support to help organisations understand consumption patterns, investigate
            inefficiencies and prioritise improvement measures.
          </p>
          <div className="ea-acts">
            <a className="ea-btn" href="#contact">
              {"Request an Energy Audit "}
              <i>↗</i>
            </a>
            <a className="ea-btn o" href="#steps">
              {"Our audit approach "}
              <i>↓</i>
            </a>
          </div>
          <div className="ea-scopes">
            {approach.map((step, index) => (
              <div key={step.h}>
                <small>Step {String(index + 1).padStart(2, "0")}</small>
                <b>{step.h}</b>
              </div>
            ))}
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
            <span className="ea-lab">01. Energy and resource use</span>
            <h2 className="ea-h2">
              {"What is driving your "}
              <em>energy consumption?</em>
            </h2>
            <p className="ea-def">
              Energy use can be spread across several systems: HVAC, lighting, compressed air,
              boilers, motors, production equipment and other utilities.
            </p>
            <p className="ea-def">
              Without a clear picture of how these systems operate, it is difficult to distinguish
              essential consumption from avoidable waste.
            </p>
            <p className="ea-def">
              An audit provides a structured review of available data and site conditions, helping
              identify where further investigation or corrective action is worthwhile.
            </p>
          </div>
          <div className="ea-gauge">
            <div className="top">
              <span>Major energy users</span>
              <b>Tap a segment</b>
            </div>
            <svg viewBox="0 0 240 240" role="group" aria-label="Major energy-using systems">
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
                SYSTEM
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
      <section className="ea-sec ea-proc dark" id="steps">
        <div className="ea-wrap ea-pg">
          <div className="ea-sticky">
            <span className="ea-lab">02. Our audit approach</span>
            <h2 className="ea-h2">
              {"Our audit "}
              <em>approach.</em>
            </h2>
          </div>
          <div>
            <ul className="ea-tl">
              {approach.map((step, index) => (
                <li
                  key={step.h}
                  style={index === approach.length - 1 ? { borderBottom: "1px solid #1f3d44" } : undefined}
                >
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <div>
                    <h3>{step.h}</h3>
                    <p>{step.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="ea-sec ea-why" id="why">
        <div className="ea-wrap">
          <div className="ea-why-h">
            <div>
              <span className="ea-lab">03. What the audit can identify</span>
              <h2 className="ea-h2">
                {"What the audit "}
                <em>can identify.</em>
              </h2>
            </div>
          </div>
          <ul className="ea-wl">
            {findings.map((item, index) => (
              <li
                key={item.b}
                style={{
                  "--img": `url('https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=1000&q=75')`,
                }}
                data-n={index + 1}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                <b>{item.b}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ea-role dark">
        <div className="ea-wrap">
          <span className="ea-lab">04. Why work with Meridian?</span>
          <h2>
            {"Why work with "}
            <em>Meridian?</em>
          </h2>
          <p>
            An energy audit should give decision-makers more than a list of possible upgrades. It
            should help them understand the reasons behind consumption and compare improvement
            options.
          </p>
          <p>
            Meridian&apos;s approach connects site observations and consumption data with
            recommendations that can be considered by facilities, engineering and management teams.
          </p>
        </div>
      </section>
      <section className="ea-cta-w" id="contact">
        <div className="ea-wrap">
          <div className="ea-cta">
            <div>
              <span className="ea-lab">05. Request an Energy Audit</span>
              <h2>
                {"Where could your facility "}
                <span>reduce waste?</span>
              </h2>
              <p className="t">
                Tell us about your site, its main energy systems and the issues you want
                investigated. We can discuss an appropriate audit scope.
              </p>
            </div>
            <EnquiryForm subjectPrefix="Energy audit request" submitLabel="Request an Energy Audit" />
          </div>
        </div>
      </section>
    </div>
  );
}
