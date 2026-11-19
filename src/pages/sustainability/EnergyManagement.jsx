import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const support = [
  {
    h: "Initial review and gap assessment",
    p: "Review existing energy management practices, responsibilities, available data and gaps against the standard's requirements.",
  },
  {
    h: "Energy review and baseline",
    p: "Identify significant energy uses, relevant variables and energy performance indicators. Establish the appropriate energy baseline.",
  },
  {
    h: "EnMS development and implementation",
    p: "Support energy policy, objectives, action plans, operational controls, monitoring and documented information.",
  },
  {
    h: "Internal audit and management review readiness",
    p: "Help prepare the organisation to evaluate its system, address gaps and prepare for an independent certification audit where certification is pursued.",
  },
];
const outcomes = [
  "Identify and monitor significant energy uses.",
  "Establish measurable energy objectives and targets.",
  "Track energy performance against a suitable baseline.",
  "Assign responsibilities for energy management.",
  "Integrate energy considerations into operational decisions.",
  "Review performance and identify further improvements.",
];
export default function EnergyManagement() {
  usePageMeta(
    "ISO 50001 Consultancy | Energy Management Systems | Meridian",
    "Implement and improve an ISO 50001 Energy Management System with support for energy reviews, baselines, performance indicators and certification readiness.",
  );
  return (
    <div className="enms-page">
      <section className="enms-hero" id="top">
        <div className="enms-hb">
          <div>
            <p className="enms-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>{"ISO 50001 & Energy Management Systems"}</b>
            </p>
            <h1>
              {"Energy costs are visible. "}
              <i>Energy waste is not always so easy to find.</i>
            </h1>
            <p className="enms-lead">
              Many organisations monitor utility bills without having a complete picture of where
              energy is used, which processes consume the most or why performance changes over
              time.
            </p>
            <p className="enms-lead">
              ISO 50001 provides a structured way to manage energy use, establish performance
              objectives and improve energy performance through an Energy Management System (EnMS).
              Meridian supports organisations in developing and implementing energy management
              arrangements aligned with ISO 50001:2018.
            </p>
            <div className="enms-acts">
              <a className="enms-pill" href="#contact">
                Discuss Your Energy Management Requirements →
              </a>
              <a className="enms-pill g" href="#help">
                Our implementation support
              </a>
            </div>
          </div>
          <div className="enms-cert">
            <div>
              <small>International standard</small>
              <b>ISO 50001:2018</b>
            </div>
            <div>
              <small>System</small>
              <b>EnMS</b>
            </div>
            <div>
              <small>Focus</small>
              <b>Energy performance</b>
            </div>
          </div>
        </div>
      </section>
      <section className="enms-sec" id="why">
        <div className="enms-wrap">
          <div className="enms-sh">
            <span className="enms-k">01. From energy consumption to energy performance</span>
            <h2 className="enms-h2">
              {"From energy consumption "}
              <i>to energy performance.</i>
            </h2>
          </div>
          <div className="enms-bn enms-bn-single">
            <article className="enms-bt def">
              <div>
                <p>
                  An effective energy management system needs{" "}
                  <em>reliable information about how energy is used.</em>
                </p>
                <p>
                  Organisations must identify significant energy uses, understand the factors
                  affecting consumption, establish suitable energy performance indicators and review
                  whether actions are improving performance.
                </p>
                <p>
                  Without this information, energy-saving initiatives can become isolated projects
                  rather than part of an ongoing management system.
                </p>
              </div>
              <div className="ch">
                <span>Significant energy uses</span>
                <span>Energy performance indicators</span>
                <span>Energy baseline</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="enms-sec enms-help" id="help">
        <div className="enms-wrap">
          <div className="enms-sh">
            <span className="enms-k">02. Our ISO 50001 implementation support</span>
            <h2 className="enms-h2">
              {"Our ISO 50001 "}
              <i>implementation support.</i>
            </h2>
          </div>
          <ol className="enms-st">
            {support.map((step, index) => (
              <li key={step.h} data-n={index + 1}>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="enms-kb">
        <div className="enms-wrap enms-kg">
          <div>
            <span className="enms-k">03. What the system helps your organisation do</span>
            <h2
              className="enms-h2"
              style={{
                marginTop: "14px",
              }}
            >
              What the system helps your organisation do.
            </h2>
          </div>
          <ul className="enms-kl">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="enms-role">
        <div className="enms-wrap">
          <span className="enms-k">04. Why work with Meridian?</span>
          <h2 className="enms-h2">
            {"Why work with "}
            <i>Meridian?</i>
          </h2>
          <p>
            ISO 50001 needs to work within the organisation&apos;s actual operations. The energy
            review, performance indicators, responsibilities and monitoring arrangements must
            reflect how the organisation uses energy.
          </p>
          <p>
            Meridian helps connect the requirements of the standard with practical energy
            management activities and existing management systems.
          </p>
        </div>
      </section>
      <section className="enms-cta" id="contact">
        <div className="enms-wrap">
          <span className="enms-k">05. Request ISO 50001 Support</span>
          <h2
            className="enms-h2"
            style={{
              marginTop: "20px",
            }}
          >
            {"Looking to establish "}
            <i>or improve an EnMS?</i>
          </h2>
          <p>
            Tell us about your facilities, operations and current energy management arrangements.
            We can discuss the scope of an ISO 50001 implementation project.
          </p>
          <EnquiryForm subjectPrefix="ISO 50001 support request" submitLabel="Request ISO 50001 Support" />
        </div>
      </section>
    </div>
  );
}
