import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "LEED",
  "Energy",
  "Water",
  "Materials",
  "Waste",
  "Indoor environmental quality",
  "Rating selection",
  "Credit planning",
  "Technical documentation",
  "Certification review",
];
const steps = [
  {
    num: "01",
    title: "Project assessment and rating selection",
    desc: "Review the building type, project stage, intended use and certification objectives. Identify the applicable LEED rating system and version.",
  },
  {
    num: "02",
    title: "Design and credit planning",
    desc: "Review relevant prerequisites and credits, identify responsibilities and coordinate sustainability requirements with the design team.",
  },
  {
    num: "03",
    title: "Technical documentation",
    desc: "Help organise calculations, specifications, drawings, product information and other evidence required for the selected credits.",
  },
  {
    num: "04",
    title: "Construction and submission support",
    desc: "Track implementation, review supporting records and coordinate documentation for submission and certification review.",
  },
];
const achievements = [
  "Better coordination of energy and water efficiency measures.",
  "Consideration of materials, waste and indoor environmental quality.",
  "Clearer sustainability requirements for project teams.",
  "A structured route towards the selected LEED certification level.",
  "Documented building performance against the applicable rating criteria.",
];
export default function Leed() {
  usePageMeta(
    "LEED Certification Consulting and Support | Meridian",
    "Get LEED project support for rating selection, design coordination, credit documentation and certification submission.",
  );
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="leed-page">
      <section className="leed-hero dark">
        <div className="leed-hero-bg" aria-hidden="true" />
        <div className="leed-wrap">
          <p className="leed-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/sustainability">Sustainability</Link>
            {" / "}
            <b>LEED Certification Support</b>
          </p>
          <h1 className="leed-h1">
            {"Planning a green building project? "}
            <span>Make the certification requirements part of the design from the start.</span>
          </h1>
          <p className="leed-lead">
            LEED certification considers how a building performs across areas such as energy, water,
            materials, waste and indoor environmental quality.
          </p>
          <p className="leed-lead">
            For developers, owners and project teams, the work begins well before an application is
            submitted. The right rating system must be selected, project goals established and the
            relevant requirements incorporated into design and construction decisions. Meridian
            supports project teams with LEED planning, technical coordination and certification
            documentation.
          </p>
          <div className="leed-acts">
            <a className="leed-btn" href="#contact">
              Discuss Your LEED Project ↗
            </a>
            <a className="leed-btn o" href="#process">
              Our LEED support ↓
            </a>
          </div>
        </div>
      </section>
      <div className="leed-tape" aria-hidden="true">
        <div className="leed-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="leed-sec" id="what">
        <div className="leed-wrap leed-wh">
          <div>
            <span className="leed-lab">01. Your project</span>
            <h2 className="leed-h2">
              {"Where does your "}
              <em>project</em>
              {" stand?"}
            </h2>
            <p className="leed-def">
              A building may include energy-efficient equipment and sustainable materials but still
              fall short of its intended LEED rating if the requirements are not coordinated across
              the project.
            </p>
            <p className="leed-def">
              Early assessment helps the team understand which credits are relevant, what evidence
              will be required and where design or construction changes may be needed.
            </p>
          </div>
          <div>
            <div className="leed-cats">
              <p>Areas LEED certification considers</p>
              <ul>
                <li>Energy</li>
                <li>Water</li>
                <li>Materials</li>
                <li>Waste</li>
                <li>Indoor environmental quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="leed-sec leed-proc"
        id="process"
        style={{
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="leed-wrap leed-pg dark">
          <div className="leed-sticky">
            <span className="leed-lab">02. Our LEED support</span>
            <h2
              className="leed-h2"
              style={{
                color: "#fff",
                marginTop: "18px",
              }}
            >
              {"Our LEED "}
              <span>support.</span>
            </h2>
            <div className="leed-meter" aria-hidden="true">
              <i
                style={{
                  width: ((activeStep + 1) / steps.length) * 100 + "%",
                }}
              />
            </div>
            <small>
              {"STEP "}
              {activeStep + 1}
              {" OF "}
              {steps.length}
            </small>
          </div>
          <div className="leed-stack">
            {steps.map((step, index) => (
              <article
                key={step.num}
                className={"leed-sc " + (activeStep === index ? "act" : "")}
                onClick={() => setActiveStep(index)}
              >
                <div className="leed-n">{step.num}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="leed-sec">
        <div className="leed-wrap leed-vs">
          <div className="leed-pn a">
            <span className="leed-lab">03. What the project can achieve</span>
            <h2 className="leed-h2">
              {"What the project "}
              <em>can achieve.</em>
            </h2>
            <ul>
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="leed-pn b dark">
            <span
              className="leed-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              04. Why work with Meridian?
            </span>
            <h2
              className="leed-h2"
              style={{
                color: "#fff",
              }}
            >
              {"Why work with "}
              <span>Meridian?</span>
            </h2>
            <p className="leed-pn-copy">
              LEED requirements affect several disciplines, from architecture and building services
              to construction and facilities management.
            </p>
            <p className="leed-pn-copy">
              Meridian brings sustainability requirements into the project discussion, helping the
              relevant teams understand what needs to be addressed, documented and reviewed at each
              stage.
            </p>
          </div>
        </div>
      </section>
      <section className="leed-cta dark" id="contact">
        <div className="leed-wrap leed-cg">
          <div>
            <span className="leed-lab">05. Request LEED Project Support</span>
            <h2>
              {"Is your project "}
              <span>considering LEED?</span>
            </h2>
            <p className="leed-t">
              Tell us about the building, its current stage and the certification level you are
              considering. We can discuss the appropriate assessment and support requirements.
            </p>
          </div>
          <EnquiryForm subjectPrefix="LEED project support request" submitLabel="Request LEED Project Support" />
        </div>
      </section>
    </div>
  );
}
