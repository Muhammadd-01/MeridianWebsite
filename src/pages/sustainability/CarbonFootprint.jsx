import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "Scope 1",
  "Scope 2",
  "Scope 3",
  "GHG Protocol",
  "ISO 14064",
  "tCO₂e",
  "Emissions inventory",
  "Reduction planning",
];
const scopes = [
  {
    num: 1,
    t: "Scope 1",
    h: "Direct emissions",
    p: "Emissions from sources owned or controlled by the organisation, such as fuel combustion in company facilities and vehicles.",
  },
  {
    num: 2,
    t: "Scope 2",
    h: "Purchased energy",
    p: "Indirect emissions associated with the generation of purchased electricity, steam, heating and cooling.",
  },
  {
    num: 3,
    t: "Scope 3",
    h: "Other indirect emissions",
    p: "Emissions across the value chain, such as purchased goods and services, business travel, transportation and the use or disposal of products, where relevant.",
  },
];
const process = [
  {
    h: "Organisational boundaries and scope",
    p: "Define the reporting entity, operational boundaries, assessment period and relevant emission sources.",
  },
  {
    h: "Activity data collection",
    p: "Gather energy, fuel, transport, purchasing and other relevant information from business functions and facilities.",
  },
  {
    h: "Emission quantification",
    p: "Apply appropriate emission factors and calculation methods to quantify emissions in tonnes of carbon dioxide equivalent (tCO₂e).",
  },
  {
    h: "Reporting and reduction planning",
    p: "Present the inventory, explain its boundaries and assumptions, identify significant emission sources and develop practical reduction priorities.",
  },
];
const insights = [
  { b: "Which activities contribute most to your emissions.", img: "1554224155-6726b3ff858f" },
  {
    b: "How Scope 1, Scope 2 and relevant Scope 3 sources affect your footprint.",
    img: "1460925895917-afdab827c52f",
  },
  { b: "Where better data collection is needed.", img: "1473448912268-2022ce9509d8" },
  {
    b: "Which operations offer opportunities for emissions reduction.",
    img: "1552664730-d307ca884978",
  },
  {
    b: "How to establish a baseline for future comparison and reporting.",
    img: "1466611653911-95081537e5b7",
  },
];
export default function CarbonFootprint() {
  usePageMeta(
    "Carbon Footprint Assessment | GHG Accounting | Meridian",
    "Measure organisational greenhouse gas emissions with support based on the GHG Protocol and ISO 14064. Understand emissions sources and identify reduction opportunities.",
  );
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
            {"Know where your greenhouse gas emissions come from "}
            <span>before deciding how to reduce them.</span>
          </h1>
          <p className="cfa-lead">
            Energy consumption, fuel use, purchased electricity, transportation, materials and
            business activities can all contribute to an organisation&apos;s greenhouse gas
            emissions.
          </p>
          <p className="cfa-lead">
            A carbon footprint assessment identifies and quantifies these emissions within defined
            boundaries. It gives your organisation a clearer picture of its climate impact and helps
            identify where reductions can be made. Meridian supports organisational and product
            carbon assessments using relevant methodologies, including the GHG Protocol and ISO
            14064.
          </p>
          <div className="cfa-acts">
            <a className="cfa-btn" href="#contact">
              {"Discuss Your Carbon Assessment "}
              <i>↗</i>
            </a>
            <a className="cfa-btn o" href="#what">
              {"What is included? "}
              <i>↓</i>
            </a>
          </div>
          <div className="cfa-scopes">
            {process.map((step, index) => (
              <div key={step.h}>
                <small>Step {String(index + 1).padStart(2, "0")}</small>
                <b>{step.h}</b>
              </div>
            ))}
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
            <span className="cfa-lab">01. Your carbon footprint</span>
            <h2 className="cfa-h2">
              {"What is included in your "}
              <em>carbon footprint?</em>
            </h2>
            <p className="cfa-def">
              For an organisation, emissions are commonly grouped into <b>three scopes</b>: Scope 1
              direct emissions, Scope 2 purchased energy and Scope 3 other indirect emissions.
            </p>
            <p className="cfa-def">
              The categories included depend on the organisation&apos;s activities, reporting
              boundaries and assessment purpose.
            </p>
            <div className="cfa-std">
              <span>GHG Protocol</span>
              <span>ISO 14064</span>
              <span>Scope 1 · 2 · 3</span>
              <span>tCO₂e</span>
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
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveScope(index);
                      }
                    }}
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
      <section className="cfa-sec cfa-proc dark" id="steps">
        <div className="cfa-wrap cfa-pg">
          <div className="sticky">
            <span className="cfa-lab">02. Our carbon assessment process</span>
            <h2 className="cfa-h2">
              {"Our carbon "}
              <em>assessment</em>
              {" process."}
            </h2>
          </div>
          <div>
            <ul className="cfa-tl">
              {process.map((step, index) => (
                <li
                  key={step.h}
                  style={index === process.length - 1 ? { borderBottom: "1px solid #1f3d44" } : undefined}
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
      <section className="cfa-sec cfa-why" id="why">
        <div className="cfa-wrap">
          <div className="cfa-why-h">
            <div>
              <span className="cfa-lab">03. What the assessment helps you understand</span>
              <h2 className="cfa-h2">
                {"What the assessment "}
                <em>helps you understand.</em>
              </h2>
            </div>
          </div>
          <ul className="cfa-wl">
            {insights.map((item, index) => (
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
      <section className="cfa-role dark">
        <div className="cfa-wrap">
          <span className="cfa-lab">04. Why work with Meridian?</span>
          <h2 className="cfa-h2">
            {"Why work with "}
            <em>Meridian?</em>
          </h2>
          <p>
            Carbon accounting requires more than multiplying energy bills by emission factors.
            Boundaries, data quality, calculation methods and assumptions all affect the result.
          </p>
          <p>
            Meridian helps organisations establish a documented emissions inventory and connect the
            findings with operational reduction opportunities and sustainability reporting needs.
          </p>
        </div>
      </section>
      <section className="cfa-cta-w" id="contact">
        <div className="cfa-wrap">
          <div className="cfa-cta">
            <div>
              <span className="cfa-lab">05. Request a Carbon Footprint Assessment</span>
              <h2>
                {"Ready to measure "}
                <span>your emissions?</span>
              </h2>
              <p className="t">
                Tell us whether you need an organisational carbon footprint, a product carbon
                footprint or an assessment for a particular facility or activity.
              </p>
            </div>
            <EnquiryForm
              subjectPrefix="Carbon footprint assessment request"
              submitLabel="Request a Carbon Footprint Assessment"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
