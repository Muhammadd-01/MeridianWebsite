import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm";
import usePageMeta from "../../components/usePageMeta";
const marqueeItems = [
  "ESG",
  "GRI Standards",
  "IFRS Sustainability Disclosure Standards",
  "SASB Standards",
  "SDG mapping",
  "Scope 1, 2 and 3",
  "ISO 14001",
  "ISO 50001",
  "LEED",
  "Mostadam",
  "Circular economy",
];
const courses = [
  {
    n: "ESG and Sustainability Fundamentals",
    d: "Understand environmental, social and governance issues, material topics, business responsibilities and the role of sustainability in organisational decisions.",
    t: ["ESG", "Material topics", "Business responsibilities"],
  },
  {
    n: "Sustainability Reporting and Disclosure",
    d: "Explore GRI Standards, IFRS Sustainability Disclosure Standards, SASB Standards and SDG mapping, including the information needed for reporting.",
    t: ["GRI Standards", "IFRS", "SASB Standards", "SDG mapping"],
  },
  {
    n: "Carbon Footprint and Climate Action",
    d: "Develop an understanding of greenhouse gas emissions, Scope 1, Scope 2 and Scope 3, carbon accounting and emissions reduction planning.",
    t: ["Scope 1, 2 and 3", "Carbon accounting", "Emissions reduction"],
  },
  {
    n: "Environmental and Energy Management Standards",
    d: "Build knowledge of ISO 14001, ISO 50001 and relevant environmental and energy management practices.",
    t: ["ISO 14001", "ISO 50001"],
  },
  {
    n: "Green Building and Resource Efficiency",
    d: "Introduce LEED, Mostadam, building performance, energy efficiency, water conservation and sustainable resource use.",
    t: ["LEED", "Mostadam", "Energy efficiency", "Water conservation"],
  },
  {
    n: "Circular Economy and Waste Management",
    d: "Understand waste prevention, material efficiency, resource recovery and circular approaches in operations and product design.",
    t: ["Waste prevention", "Material efficiency", "Resource recovery"],
  },
];
const takeaways = [
  "Better understanding of sustainability responsibilities.",
  "Greater awareness of environmental and resource impacts.",
  "Improved familiarity with relevant standards and frameworks.",
  "Better preparation for internal sustainability initiatives.",
  "Stronger coordination between departments working towards sustainability objectives.",
];
const steps = [
  {
    b: "Understand the need",
    p: "Discuss your organisation's objectives, audience and existing knowledge.",
  },
  {
    b: "Select the subject and level",
    p: "Identify relevant modules and the depth of training required for each group.",
  },
  {
    b: "Plan the delivery",
    p: "Agree the programme structure, schedule and delivery format.",
  },
  {
    b: "Review the learning needs",
    p: "Discuss participant feedback and areas where further development may be useful.",
  },
];
export default function SustainabilityTraining() {
  usePageMeta(
    "Sustainability Training Courses for Organisations | Meridian",
    "Develop your team's sustainability knowledge through training in ESG, reporting, carbon accounting, ISO standards, green buildings and resource efficiency.",
  );
  const [activeCourse, setActiveCourse] = useState(0);
  return (
    <div className="st-page">
      <section className="st-hero dark" id="top">
        <div className="st-wrap st-hg">
          <div>
            <p className="st-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Sustainability Training</b>
            </p>
            <h1>
              {"Give your people the knowledge to put sustainability "}
              <span>into practice.</span>
            </h1>
            <p className="st-lead">
              Sustainability responsibilities now reach across departments. Facilities teams
              influence energy and water use. Procurement teams affect supply chain performance. HR
              and management teams influence social practices, while reporting teams need reliable
              information from across the organisation.
            </p>
            <p className="st-lead">
              A sustainability strategy cannot depend on one department alone. People need to
              understand what sustainability means in their roles and how their decisions affect
              organisational performance.
            </p>
            <p className="st-lead">
              Meridian provides sustainability training for professionals and teams working with
              ESG, environmental management, climate action and sustainable operations.
            </p>
            <div className="st-acts">
              <a className="st-btn" href="#contact">
                {"Request a Training Needs Assessment "}
                <i>↗</i>
              </a>
              <a className="st-btn o" href="#modules">
                {"See the training areas "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="st-vis">
            <div className="st-ph" role="img" aria-label="Team in a training session" />
            <div className="st-chip2">
              <small>Training areas</small>
              <b>Six subject areas</b>
            </div>
            <div className="st-chip">
              <small>Delivery</small>
              <b>Online · Onsite · Hybrid</b>
            </div>
          </div>
        </div>
      </section>
      <div className="st-tape" aria-hidden="true">
        <div className="st-tp">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="st-sec st-what" id="what">
        <div className="st-wrap">
          <span className="st-lab">01. Training that relates to the work people do</span>
          <h2 className="st-h2">
            {"Training that relates to "}
            <em>the work people do.</em>
          </h2>
          <p className="st-def">
            General awareness is a useful starting point, but different roles need different
            knowledge. A facilities team may need to understand energy and water performance. A
            reporting team may need to work with ESG disclosures. A procurement team may need to
            assess supplier sustainability information.
          </p>
          <p className="st-def">
            Our training can be selected around the organisation&apos;s objectives, workforce
            responsibilities and existing level of sustainability knowledge.
          </p>
          <div className="st-std">
            <span>Facilities teams</span>
            <span>Reporting teams</span>
            <span>Procurement teams</span>
            <span>HR and management teams</span>
          </div>
        </div>
      </section>
      <section className="st-sec st-mods dark" id="modules">
        <div className="st-wrap">
          <div className="st-mh">
            <span className="st-lab">02. Training areas</span>
            <h2 className="st-h2">
              {"Training "}
              <em>areas.</em>
            </h2>
            <p>Select a training area to see what it covers.</p>
          </div>
          <div className="st-mx">
            <div className="st-tabs" role="tablist" aria-label="Training areas">
              {courses.map((course, index) => (
                <button
                  key={course.n}
                  className="st-tab"
                  role="tab"
                  id={`tab-${index}`}
                  aria-selected={activeCourse === index}
                  aria-controls="panel-module"
                  tabIndex={activeCourse === index ? 0 : -1}
                  onClick={() => setActiveCourse(index)}
                >
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <span>{course.n}</span>
                </button>
              ))}
            </div>
            <div
              key={activeCourse}
              className="st-pn"
              id="panel-module"
              role="tabpanel"
              aria-labelledby={`tab-${activeCourse}`}
              data-n={String(activeCourse + 1).padStart(2, "0")}
            >
              <div>
                <small>
                  {"Training area "}
                  {String(activeCourse + 1).padStart(2, "0")}
                  {" of "}
                  {String(courses.length).padStart(2, "0")}
                </small>
                <h3>{courses[activeCourse].n}</h3>
                <p>{courses[activeCourse].d}</p>
              </div>
              <div className="st-tags">
                {courses[activeCourse].t.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="st-sec st-why" id="why">
        <div className="st-wrap st-wg">
          <div className="st-sticky">
            <span className="st-lab">03. What your team can take away</span>
            <h2 className="st-h2">
              {"What your team "}
              <em>can take away.</em>
            </h2>
          </div>
          <ul className="st-wr">
            {takeaways.map((item, index) => (
              <li key={item}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                <b>{item}</b>
                <em>→</em>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="st-sec" id="how">
        <div className="st-wrap">
          <div className="st-ch-h">
            <span className="st-lab">04. How we organise the training</span>
            <h2 className="st-h2">
              {"How we organise "}
              <em>the training.</em>
            </h2>
          </div>
          <ul className="st-cl">
            {steps.map((step, index) => (
              <li key={step.b}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <b>{step.b}</b>
                <p>{step.p}</p>
              </li>
            ))}
          </ul>
          <p className="st-note">
            Training can be arranged online, onsite or through a hybrid format, subject to programme
            requirements.
          </p>
        </div>
      </section>
      <section className="st-role dark">
        <div className="st-wrap">
          <span className="st-lab">05. Why work with Meridian?</span>
          <h2>
            {"Why work with "}
            <em>Meridian?</em>
          </h2>
          <p>
            Our sustainability work spans reporting, carbon assessment, management systems, energy
            performance and green building requirements.
          </p>
          <p>
            That experience helps us connect training subjects with the issues organisations face
            in their operations, projects and reporting responsibilities.
          </p>
        </div>
      </section>
      <section className="st-cta-w" id="contact">
        <div className="st-wrap">
          <div className="st-cta">
            <div>
              <span className="st-lab">06. Request a Sustainability Training Needs Assessment</span>
              <h2>
                {"What does your team "}
                <span>need to learn?</span>
              </h2>
              <p className="t">
                Tell us about your industry, the people who need training and the sustainability
                goals you are working towards. We can help identify a suitable training programme.
              </p>
            </div>
            <EnquiryForm
              subjectPrefix="Sustainability Training Needs Assessment"
              submitLabel="Request a Sustainability Training Needs Assessment"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
