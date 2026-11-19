import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const support = [
  {
    h: "Sustainability objectives and project review",
    p: "Understand the project brief, intended building use, sustainability targets and applicable requirements.",
  },
  {
    h: "Design and material advice",
    p: "Review opportunities involving the building envelope, materials, lighting, water systems and other relevant design decisions.",
  },
  {
    h: "Building performance coordination",
    p: "Work with the project team to consider energy, water and indoor environmental performance, including coordination with specialist modelling where required.",
  },
  {
    h: "Certification and operational planning",
    p: "Support the selection and pursuit of relevant green building pathways, such as LEED and Mostadam, and consider the requirements for ongoing building performance.",
  },
];
const outcomes = [
  "Lower energy and water demand.",
  "Better consideration of indoor comfort and environmental quality.",
  "More informed material and system selection.",
  "Improved readiness for green building assessments.",
  "Reduced operational inefficiencies over the building's life.",
];
export default function GreenBuildingAdvisory() {
  usePageMeta(
    "Green Building Consultancy and Advisory | Meridian",
    "Improve building sustainability through advisory support for energy, water, materials, indoor environmental quality and green building certification.",
  );
  return (
    <div className="gba-page">
      <section className="gba-hero" id="top">
        <div className="gba-hb">
          <div>
            <p className="gba-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Green Building Advisory</b>
            </p>
            <h1>
              {"Make sustainability part of the building decisions "}
              <i>that matter.</i>
            </h1>
            <p className="gba-lead">
              A building&apos;s environmental performance is shaped by decisions made throughout its
              life. Site selection, orientation, building envelope, materials, lighting, HVAC
              systems, water use and operational controls all influence how a building performs.
            </p>
            <p className="gba-lead">
              Green building advisory helps owners, developers, architects and project teams
              consider these factors together rather than treating sustainability as a requirement
              added at the end. Meridian provides sustainability guidance for building projects,
              from early planning and design through construction and operational considerations.
            </p>
            <div className="gba-acts">
              <a className="gba-pill" href="#contact">
                Discuss Your Building Project →
              </a>
              <a className="gba-pill g" href="#help">
                How Meridian can support your project
              </a>
            </div>
          </div>
          <div className="gba-cert">
            <div>
              <small>Green building pathway</small>
              <b>LEED</b>
            </div>
            <div>
              <small>Green building pathway</small>
              <b>Mostadam</b>
            </div>
            <div>
              <small>Project stages</small>
              <b>Planning to operation</b>
            </div>
          </div>
        </div>
      </section>
      <section className="gba-sec" id="why">
        <div className="gba-wrap">
          <div className="gba-sh">
            <span className="gba-k">01. Building performance</span>
            <h2 className="gba-h2">
              {"Where can your building "}
              <i>perform better?</i>
            </h2>
          </div>
          <div className="gba-bn gba-bn-single">
            <article className="gba-bt def">
              <div>
                <p>
                  A building can have efficient equipment and still{" "}
                  <em>consume more energy than necessary</em> if the envelope, controls and systems
                  are not properly coordinated.
                </p>
                <p>
                  The same applies to water use, material selection, waste management and indoor
                  conditions.
                </p>
                <p>
                  Reviewing these decisions together helps project teams identify opportunities
                  before they become expensive to change.
                </p>
              </div>
              <div className="ch">
                <span>Envelope</span>
                <span>Controls and systems</span>
                <span>Water</span>
                <span>Materials</span>
                <span>Indoor conditions</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="gba-sec gba-help" id="help">
        <div className="gba-wrap">
          <div className="gba-sh">
            <span className="gba-k">02. How Meridian can support your project</span>
            <h2 className="gba-h2">
              {"How Meridian can "}
              <i>support your project.</i>
            </h2>
          </div>
          <ol className="gba-st">
            {support.map((step, index) => (
              <li key={step.h} data-n={index + 1}>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="gba-kb">
        <div className="gba-wrap gba-kg">
          <div>
            <span className="gba-k">03. What better building decisions can deliver</span>
            <h2
              className="gba-h2"
              style={{
                marginTop: "14px",
              }}
            >
              What better building decisions can deliver.
            </h2>
          </div>
          <ul className="gba-kl">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="gba-role">
        <div className="gba-wrap">
          <span className="gba-k">04. Why work with Meridian?</span>
          <h2 className="gba-h2">
            {"Why work with "}
            <i>Meridian?</i>
          </h2>
          <p>
            Sustainable building decisions affect several disciplines. Our advisory approach
            connects environmental objectives with the technical and operational decisions made by
            the project team.
          </p>
          <p>
            We help owners and developers understand which measures are relevant to their project
            and where specialist input or certification support is needed.
          </p>
        </div>
      </section>
      <section className="gba-cta" id="contact">
        <div className="gba-wrap">
          <span className="gba-k">05. Request Green Building Advisory</span>
          <h2
            className="gba-h2"
            style={{
              marginTop: "20px",
            }}
          >
            {"Planning a new building "}
            <i>or upgrading an existing one?</i>
          </h2>
          <p>
            Tell us about your building, its stage and the performance goals you want to achieve.
          </p>
          <EnquiryForm
            subjectPrefix="Green building advisory request"
            submitLabel="Request Green Building Advisory"
          />
        </div>
      </section>
    </div>
  );
}
