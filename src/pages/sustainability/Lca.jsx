import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "Life Cycle Assessment",
  "Raw materials",
  "Manufacturing",
  "Packaging",
  "Transport",
  "Use",
  "End-of-life",
  "Goal and scope",
  "Life cycle inventory",
  "Impact assessment",
  "Interpretation",
  "ISO 14040",
  "ISO 14044",
];
const STAGE_NOTE =
  "Life Cycle Assessment examines this stage to identify where environmental impacts occur and where changes may make the greatest difference.";
const lifecycleStages = [
  { t: "Raw materials", p: [220, 75], l: [220, 44, "middle"] },
  { t: "Manufacturing", p: [320, 148], l: [352, 152, "start"] },
  { t: "Packaging and transport", p: [282, 265], l: [282, 304, "middle"] },
  { t: "Use", p: [158, 265], l: [158, 304, "middle"] },
  { t: "End-of-life", p: [120, 148], l: [88, 152, "end"] },
];
const methodology = [
  {
    n: "1",
    h: "Goal and scope definition",
    p: "Establish the purpose of the study, intended audience, functional unit, system boundaries and assumptions.",
    c: ["Purpose of the study", "Intended audience", "Functional unit", "System boundaries", "Assumptions"],
  },
  {
    n: "2",
    h: "Life cycle inventory",
    p: "Collect data on materials, energy, water, transport, emissions and other relevant inputs and outputs.",
    c: ["Materials", "Energy", "Water", "Transport", "Emissions"],
  },
  {
    n: "3",
    h: "Life cycle impact assessment",
    p: "Evaluate the potential environmental impacts associated with the inventory using appropriate impact assessment methods.",
    c: ["Potential environmental impacts", "Impact assessment methods"],
  },
  {
    n: "4",
    h: "Interpretation and reporting",
    p: "Identify significant contributors, review data limitations and present findings and recommendations.",
    c: ["Significant contributors", "Data limitations", "Findings and recommendations"],
  },
];
const uses = [
  "Product design and material selection.",
  "Identification of environmental hotspots.",
  "Supply chain and manufacturing decisions.",
  "Comparison of product or process alternatives, where the study design allows.",
  "Environmental product information and sustainability reporting.",
  "Support for relevant environmental declarations and customer requirements.",
];
const icons = [
  [<path key="a" d="M6 36l10-12 8 6 14-20" />, <path key="b" d="M28 10h10v10" />],
  [
    <path key="a" d="M22 38V18" />,
    <path key="b" d="M22 24c-9 0-14-5-14-13 9 0 14 5 14 13z" />,
    <path key="c" d="M22 28c7 0 12-4 12-11-7 0-12 4-12 11z" />,
  ],
  [<path key="a" d="M6 22h6l22-14v28L12 22" />, <path key="b" d="M38 17c2 3 2 7 0 10" />],
  [
    <path key="a" d="M10 28a14 14 0 0 1 24 0" />,
    <path key="b" d="M22 28l6-10" />,
    <circle key="c" cx="22" cy="28" r="2.5" />,
    <path key="d" d="M6 38h32" />,
  ],
];
export default function Lca() {
  usePageMeta(
    "Life Cycle Assessment Services | ISO 14040 & 14044 | Meridian",
    "Assess product and process environmental impacts with LCA support based on ISO 14040 and ISO 14044. Identify environmental hotspots and improvement opportunities.",
  );
  const [activeStage, setActiveStage] = useState(0);
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
              <b>Product Life Cycle Assessment (LCA)</b>
            </p>
            <h1>
              {"Understand the environmental impact of your product "}
              <span>beyond the factory gate.</span>
            </h1>
            <p className="lca-lead">
              A product&apos;s environmental impact begins long before it reaches the customer. Raw
              materials, manufacturing, packaging, transport, use and end-of-life treatment can all
              contribute.
            </p>
            <p className="lca-lead">
              Life Cycle Assessment examines these stages to identify where environmental impacts
              occur and where changes may make the greatest difference. Meridian supports
              organisations in assessing products, processes and services using the principles and
              requirements of ISO 14040 and ISO 14044.
            </p>
            <div className="lca-acts">
              <a className="lca-btn" href="#contact">
                {"Discuss Your LCA Requirements "}
                <i>↗</i>
              </a>
              <a className="lca-btn o" href="#approach">
                {"Our LCA approach "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="lca-stages">
            {lifecycleStages.map((stage, index) => (
              <div key={stage.t}>
                <small>Stage {String(index + 1).padStart(2, "0")}</small>
                <b>{stage.t}</b>
              </div>
            ))}
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
            <span className="lca-lab">01. The product life cycle</span>
            <h2 className="lca-h2">
              {"What does your product's "}
              <em>life cycle</em>
              {" reveal?"}
            </h2>
            <p className="def">
              A product may use less energy during manufacturing but rely on materials with
              significant upstream impacts. Another may have a relatively low production footprint
              but create greater impacts during use or disposal.
            </p>
            <p className="def">
              Looking at only one stage can give an <b>incomplete picture</b>.
            </p>
            <p className="def">
              LCA helps identify environmental hotspots across the defined life cycle and provides a
              more informed basis for product and process decisions.
            </p>
            <div className="lca-std">
              <span>ISO 14040</span>
              <span>ISO 14044</span>
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
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveStage(index);
                      }
                    }}
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
                {" of "}
                {lifecycleStages.length}
              </small>
              <h3>{currentStage.t}</h3>
              <ul>
                <li>{STAGE_NOTE}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="lca-sec" id="approach">
        <div className="lca-wrap">
          <div className="lca-ph-h">
            <div>
              <span className="lca-lab">02. Our LCA approach</span>
              <h2 className="lca-h2">
                {"Our LCA "}
                <em>approach.</em>
              </h2>
            </div>
            <p>Select a phase to see what it involves.</p>
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
          <div className="lca-pb lca-pb-single">
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
          </div>
        </div>
      </section>
      <section className="lca-sec lca-ben-sec" id="benefits">
        <div className="lca-wrap">
          <div className="lca-ben-h">
            <div>
              <span className="lca-lab">03. Where LCA can support your business</span>
              <h2 className="lca-h2">
                {"Where LCA can "}
                <em>support your business.</em>
              </h2>
            </div>
          </div>
          <ul className="lca-bl lca-bl-six">
            {uses.map((item, index) => (
              <li key={item}>
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="lca-sec lca-mer dark" id="meridian">
        <div className="lca-wrap lca-mg">
          <div>
            <span className="lca-lab">04. Why work with Meridian?</span>
            <h2 className="lca-h2">
              {"Why work with "}
              <em>Meridian?</em>
            </h2>
          </div>
          <div className="lca-role">
            <p>
              A useful LCA depends on sound boundaries, appropriate data and transparent
              assumptions.
            </p>
            <p>
              Meridian focuses on making the assessment relevant to the decision your organisation
              needs to make, whether that involves product redesign, material selection, operational
              improvements or supply chain evaluation.
            </p>
          </div>
        </div>
      </section>
      <section className="lca-cta-w" id="contact">
        <div className="lca-wrap">
          <div className="lca-cta">
            <div>
              <span className="lca-lab">05. Request an LCA Consultation</span>
              <h2>
                {"What part of your product life cycle "}
                <span>needs attention?</span>
              </h2>
              <p className="t">
                Tell us about your product, process or service and the reason for the assessment.
                We can discuss the appropriate study scope and data requirements.
              </p>
            </div>
            <EnquiryForm subjectPrefix="LCA consultation request" submitLabel="Request an LCA Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
}
